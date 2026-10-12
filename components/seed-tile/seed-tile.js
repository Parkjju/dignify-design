// components/seed-tile/seed-tile.md
// disabled: 3곡을 다 고른 뒤 안 고른 곡 — 연한 회색, 고르기 원이 사라진다(미리듣기는 된다)
export function SeedTile({ cover = 'a-wss', title = 'work, shit, sleep', artist = 'jisokuryClub', number = 0, playing = false, disabled = false } = {}) {
  return `<div class="ds-seed${number ? ' is-selected' : ''}${disabled && !number ? ' is-disabled' : ''}"><div class="ds-seed__thumb"><i class="art ${cover}"></i><i class="ic ic-${playing ? 'pause' : 'play'} ds-seed__play"></i>
  <span class="ds-seed__pick">${number ? `<i class="is-on">${number}</i>` : '<i></i>'}</span></div><b>${title}</b><span>${artist}</span></div>`
}
// limit곡을 다 고르면 나머지는 자동으로 disabled
export function SeedGrid({ items = [], limit = 3 } = {}) {
  const full = items.filter(t => t.number).length >= limit
  return `<div class="ds-seed-grid">${items.map(t => SeedTile({ ...t, disabled: full })).join('')}</div>`
}
