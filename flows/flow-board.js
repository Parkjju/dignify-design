// 플로우 보드 — steps 순서대로 화면을 나란히 놓는다. 화면 id는 screens/registry.js 의 SCREENS 키.
// step: { screen: 'feed', label: '피드', note: '설명', args: { …화면 Controls 값 덮어쓰기 } }
import { renderScreen, SCREENS } from '../screens/registry.js'

export function FlowBoard({ steps = [], scale = 0.5, wrap = false } = {}) {
  const W = Math.round(440 * scale), H = Math.round(900 * scale)
  const card = (s, i) => {
    const name = s.label ?? SCREENS[s.screen]?.[0] ?? s.screen
    return `<figure class="flow__step">
      <div class="flow__frame" style="width:${W}px;height:${H}px"><div style="transform:scale(${scale});transform-origin:0 0;width:440px;height:900px;display:grid;place-items:center">${renderScreen(s.screen, s.args)}</div></div>
      <figcaption><b>${i + 1}. ${name}</b><code>${s.screen}</code>${s.note ? `<span>${s.note}</span>` : ''}</figcaption></figure>`
  }
  return `<style>
    .flow { display: flex; ${wrap ? 'flex-wrap: wrap;' : ''} align-items: flex-start; gap: 8px; padding: 24px; font-family: -apple-system, sans-serif; }
    .flow__step { margin: 0; display: flex; flex-direction: column; gap: 10px; width: ${W}px; flex: none; }
    .flow__frame { overflow: hidden; }
    .flow figcaption { display: flex; flex-direction: column; gap: 3px; padding: 0 6px; }
    .flow figcaption b { font-size: 14px; color: #111827; } .flow figcaption code { font-size: 11px; color: #9CA3AF; }
    .flow figcaption span { font-size: 12px; color: #6B7280; line-height: 1.45; }
    .flow__arrow { flex: none; align-self: center; margin-top: -40px; font-size: 22px; color: var(--color-brand); }
  </style><div class="flow">${steps.map((s, i) => (i ? '<span class="flow__arrow">→</span>' : '') + card(s, i)).join('')}</div>`
}
