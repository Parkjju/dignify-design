// components/feed-header/feed-header.md — mode: following | random · context: '' | 배지 문구 · query: 검색 중인 쿼리 · pick: 픽 재생 모드
import { PillOnDark } from '../pill-on-dark/pill-on-dark.js'
export function FeedHeader({ mode = 'following', context = '', query = '', pick = false } = {}) {
  if (pick) return `<div class="ds-feed-header"><span class="ds-feed-header__close"><i class="ic ic-xmark"></i></span>${context ? `<div class="ds-feed-header__badge" style="top:56px">${PillOnDark({ variant: 'badge', label: context })}</div>` : ''}</div>`
  const pill = query ? PillOnDark({ variant: 'query', label: query }) : PillOnDark({ variant: 'mode', label: mode === 'following' ? '하입한 곡 따라가는 중' : '무작위' })
  return `<div class="ds-feed-header"><div class="ds-feed-header__right"><div><span class="ds-feed-header__btn"><i class="ic ic-${mode === 'following' ? 'sparkles' : 'shuffle'}"></i></span><span class="ds-feed-header__btn"><i class="ic ic-search"></i></span></div>${pill}</div>${
    context ? `<div class="ds-feed-header__badge" style="top:${56 + (query ? 0 : 33)}px">${PillOnDark({ variant: 'badge', label: context })}</div>` : ''}</div>`
}
