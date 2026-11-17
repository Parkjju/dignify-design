// 치수 — Figma의 Alt 호버처럼 크기·간격을 pt로 보여 준다(Storybook 미리보기 전용, 앱·컴포넌트와 무관).
//   호버: 요소 테두리 + W×H + 부모 안쪽까지 위·아래·좌·우 거리
//   클릭: 그 요소를 고정 → 다른 요소에 호버하면 두 요소 사이 거리. 같은 요소 다시 클릭·Esc = 풀기
//   오른쪽 위 패널: 글자 크기·굵기·줄 높이·색, 지면색·라운드·안쪽 여백 + 맞는 토큰 이름(없으면 「토큰 없음」)
//   가이드: 기기마다 좌우 16·20 선, safe area(위 54·아래 34), 4pt 그리드
// 단위 pt = 기기 프레임(393) 기준. Storybook 확대·축소와 무관하다. 기기 밖(컴포넌트 스토리)은 px 그대로.
// 켜 있는 동안 화면의 클릭·끌기는 막는다(재는 클릭이 프로토타입을 누르지 않게).
// setMeasure(document, { on, guide }) — 미리보기 데코레이터와 버전 비교 화면이 같이 쓴다. lock: 버전 비교가 건 값은 미리보기 데코레이터가 덮지 않는다

const BLUE = '#0D99FF', RED = '#F24822', PINK = 'rgba(236,72,153,.75)'

export function setMeasure(doc, { on = false, guide = false, lock = false } = {}) {
  const w = doc.defaultView
  const st = w.__dsMeasure || (w.__dsMeasure = init(doc))
  if (st.locked && !lock) return
  if (lock) st.locked = true
  st.on = on; st.guide = guide
  if (!on) { st.pinned = null; st.hover = null }
  st.root.style.display = on || guide ? '' : 'none'
  st.panel.style.display = on ? '' : 'none'
  doc.documentElement.style.cursor = on ? 'crosshair' : ''
  st.loop()
}

function init(doc) {
  const w = doc.defaultView
  const root = doc.createElement('div')
  root.setAttribute('data-ds-measure', '')
  root.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:2147483646'
  const cv = doc.createElement('canvas')
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%'
  const panel = doc.createElement('div')
  panel.style.cssText = 'position:fixed;top:8px;right:8px;z-index:2147483647;pointer-events:none;max-width:280px;padding:8px 10px;border-radius:8px;background:rgba(17,24,39,.92);color:#fff;font:11px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap'
  root.append(cv)
  doc.body.append(root, panel)
  const st = { doc, w, root, cv, panel, on: false, guide: false, hover: null, pinned: null, raf: 0, tokens: null }

  const own = el => el && (el === root || el === panel || root.contains(el))
  w.addEventListener('mousemove', e => { if (!st.on) return; const el = doc.elementFromPoint(e.clientX, e.clientY); st.hover = own(el) ? null : el }, true)
  // 재는 동안 화면 조작 막기
  for (const t of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'dblclick', 'touchstart', 'touchend'])
    w.addEventListener(t, e => { if (st.on && !own(e.target)) { e.preventDefault(); e.stopImmediatePropagation() } }, { capture: true, passive: false })
  w.addEventListener('click', e => {
    if (!st.on || own(e.target)) return
    e.preventDefault(); e.stopImmediatePropagation()
    st.pinned = st.pinned === st.hover ? null : st.hover
  }, true)
  w.addEventListener('keydown', e => { if (st.on && e.key === 'Escape') st.pinned = null })
  st.loop = () => { if (!st.raf && (st.on || st.guide)) st.raf = w.requestAnimationFrame(frame) }
  const frame = () => { st.raf = 0; if (!(st.on || st.guide)) return clear(st); draw(st); st.raf = w.requestAnimationFrame(frame) }
  return st
}

function clear(st) { st.cv.getContext('2d').clearRect(0, 0, st.cv.width, st.cv.height) }

// 기기 배율: 화면에 그려진 폭 / 실제 폭(393)
const scaleOf = el => { const d = el?.closest?.('.device'); return d ? d.getBoundingClientRect().width / d.offsetWidth : 1 }
const pt = (px, k) => { const v = Math.round(px / k * 10) / 10; return Number.isInteger(v) ? String(v) : v.toFixed(1) }
const same = (a, b) => Math.abs(a.left - b.left) < .5 && Math.abs(a.top - b.top) < .5 && Math.abs(a.width - b.width) < .5 && Math.abs(a.height - b.height) < .5
// 부모 = 크기가 다른 첫 조상(같은 크기 껍데기는 건너뛴다)
const parentOf = el => { const r = el.getBoundingClientRect(); for (let p = el.parentElement; p; p = p.parentElement) { if (p.tagName === 'BODY') return null; if (!same(p.getBoundingClientRect(), r)) return p } return null }
const inside = (a, b) => a.left >= b.left - .5 && a.right <= b.right + .5 && a.top >= b.top - .5 && a.bottom <= b.bottom + .5

