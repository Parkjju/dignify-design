// components/track-row/track-row.md — 행 탭 = 미리듣기, 오른쪽 원 = 선택(고른 순서 번호)
// check: 번호 대신 체크(순서 없는 선택 — 마이 추천 기준 곡) · genre: 아티스트 뒤 「· 장르」 · play: 커버 위 재생 표시 · disabled: 꽉 차서 못 고르는 행
export function TrackRow({ cover = 'a-seasons', title = 'seasons', artist = 'wave to earth', genre = '', number = 0, playing = false, check = false, play = true, disabled = false } = {}) {
  const on = check ? number > 0 : number
  return `<div class="ds-track-row${disabled && !on ? ' is-disabled' : ''}">
  <span class="ds-track-row__thumb"><i class="art ${cover}"></i>${play ? `<i class="ic ic-${playing ? 'pause' : 'play'}${playing ? ' is-playing' : ''}"></i>` : ''}</span>
  <span class="ds-track-row__text"><b>${title}</b><span>${artist}${genre ? ` · ${genre}` : ''}</span></span>
  <span class="ds-track-row__select">${on ? `<i class="is-on">${check ? '<i class="ic ic-checkmark"></i>' : number}</i>` : '<i></i>'}</span>
</div>`
}
