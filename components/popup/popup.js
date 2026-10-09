// components/popup/popup.md
export function Popup({ title = '이번 주 특집, 여기까지예요', message = '방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요?', accept = '알림 받기', decline = '나중에' } = {}) {
  return `<div class="ds-popup">
  <span class="ds-popup__mark"><i class="brand-mark"></i></span>
  <h2>${title}</h2><p>${message}</p>
  <button class="ds-button ds-button--primary">${accept}</button>
  <span class="ds-popup__decline">${decline}</span>
</div>`
}
