// components/coach-mark/coach-mark.md — 설명 카드. 스포트라이트는 화면(시안)에서 대상 위치에 맞춰 뚫는다
export function CoachMark({ title = '마음에 들면 하입하세요', body = '하입한 곡은 담은 곡에 모여요. 그리고 피드가 그 곡과 비슷한 소리를 찾아 와요.', step = 1, total = 2 } = {}) {
  const dots = Array.from({ length: total }, (_, i) => `<i${i + 1 === step ? ' class="is-on"' : ''}></i>`).join('')
  return `<div class="ds-coach"><h2>${title}</h2><p>${body}</p><div class="ds-coach__dots">${dots}</div><b>${step === total ? '시작하기' : '다음'}</b></div>`
}
