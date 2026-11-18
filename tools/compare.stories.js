// 가이드 › 버전 비교 — 같은 화면을 두 버전으로 나란히 띄운다. 양쪽 다 프로토타입이라 눌러 볼 수 있고, 치수·가이드를 양쪽에 같이 건다.
// 버전 = 배포된 스냅샷(v/versions.json, .github/workflows/storybook.yml). 로컬(npm run dev)엔 스냅샷이 없어 「현재」만 있다.
import { setMeasure } from './measure.js'
export default { title: '가이드/버전 비교', parameters: { layout: 'fullscreen' } }

const CSS = `
.vc { min-height: 100vh; background: #F3F4F6; font: 13px/1.4 -apple-system, "Apple SD Gothic Neo", sans-serif; color: #111827; }
.vc-bar { position: sticky; top: 0; z-index: 2; display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; padding: 10px 16px; background: #fff; border-bottom: 1px solid #E5E7EB; }
.vc-bar label { display: flex; gap: 6px; align-items: center; color: #6B7280; }
.vc-bar select, .vc-bar input[type=text] { font: inherit; padding: 4px 6px; border: 1px solid #D1D5DB; border-radius: 6px; background: #fff; color: #111827; max-width: 280px; }
.vc-row { display: flex; gap: 24px; justify-content: center; padding: 16px; overflow-x: auto; }
.vc-col { display: flex; flex-direction: column; gap: 8px; align-items: center; }
.vc-col h3 { font-size: 13px; font-weight: 600; }
.vc-col h3 small { font-weight: 400; color: #6B7280; margin-left: 6px; }
.vc-miss { color: #EF4444; font-size: 12px; }
.vc-frame { border: 0; background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.08); }`

const get = (k, d) => { try { return localStorage.getItem('vc:' + k) ?? d } catch { return d } }
const put = (k, v) => { try { localStorage.setItem('vc:' + k, v) } catch {} }
const base = v => v === 'current' ? '' : `v/${v}/`
// main은 배포마다 청크 이름(해시)이 바뀌고 옛 청크는 지워진다. Pages가 iframe.html·index.json을 10분 캐시해서
// 배포 직후엔 옛 iframe.html이 없는 청크를 불러 「Failed to fetch dynamically imported module」이 났다 → main만 캐시를 건너뛴다(스냅샷은 안 바뀐다)
const BUST = Date.now()
const fresh = v => v === 'current' ? `&_=${BUST}` : ''
const indexes = {}
const index = v => indexes[v] ||= fetch(base(v) + 'index.json', v === 'current' ? { cache: 'no-store' } : {}).then(r => r.ok ? r.json() : { entries: {} }).then(j => j.entries || {}).catch(() => ({}))

export const Compare = { name: '버전 비교', render: () => {
  const el = document.createElement('div')
  el.className = 'vc'
  el.innerHTML = `<style>${CSS}</style><div class="vc-bar">불러오는 중…</div><div class="vc-row"></div>`
  start(el)
  return el
} }

async function start(el) {
  const versions = await fetch('v/versions.json').then(r => r.ok ? r.json() : []).catch(() => [])
  const opts = [{ name: 'current', label: '현재 (main)' }, ...versions.map(v => ({ name: v.name, label: `${v.name}${v.date ? ' · ' + v.date : ''}` }))]
  const has = n => opts.some(o => o.name === n)
  const cur = await index('current')
  const stories = Object.values(cur).filter(e => e.type === 'story' && /^(Screens|Flows|Components)\//.test(e.title))
  const s = {
    story: get('story', 'screens-3-마이--my'), args: get('args', ''),
    left: get('left', versions[1]?.name || versions[0]?.name || 'current'), right: get('right', 'current'),
    measure: get('measure', 'off') === 'on', guide: get('guide', 'off') === 'on', zoom: +get('zoom', '0.8'),
  }
  if (!has(s.left)) s.left = versions[0]?.name || 'current'
  if (!has(s.right)) s.right = 'current'
  if (!cur[s.story]) s.story = stories[0]?.id

  const groups = {}
  stories.forEach(e => { const g = e.title.split('/')[0]; (groups[g] ||= []).push(e) })
  const storySel = Object.entries(groups).map(([g, list]) => `<optgroup label="${g}">${list.map(e => `<option value="${e.id}">${e.title.split('/').slice(1).join(' / ')} — ${e.name}</option>`).join('')}</optgroup>`).join('')
  const verSel = side => `<select data-k="${side}">${opts.map(o => `<option value="${o.name}">${o.label}</option>`).join('')}</select>`
  const bar = el.querySelector('.vc-bar')
  bar.innerHTML = `<label>화면 <select data-k="story">${storySel}</select></label>
    <label>왼쪽 ${verSel('left')}</label><label>오른쪽 ${verSel('right')}</label>
    <label title="스토리 Controls 값 — 예: start:alerts;permission:unset">args <input type="text" data-k="args" placeholder="start:alerts" size="18"></label>
    <label><input type="checkbox" data-k="measure"> 치수</label><label><input type="checkbox" data-k="guide"> 가이드</label>
    <label>배율 <input type="range" data-k="zoom" min="0.5" max="1" step="0.05"></label>
    ${versions.length ? '' : '<span class="vc-miss">배포된 버전 스냅샷이 없다 — 로컬이거나 아직 태그(snap/…)가 없다</span>'}`
  for (const f of bar.querySelectorAll('[data-k]')) {
    const k = f.dataset.k
    if (f.type === 'checkbox') f.checked = s[k]; else f.value = s[k]
    f.addEventListener(f.type === 'text' ? 'change' : 'input', () => {
      s[k] = f.type === 'checkbox' ? f.checked : f.type === 'range' ? +f.value : f.value
      put(k, f.type === 'checkbox' ? (f.checked ? 'on' : 'off') : String(s[k]))
      if (k === 'measure' || k === 'guide') return frames().forEach(apply)
      if (k === 'zoom') return frames().forEach(fr => { fr.style.zoom = s.zoom })
      draw()
    })
  }
  const row = el.querySelector('.vc-row')
  const frames = () => [...row.querySelectorAll('iframe')]
  const apply = fr => { try { if (fr.contentDocument?.body) setMeasure(fr.contentDocument, { on: s.measure, guide: s.guide, lock: true }) } catch {} }
  const draw = async () => {
    const cols = await Promise.all(['left', 'right'].map(async side => {
      const v = s[side], ent = (await index(v))[s.story], label = opts.find(o => o.name === v)?.label || v
      const url = `${base(v)}iframe.html?id=${encodeURIComponent(s.story)}&viewMode=story${fresh(v)}${s.args ? '&args=' + encodeURIComponent(s.args).replace(/%3A/g, ':').replace(/%3B/g, ';') : ''}`
      return `<div class="vc-col"><h3>${side === 'left' ? '왼쪽' : '오른쪽'}<small>${label}</small></h3>
        ${ent ? `<iframe class="vc-frame" src="${url}" width="460" height="920" style="zoom:${s.zoom}"></iframe>` : '<p class="vc-miss">이 버전에는 없는 화면이다(새로 생겼거나 이름이 바뀜)</p>'}</div>`
    }))
    row.innerHTML = cols.join('')
    frames().forEach(fr => fr.addEventListener('load', () => { apply(fr); setTimeout(() => apply(fr), 800) }))
  }
  draw()
}
