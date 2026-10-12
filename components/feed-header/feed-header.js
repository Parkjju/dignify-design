// components/feed-header/feed-header.md — mode: following | random · context: '' | 배지 문구 · query: 검색 중인 쿼리 · pick: 픽 재생 모드
import { PillOnDark } from '../pill-on-dark/pill-on-dark.js'
export function FeedHeader({ mode = 'following', context = '', query = '', pick = false } = {}) {
  if (pick) return `<div class="ds-feed-header"><span class="ds-feed-header__close"><i class="ic ic-xmark"></i></span>${context ? `<div class="ds-feed-header__badge" style="top:56px">${PillOnDark({ variant: 'badge', label: context })}</div>` : ''}</div>`
  const pill = query ? PillOnDark({ variant: 'query', label: query }) : PillOnDark({ variant: 'mode', label: mode === 'following' ? '좋아요한 곡 따라가는 중' : '무작위' })
  // 1.1: 한 줄 — 왼쪽 성향 버튼 + 모드 알약, 오른쪽 검색
  return `<div class="ds-feed-header"><div class="ds-feed-header__row"><span class="ds-feed-header__btn"><i class="ic ic-${mode === 'following' ? 'sparkles' : 'shuffle'}"></i></span>${pill}<span class="ds-feed-header__btn ds-feed-header__search"><i class="ic ic-search"></i></span></div>${
    context ? `<div class="ds-feed-header__badge" style="top:56px">${PillOnDark({ variant: 'badge', label: context })}</div>` : ''}</div>`
}
