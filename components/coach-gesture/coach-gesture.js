// components/coach-gesture/coach-gesture.md — 손 모션 + 캡션. 따라 해야 넘어가는 코치마크
// handY: 손(또는 하입 아이콘) 중심 y · captionTop: 캡션 위 y — 화면이 아트워크 위치에 맞춰 넘긴다
export const COACH_GESTURE = {
  'double-tap': ['마음에 드는 노래를 찾았어요!', '빠르게 두 번 클릭해볼까요?'],
  'hyped': ['마음에 드는 노래를 하입했어요!', '관심이 가는 노래를 더 찾으러 가볼까요?'],
  'swipe-up': ['다음 노래로 넘어가 볼까요?', '화면을 위로 쓸어 올려보세요'], // ponytail: 가안 문구, 기획 확정 시 교체
}
export function CoachGesture({ gesture = 'double-tap', title, body, handY = 300, captionTop = 420 } = {}) {
  const [t, b] = COACH_GESTURE[gesture] || COACH_GESTURE['double-tap']
  const mark = gesture === 'hyped'
    ? '<i class="ic ic-hype ds-coach-gesture__hype"></i>'
    : `<span class="ds-coach-gesture__hand is-${gesture}"><i class="ds-coach-gesture__ring"></i><i class="ic ic-hand-tap"></i></span>`
  return `<div class="ds-coach-gesture">
  <div class="ds-coach-gesture__mark" style="top:${handY}px">${mark}</div>
  <div class="ds-coach-gesture__caption" style="top:${captionTop}px"><b>${title ?? t}</b><p>${body ?? b}</p></div>
</div>`
}
