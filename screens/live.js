// 흐름 프로토타입 공용 틀(Storybook 전용). 화면 함수에 상태를 넣어 그리고, 탭은 CSS 선택자로 받아 상태를 바꾼다 — 컴포넌트는 손대지 않는다.
//   live({ init: args => 상태, view: (상태, args) => HTML | Element, taps: [[선택자, (상태, ctx) => 바꿀 값]] })
// - taps는 위에서부터 처음 맞는 것 하나만. 핸들러가 undefined를 돌려주면 다음 선택자로 넘어간다(그 화면에서 안 쓰는 탭).
// - 바꿀 값: 객체(합침) 또는 함수(상태 → 새 상태). ctx = { i: 같은 선택자 중 몇 번째, el, target: 실제로 누른 요소, later(ms, 바꿀 값), args }
// - 화면 id(state.screen)가 그대로면 스크롤 위치를 지킨다(세로 .scroll + 가로 스크롤 줄). .scroll은 여기서만 실제로 스크롤된다.
// - 가로 스크롤 줄(overflow-x: auto — 장르 칩 등)은 마우스로도 민다: 끌기·세로 휠. 끌었으면 그 클릭은 무시한다
// - 뒤로 가기: go(s, 'id', 덧붙일 값)는 지금 화면을 stack에 쌓고, back(s)는 꺼낸다.
export const go = (s, screen, patch = {}) => ({ ...s, ...patch, screen, stack: [...(s.stack || []), s.screen] })
export const back = (s, patch = {}) => s.stack?.length ? { ...s, ...patch, screen: s.stack.at(-1), stack: s.stack.slice(0, -1) } : s

export function live({ init, view, taps = [] }) {
  return args => {
    const el = document.createElement('div')
    el.className = 'sb-live'
    let s = init(args), shown = null
    const timers = []
    const apply = p => (p == null ? s : typeof p === 'function' ? p(s) : { ...s, ...p })
    const set = p => { const next = apply(p); if (next !== s) { s = next; draw() } }
    const later = (ms, p) => timers.push(setTimeout(() => el.isConnected && set(p), ms))
    const rows = () => [...el.querySelectorAll('*')].filter(n => getComputedStyle(n).overflowX === 'auto')
    const draw = () => {
      const top = el.querySelector('.scroll')?.scrollTop ?? 0, lefts = rows().map(n => n.scrollLeft)
      const out = view(s, args, { set, later })
      if (out instanceof Element) el.replaceChildren(out)
      else el.innerHTML = out
      const sc = el.querySelector('.scroll')
      if (shown === s.screen) { if (sc) sc.scrollTop = top; rows().forEach((n, j) => { n.scrollLeft = lefts[j] ?? 0 }) }
      // 고른 칩(.is-on)이 가로 줄 밖에 걸쳐 있으면 다 보이게 민다
      rows().forEach(r => { const on = r.querySelector('.is-on'); if (!on) return
        const x = on.offsetLeft - r.offsetLeft - r.scrollLeft
        if (x < 0 || x + on.offsetWidth > r.clientWidth) r.scrollTo({ left: on.offsetLeft - r.offsetLeft - (x < 0 ? 20 : r.clientWidth - on.offsetWidth - 20), behavior: 'smooth' }) })
      shown = s.screen
    }
    // 가로 스크롤 줄: 마우스 끌기·세로 휠로 민다
    const hrow = t => { const n = t.closest('*'); for (let x = n; x && x !== el; x = x.parentElement) if (getComputedStyle(x).overflowX === 'auto' && x.scrollWidth > x.clientWidth) return x }
    let pan = null, panned = false
    el.addEventListener('pointerdown', e => { const r = hrow(e.target); pan = r && { r, x: e.clientX, left: r.scrollLeft }; panned = false })
    el.addEventListener('pointermove', e => { if (!pan) return; const dx = e.clientX - pan.x; if (Math.abs(dx) > 5) panned = true; if (panned) pan.r.scrollLeft = pan.left - dx })
    el.addEventListener('pointerup', () => { pan = null })
    el.addEventListener('wheel', e => { const r = hrow(e.target); if (r && Math.abs(e.deltaY) > Math.abs(e.deltaX)) { r.scrollLeft += e.deltaY; e.preventDefault() } }, { passive: false })
    el.addEventListener('click', e => {
      if (panned) { panned = false; return }
      for (const [sel, fn] of taps) {
        const t = e.target.closest(sel)
        if (!t || !el.contains(t)) continue
        const r = fn(s, { i: [...el.querySelectorAll(sel)].indexOf(t), el: t, target: e.target, later, args })
        if (r !== undefined) return set(r)
      }
    })
    draw()
    return el
  }
}
