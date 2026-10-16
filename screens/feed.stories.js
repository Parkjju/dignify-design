// 피드 — 프로토타입 하나로 직접 해 본다(screens/feed-live.js). 시작 상태는 Controls
import { FeedLive } from './feed-live.js'
export default { title: 'Screens/1. 피드', parameters: { layout: 'centered' } }

const range = (min, max, step, description) => ({ control: { type: 'range', min, max, step }, description })
export const Feed = { name: '피드', render: FeedLive,
  args: { coach: false, weekly: false, whatsNew: false, speed: 1, hold: 0.3, handOffset: -18, captionBelow: 25, peek: 32 },
  argTypes: {
    coach: { description: '첫 실행 코치마크부터: 더블탭 → 아무 곳 탭 → 위로 끌기' },
    weekly: { description: '이번 주 특집 1/5부터. 5곡 넘기면 알림 권유 팝업' },
    whatsNew: { description: '업데이트 후 첫 실행 — 새로운 기능 시트' },
    speed: range(0.5, 3, 0.1, '모션 빠르기 (1 = 기본)'), hold: range(0, 3, 0.1, '좋아요 큰 하트가 다 커진 뒤 머무는 시간(초)'),
    handOffset: range(-160, 160, 2, '코치마크 손 중심 ↕ 아트워크 가운데 기준'), captionBelow: range(-120, 120, 1, '코치마크 캡션이 아트워크 아래로 나오는 길이'),
    peek: range(0, 120, 2, '코치마크 손이 쓸어 올릴 때 화면이 따라 올라가는 거리'),
  } }
