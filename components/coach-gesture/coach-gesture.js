// components/coach-gesture/coach-gesture.md — 손 모션 + 캡션. 따라 해야 넘어가는 코치마크
// 아트워크 기준으로 붙는다(FeedTrack의 overlay 슬롯에 넣는다). 좌표를 고정하지 않아 화면 높이가 달라도 안 어긋난다
// handOffset: 손(또는 하입 아이콘) 중심이 아트워크 가운데에서 위아래로 얼마나 · captionBelow: 캡션이 아트워크 아래로 삐져나오는 길이
export const COACH_GESTURE = {
  'double-tap': ['마음에 드는 노래를 찾았어요!', '빠르게 두 번 탭해볼까요?'],
  'hyped': ['마음에 드는 노래를 하입했어요!', '관심이 가는 노래를 더 찾으러 가볼까요?'],
  'swipe-up': ['다음 노래로 넘어가 볼까요?', '화면을 위로 쓸어 올려보세요'],
}
export function CoachGesture({ gesture = 'double-tap', title, body, handOffset = -18, captionBelow = 25, speed = 1 } = {}) {
  const [t, b] = COACH_GESTURE[gesture] || COACH_GESTURE['double-tap']
  const mark = gesture === 'hyped'
    ? '<i class="ic ic-hype ds-coach-gesture__hype"></i>'
    : `<span class="ds-coach-gesture__hand is-${gesture}"><i class="ds-coach-gesture__ring"></i><i class="ic ic-hand-tap"></i></span>`
  return `<div class="ds-coach-gesture" style="--k:${1 / speed}">
  <div class="ds-coach-gesture__mark" style="top:calc(50% + ${handOffset}px)">${mark}</div>
  <div class="ds-coach-gesture__caption" style="bottom:${-captionBelow}px"><b>${title ?? t}</b><p>${body ?? b}</p></div>
</div>`
}
