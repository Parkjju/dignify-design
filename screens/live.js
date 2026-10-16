// 흐름 프로토타입 공용 틀(Storybook 전용). 화면 함수에 상태를 넣어 그리고, 탭은 CSS 선택자로 받아 상태를 바꾼다 — 컴포넌트는 손대지 않는다.
//   live({ init: args => 상태, view: (상태, args) => HTML | Element, taps: [[선택자, (상태, ctx) => 바꿀 값]] })
// - taps는 위에서부터 처음 맞는 것 하나만. 핸들러가 undefined를 돌려주면 다음 선택자로 넘어간다(그 화면에서 안 쓰는 탭).
// - 바꿀 값: 객체(합침) 또는 함수(상태 → 새 상태). ctx = { i: 같은 선택자 중 몇 번째, el, target: 실제로 누른 요소, later(ms, 바꿀 값), args }
// - 화면 id(state.screen)가 그대로면 스크롤 위치를 지킨다. .scroll은 여기서만 실제로 스크롤된다.
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
    const draw = () => {
      const top = el.querySelector('.scroll')?.scrollTop ?? 0
      const out = view(s, args, { set, later })
      if (out instanceof Element) el.replaceChildren(out)
      else el.innerHTML = out
      const sc = el.querySelector('.scroll')
      if (sc && shown === s.screen) sc.scrollTop = top
      shown = s.screen
    }
    el.addEventListener('click', e => {
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