function draw(st) {
  // 캔버스는 보이는 영역(스크롤바 제외) 크기로 — innerWidth로 잡으면 스크롤바 폭만큼 가로로 눌려 오른쪽으로 갈수록 어긋난다
  const { cv, w } = st, dpr = w.devicePixelRatio || 1, W = st.root.clientWidth, H = st.root.clientHeight
  if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr) }
  const g = cv.getContext('2d')
  g.setTransform(dpr, 0, 0, dpr, 0, 0)
  g.clearRect(0, 0, W, H)
  if (st.guide) guides(st, g)
  if (!st.on) return
  const h = st.hover?.isConnected ? st.hover : null, p = st.pinned?.isConnected ? st.pinned : null
  if (st.pinned && !p) st.pinned = null
  if (p) box(g, p.getBoundingClientRect(), RED, scaleOf(p), true)
  if (h && h !== p) {
    const k = scaleOf(h), r = h.getBoundingClientRect()
    box(g, r, BLUE, k, !p)
    if (p) gaps(g, p.getBoundingClientRect(), r, k)
    else { const par = parentOf(h); if (par) gaps(g, par.getBoundingClientRect(), r, k) }
  }
  st.panel.textContent = info(st, h || p)
}

function box(g, r, color, k, size) {
  g.strokeStyle = color; g.lineWidth = 1; g.setLineDash([])
  g.strokeRect(Math.round(r.left) + .5, Math.round(r.top) + .5, Math.round(r.width) - 1, Math.round(r.height) - 1)
  if (size) tag(g, `${pt(r.width, k)} × ${pt(r.height, k)}`, r.left + r.width / 2, r.bottom + 10, color)
}

// a, b 사이 거리. 하나가 다른 하나 안에 있으면 안쪽 네 변 → 바깥 네 변, 아니면 떨어진 쪽만
function gaps(g, a, b, k) {
  const line = (x1, y1, x2, y2) => {
    const d = Math.hypot(x2 - x1, y2 - y1); if (d < .5) return
    g.strokeStyle = RED; g.lineWidth = 1; g.setLineDash([])
    g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke()
    tag(g, pt(d, k), (x1 + x2) / 2, (y1 + y2) / 2, RED)
  }
  const [inn, out] = inside(b, a) ? [b, a] : inside(a, b) ? [a, b] : [null, null]
  if (inn) {
    const cx = inn.left + inn.width / 2, cy = inn.top + inn.height / 2
    line(cx, out.top, cx, inn.top); line(cx, inn.bottom, cx, out.bottom)
    line(out.left, cy, inn.left, cy); line(inn.right, cy, out.right, cy)
    return
  }
  // 가로: 겹치는 세로 구간 가운데에 선(안 겹치면 b 가운데 높이)
  const midY = (Math.max(a.top, b.top) + Math.min(a.bottom, b.bottom)) / 2, y = a.bottom > b.top && b.bottom > a.top ? midY : b.top + b.height / 2
  const midX = (Math.max(a.left, b.left) + Math.min(a.right, b.right)) / 2, x = a.right > b.left && b.right > a.left ? midX : b.left + b.width / 2
  if (b.left >= a.right) line(a.right, y, b.left, y)
  else if (a.left >= b.right) line(b.right, y, a.left, y)
  if (b.top >= a.bottom) line(x, a.bottom, x, b.top)
  else if (a.top >= b.bottom) line(x, b.bottom, x, a.top)
}

function tag(g, text, x, y, color) {
  g.font = '600 11px -apple-system, sans-serif'
  const tw = g.measureText(text).width + 8
  g.fillStyle = color; g.beginPath(); g.roundRect(x - tw / 2, y - 8, tw, 16, 3); g.fill()
  g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, x, y + .5)
}

