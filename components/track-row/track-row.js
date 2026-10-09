// components/track-row/track-row.md — 행 탭 = 미리듣기, 오른쪽 원 = 선택(고른 순서 번호)
export function TrackRow({ cover = 'a-seasons', title = 'seasons', artist = 'wave to earth', number = 0, playing = false } = {}) {
  return `<div class="ds-track-row">
  <span class="ds-track-row__thumb"><i class="art ${cover}"></i><i class="ic ic-${playing ? 'pause' : 'play'}${playing ? ' is-playing' : ''}"></i></span>
  <span class="ds-track-row__text"><b>${title}</b><span>${artist}</span></span>
  <span class="ds-track-row__select">${number ? `<i class="is-on">${number}</i>` : '<i></i>'}</span>
</div>`
}
