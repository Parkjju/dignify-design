// components/track-detail/track-detail.md
import { Button } from '../button/button.js'
export function TrackDetail({ cover = 'a-cannons', title = 'Cannons', artist = 'Phil Wickham', album = 'Cannons', genre = 'CCM', released = '2007.06.19',
  hypers = [['digger_lover', '2026. 09. 24.'], ['wavelover', '2026. 09. 18.'], ['crate_kid', '2026. 09. 02.']] } = {}) {
  return `<div class="ds-detail">
  <div class="ds-detail__head"><i class="art ${cover}"></i><div><h2>${title}</h2><p class="by">${artist}</p><p class="album">${album}</p><div class="tags"><span>${genre}</span><span>${released}</span></div></div></div>
  <div class="ds-detail__div"></div>
  <div class="ds-detail__hypers"><h3>하입한 유저</h3>${hypers.length ? hypers.map(([n, d]) => `<p>@${n}<span>${d}</span></p>`).join('') : '<p class="is-empty">아직 하입한 유저가 없어요</p>'}</div>
  <div class="ds-detail__stores">${Button({ variant: 'dark', label: 'Apple Music에서 듣기', icon: 'music-note' })}${Button({ variant: 'outline-block', label: 'YouTube Music에서 찾기', icon: 'play' })}</div>
</div>`
}