function guides(st, g) {
  for (const d of st.doc.querySelectorAll('.device')) {
    const r = d.getBoundingClientRect(), k = r.width / d.offsetWidth
    if (!r.width) continue
    g.save(); g.beginPath(); g.rect(r.left, r.top, r.width, r.height); g.clip()
    // 4pt 그리드
    g.strokeStyle = 'rgba(13,153,255,.08)'; g.lineWidth = 1; g.beginPath()
    for (let x = 0; x <= d.offsetWidth; x += 4) { const X = Math.round(r.left + x * k) + .5; g.moveTo(X, r.top); g.lineTo(X, r.bottom) }
    for (let y = 0; y <= d.offsetHeight; y += 4) { const Y = Math.round(r.top + y * k) + .5; g.moveTo(r.left, Y); g.lineTo(r.right, Y) }
    g.stroke()
    // safe area
    g.fillStyle = 'rgba(236,72,153,.10)'
    g.fillRect(r.left, r.top, r.width, 54 * k); g.fillRect(r.left, r.bottom - 34 * k, r.width, 34 * k)
    // 좌우 16·20
    g.setLineDash([4, 3]); g.strokeStyle = PINK
    for (const m of [16, 20]) { g.globalAlpha = m === 20 ? 1 : .5; g.beginPath()
      g.moveTo(r.left + m * k, r.top); g.lineTo(r.left + m * k, r.bottom); g.moveTo(r.right - m * k, r.top); g.lineTo(r.right - m * k, r.bottom); g.stroke() }
    g.restore(); g.globalAlpha = 1; g.setLineDash([])
  }
}

// ── 토큰 역조회: :root의 --color-* · --typography-* 를 실제 값으로 풀어 값 → 이름 표를 만든다(그 문서의 토큰 — 이전 버전이면 그 버전 토큰)
function tokens(st) {
  if (st.tokens) return st.tokens
  const { doc, w } = st, names = new Set()
  for (const sh of doc.styleSheets) { let rules; try { rules = sh.cssRules } catch { continue }
    for (const r of rules) if (r.selectorText === ':root') for (const n of r.style) if (/^--(color|typography)-/.test(n)) names.add(n) }
  const probe = doc.createElement('i'); probe.style.cssText = 'position:absolute;visibility:hidden'; doc.body.append(probe)
  const color = new Map(), font = new Map()
  const push = (m, k, n) => m.set(k, [...(m.get(k) || []), n])
  for (const n of names) {
    if (n.startsWith('--color-')) { probe.style.color = `var(${n})`; push(color, w.getComputedStyle(probe).color, n.slice(8)) }
    else { probe.style.font = `var(${n})`; const cs = w.getComputedStyle(probe); push(font, `${parseFloat(cs.fontSize)}/${cs.fontWeight}`, n.slice(13)) }
  }
  probe.remove()
  // 쓰임 이름(숫자 없는 것)을 앞에
  const order = a => a.sort((x, y) => /\d/.test(x) - /\d/.test(y))
  for (const m of [color, font]) for (const [k, v] of m) m.set(k, order(v))
  return (st.tokens = { color, font })
}

function info(st, el) {
  if (!el) return '치수\n호버 = 크기·부모까지 거리\n클릭 = 고정 → 다른 요소까지 거리\nEsc = 고정 풀기'
  const cs = st.w.getComputedStyle(el), k = scaleOf(el), t = tokens(st), r = el.getBoundingClientRect()
  const tok = (m, key) => (m.get(key) || []).slice(0, 2).join(' · ') || '토큰 없음'
  const name = (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : el.tagName.toLowerCase())
  const out = [`${name}  ${pt(r.width, k)} × ${pt(r.height, k)}`]
  const text = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())
  if (text) {
    const lh = cs.lineHeight === 'normal' ? 'normal' : pt(parseFloat(cs.lineHeight), 1)
    out.push(`글자  ${parseFloat(cs.fontSize)} / ${cs.fontWeight} / 줄 ${lh}`, `  ${tok(t.font, `${parseFloat(cs.fontSize)}/${cs.fontWeight}`)}`,
      `글자색  ${cs.color}`, `  ${tok(t.color, cs.color)}`)
  }
  if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') out.push(`지면  ${cs.backgroundColor}`, `  ${tok(t.color, cs.backgroundColor)}`)
  const rad = cs.borderTopLeftRadius
  if (rad !== '0px') out.push(`라운드  ${pt(parseFloat(rad), 1)}`)
  const pad = ['Top', 'Right', 'Bottom', 'Left'].map(s => parseFloat(cs['padding' + s]))
  if (pad.some(Boolean)) out.push(`안쪽  ${pad.join(' ')}`)
  const gap = cs.display.includes('flex') || cs.display.includes('grid') ? cs.rowGap === cs.columnGap ? cs.rowGap : `${cs.rowGap} ${cs.columnGap}` : 'normal'
  if (gap !== 'normal' && gap !== '0px') out.push(`사이  ${gap}`)
  return out.join('\n')
}
