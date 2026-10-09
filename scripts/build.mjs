// tokens/*.json → generated/{ios,android,web}. 의존성 없음 (node 18+).
//   node scripts/build.mjs           생성
//   node scripts/build.mjs --check   생성물이 tokens와 어긋나면 exit 1 (커밋 전·CI용)
// ponytail: 포맷이 4종뿐이라 Style Dictionary 대신 직접 쓴다. 그림자·모션 토큰이 생기면 그때 갈아탈 것.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const tokens = Object.assign({}, ...readdirSync(join(root, 'tokens'))
  .filter(f => f.endsWith('.json')).sort()
  .map(f => JSON.parse(readFileSync(join(root, 'tokens', f), 'utf8'))))

// 그룹의 토큰만 순서대로. "{group.name}" 별칭은 alias로 남겨 플랫폼 코드에서도 별칭으로 쓴다.
const entries = group => Object.entries(tokens[group])
  .filter(([k]) => !k.startsWith('$'))
  .map(([name, t]) => {
    const alias = typeof t.$value === 'string' && t.$value.match(/^\{(\w+)\.(\w+)\}$/)
    if (alias && !tokens[alias[1]]?.[alias[2]]) throw new Error(`깨진 별칭: ${group}.${name} → ${t.$value}`)
    return { name, value: t.$value, alias: alias ? alias[2] : null, desc: t.$description }
  })

const HEADER = '자동 생성 파일 — 직접 고치지 말 것. 정본: dignify-design/tokens'
const doc = (d, pad) => d ? `${pad}/// ${d}\n` : ''
const hex = v => v.replace('#', '').toUpperCase()
// 색 값은 "#RRGGBB" 또는 { hex, alpha }.
const rgb = v => hex(typeof v === 'string' ? v : v.hex)
const alpha = v => typeof v === 'string' ? 1 : v.alpha
const a255 = v => Math.round(alpha(v) * 255).toString(16).padStart(2, '0').toUpperCase()
const num = String
const swiftWeight = { 400: 'regular', 500: 'medium', 600: 'semibold', 700: 'bold' }
const kotlinWeight = { 400: 'Normal', 500: 'Medium', 600: 'SemiBold', 700: 'Bold' }
const check = w => { if (!swiftWeight[w]) throw new Error(`지원 안 하는 fontWeight: ${w}`); return w }

function swift() {
  const block = (name, type, group, fmt) => `enum ${name} {\n` + entries(group).map(e =>
    doc(e.desc, '    ') + `    static let ${e.name}${type} = ${e.alias ?? fmt(e.value)}\n`).join('') + '}\n'
  return `// ${HEADER}\nimport SwiftUI\n\n` + [
    block('DSColor', '', 'color', v => alpha(v) === 1 ? `Color(hex: 0x${rgb(v)})` : `Color(hex: 0x${rgb(v)}, alpha: ${alpha(v)})`),
    block('DSTypography', '', 'typography', v => `Font.system(size: ${num(v.fontSize)}, weight: .${swiftWeight[check(v.fontWeight)]})`),
    block('DSRadius', ': CGFloat', 'radius', num),
    block('DSSpacing', ': CGFloat', 'spacing', num),
  ].join('\n') + `
extension Color {
    init(hex: UInt, alpha: Double = 1) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255,
            opacity: alpha
        )
    }
}
`
}

function kotlin() {
  const block = (name, group, fmt) => `object ${name} {\n` + entries(group).map(e =>
    (e.desc ? `    /** ${e.desc} */\n` : '') + `    val ${e.name} = ${e.alias ?? fmt(e.value)}\n`).join('') + '}\n'
  const sp = v => Number.isInteger(v) ? `${v}.sp` : `${v}f.sp`
  return `// ${HEADER}
package com.rta.dignify.core.designsystem

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

` + [
    block('DSColor', 'color', v => `Color(0x${a255(v)}${rgb(v)})`),
    block('DSTypography', 'typography', v => `TextStyle(fontSize = ${sp(v.fontSize)}, fontWeight = FontWeight.${kotlinWeight[check(v.fontWeight)]})`),
    block('DSRadius', 'radius', v => `${v}.dp`),
    block('DSSpacing', 'spacing', v => `${v}.dp`),
  ].join('\n')
}

// HTML 시안용. 이름은 --{group}-{name}, 타이포는 font 축약형 하나로.
function css() {
  const kebab = s => s.replace(/[A-Z]/g, c => '-' + c.toLowerCase()).replace('_', '-')
  const line = (g, e, v) => `  --${g}-${kebab(e.name)}: ${e.alias ? `var(--${g}-${kebab(e.alias)})` : v};\n`
  return `/* ${HEADER} */\n:root {\n` +
    entries('color').map(e => line('color', e, alpha(e.value) === 1 ? `#${rgb(e.value)}` : `#${rgb(e.value)}${a255(e.value)}`)).join('') +
    entries('typography').map(e => line('typography', e, `${e.value.fontWeight} ${e.value.fontSize}px/1.4 -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", sans-serif`)).join('') +
    entries('radius').map(e => line('radius', e, `${e.value}px`)).join('') +
    entries('spacing').map(e => line('spacing', e, `${e.value}px`)).join('') + '}\n'
}

const outputs = {
  'generated/ios/DSTokens.swift': swift(),
  'generated/android/DSTokens.kt': kotlin(),
  'generated/web/tokens.css': css(),
}

// Storybook용 CSS 한 벌: 토큰 + 애셋(data URI) + screens/_shared.css + 컴포넌트 CSS. 앨범 커버만 네트워크(iTunes CDN)에서 받는다.
const assets = ':root {\n' + readdirSync(join(root, 'assets')).filter(f => f.endsWith('.png')).sort().map(f =>
  `  --asset-${f.replace('.png', '')}: url(data:image/png;base64,${readFileSync(join(root, 'assets', f)).toString('base64')});\n`).join('') + '}\n'
// 컴포넌트 CSS(components/*/*.css)도 같이 묶는다 — 시안과 Storybook이 같은 CSS 한 벌을 쓴다.
const componentCss = readdirSync(join(root, 'components'), { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort()
  .flatMap(n => readdirSync(join(root, 'components', n)).filter(f => f.endsWith('.css')).map(f => readFileSync(join(root, 'components', n, f), 'utf8')))
const ds = css() + assets + readFileSync(join(root, 'screens', '_shared.css'), 'utf8') + componentCss.join('')
outputs['generated/web/ds.css'] = `/* ${HEADER} — 토큰 + 애셋 + screens/_shared.css + 컴포넌트별 css. Storybook preview가 이 파일을 쓴다 */\n` + ds

if (process.argv.includes('--check')) {
  const stale = Object.entries(outputs).filter(([p, s]) => {
    try { return readFileSync(join(root, p), 'utf8') !== s } catch { return true }
  }).map(([p]) => p)
  if (stale.length) { console.error('생성물이 tokens와 다릅니다. node scripts/build.mjs 실행 후 커밋:\n  ' + stale.join('\n  ')); process.exit(1) }
  console.log('OK — 생성물 최신')
} else {
  for (const [p, s] of Object.entries(outputs)) writeFileSync(join(root, p), s)
  console.log('생성:', Object.keys(outputs).join(', '))
}
