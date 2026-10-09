// components/seed-tile/seed-tile.md
export function SeedTile({ cover = 'a-wss', title = 'work, shit, sleep', artist = 'jisokuryClub', number = 0, playing = false } = {}) {
  return `<div class="ds-seed${number ? ' is-selected' : ''}"><div class="ds-seed__thumb"><i class="art ${cover}"></i><i class="ic ic-${playing ? 'pause' : 'play'} ds-seed__play"></i>
  <span class="ds-seed__pick">${number ? `<i class="is-on">${number}</i>` : '<i></i>'}</span></div><b>${title}</b><span>${artist}</span></div>`
}
export function SeedGrid({ items = [] } = {}) {
  return `<div class="ds-seed-grid">${items.map(SeedTile).join('')}</div>`
}
