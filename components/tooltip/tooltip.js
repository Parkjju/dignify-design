// components/tooltip/tooltip.md — ⓘ를 누르면 아래에 뜨는 설명 말풍선. 2초 뒤 사라짐
export const Tooltip = ({ text = '아무것도 고르지 않으면 최근 좋아요한<br>3곡을 기준으로 노래를 찾을게요.' } = {}) => `<div class="ds-tooltip" role="status">${text}</div>`
