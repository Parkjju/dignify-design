// components/seed-tray/seed-tray.md — 곡 고르기 아래 고정 트레이: 고른 곡을 순서대로, 빈 칸은 점선
export function SeedTray({ items = [], limit = 3 } = {}) {
  const picked = [...items].sort((a, b) => a.number - b.number)
  const full = picked.length >= limit
  const slot = i => {
    const t = picked[i]
    return t
      ? `<span class="ds-seed-tray__slot"><i class="art ${t.cover}"></i><i class="ds-seed-tray__no">${t.number}</i><i class="ds-seed-tray__x"><i class="ic ic-xmark"></i></i></span>`
      : '<span class="ds-seed-tray__slot is-empty"></span>'
  }
  return `<div class="ds-seed-tray${full ? ' is-full' : ''}">
  <div class="ds-seed-tray__label"><b>선택한 곡 <em>${picked.length}/${limit}</em></b><span>${full ? '바꾸려면 빼 주세요' : '누르면 그 곡으로 가요'}</span></div>
  <div class="ds-seed-tray__slots">${Array.from({ length: limit }, (_, i) => slot(i)).join('')}</div>
</div>`
}
