// components/empty-state/empty-state.md — 목록이 비었을 때 가운데: 아이콘 원 + 제목 + 설명 + 다음 행동 버튼
import { Button } from '../button/button.js'
export const EmptyState = ({ title = '아직 좋아요한 곡이 없어요', message = '피드에서 마음에 드는 곡을 골라주세요', action = '곡 찾으러 가기' } = {}) =>
  `<div class="ds-empty"><span class="ds-empty__icon">!</span><h3>${title}</h3><p>${message}</p>${action ? Button({ variant: 'small', label: action }) : ''}</div>`
