// components/feed-track/feed-track.md — 지면(블러 배경·그라데이션)까지 포함한 한 장
import { PillOnDark } from '../pill-on-dark/pill-on-dark.js'

// 좋아요 버스트: 하트 조각이 위로 튀었다가 떨어진다. [dx, 솟는 높이, 회전, 크기]
const BURST = [[-58, 70, -200, 14], [-34, 96, 160, 18], [-10, 84, -120, 12], [14, 104, 220, 20], [36, 78, -160, 14], [58, 92, 140, 16], [-46, 52, 260, 12], [46, 58, -240, 12]]
  .map(([x, up, r, size], i) => `<i class="ic ic-heart-fill ds-feed-track__bit" style="--x:${x}px;--up:${-up}px;--r:${r}deg;font-size:${size}px"></i>`).join('')
// burst: 좋아요하는 순간 — 아트워크 가운데 큰 하트 팝(hold초 머묾 → 페이드) + 버튼 조각. 일반 피드·코치마크 공통
export function FeedTrack({ cover = 'a-cannons', title = 'Cannons', artist = 'Phil Wickham', chip = '비슷한 곡: Blame', hyped = false, burst = false, speed = 1, hold = 0.3, overlay = '', width = 393, height = 640, top = 24, bottom = 24 } = {}) {
  // 기기 안에서는 top = safe+64(118), bottom = safe+72(106) — patterns/feed-media-surface.md
  return `<div class="ds-feed-track" style="width:${width}px;height:${height}px;--k:${1 / speed};--hold:${hold}s">
  <i class="art ${cover} ds-feed-track__bg"></i><div class="ds-feed-track__scrim"></div>
  <div class="ds-feed-track__body" style="top:${top}px;bottom:${bottom}px">
    <div class="ds-feed-track__center">
      <div class="ds-feed-track__stage"><i class="art ${cover} ds-feed-track__cover" style="width:${width - 48}px;height:${width - 48}px"></i>${burst ? `<i class="ic ic-heart-fill ds-feed-track__big"></i>` : ''}${overlay}</div>
      <div class="ds-feed-track__actions"><span class="ds-feed-track__act"><i class="ic ic-share"></i></span><span class="ds-feed-track__act"><i class="ic ic-ellipsis"></i></span></div>
    </div>
    <div class="ds-feed-track__meta">
      <div class="ds-feed-track__info">
        <div>${chip ? PillOnDark({ variant: 'chip', label: chip }) : ''}<p class="ds-feed-track__title">${title}</p><p class="ds-feed-track__artist">${artist}</p></div>
        <span class="ds-feed-track__hype${hyped ? ' is-on' : ''}${burst ? ' is-burst' : ''}" style="--k:${1 / speed}"><i class="ic ${hyped ? 'ic-heart-fill' : 'ic-heart'}"></i>${burst ? BURST : ''}</span>
      </div>
    </div>
  </div>
</div>`
}
