// components/popup/popup.md
// mark: 위 브랜드마크(알림 권유만) · decline: 비우면 버튼 하나짜리 확인 팝업
export function Popup({ title = '이번 주 특집, 여기까지예요', message = '방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요?', accept = '알림 받기', decline = '나중에', mark = true } = {}) {
  return `<div class="ds-popup">
  ${mark ? '<span class="ds-popup__mark"><i class="brand-mark"></i></span>' : ''}
  <h2>${title}</h2><p>${message}</p>
  <button class="ds-button ds-button--primary">${accept}</button>
  ${decline ? `<span class="ds-popup__decline">${decline}</span>` : ''}
</div>`
}
