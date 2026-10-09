// components/feed-track/feed-track.md — 지면(블러 배경·그라데이션)까지 포함한 한 장
import { PillOnDark } from '../pill-on-dark/pill-on-dark.js'
export function FeedTrack({ cover = 'a-cannons', title = 'Cannons', artist = 'Phil Wickham', chip = '비슷한 곡: Blame', hyped = false, width = 393, height = 640, top = 24, bottom = 24 } = {}) {
  // 기기 안에서는 top = safe+64(118), bottom = safe+72(106) — patterns/feed-media-surface.md
  return `<div class="ds-feed-track" style="width:${width}px;height:${height}px">
  <i class="art ${cover} ds-feed-track__bg"></i><div class="ds-feed-track__scrim"></div>
  <div class="ds-feed-track__body" style="top:${top}px;bottom:${bottom}px">
    <i class="art ${cover} ds-feed-track__cover" style="width:${width - 48}px;height:${width - 48}px"></i>
    <div class="ds-feed-track__meta">
      <div>${chip ? PillOnDark({ variant: 'chip', label: chip }) : ''}<p class="ds-feed-track__title">${title}</p><p class="ds-feed-track__artist">${artist}</p></div>
      <div class="ds-feed-track__actions">
        <span class="ds-feed-track__hype${hyped ? ' is-on' : ''}"><i class="ic ic-hype"></i></span>
        <span class="ds-feed-track__act"><i class="ic ic-disc"></i></span><span class="ds-feed-track__act"><i class="ic ic-share"></i></span>
      </div>
    </div>
  </div>
</div>`
}
