// 피드 — 프로토타입 하나로 직접 해 본다(screens/feed-live.js). 시작 상태는 Controls
import { FeedLive } from './feed-live.js'
export default { title: 'Screens/1. 피드', parameters: { layout: 'centered' } }

const range = (min, max, step, description) => ({ control: { type: 'range', min, max, step }, description })
export const Feed = { name: '피드', render: FeedLive,
  args: { coach: false, lead: 'none', consent: false, likeSheet: false, legal: true, whatsNew: false, os: 'ios', speed: 1, hold: 0.3, handOffset: -18, captionBelow: 25, peek: 32 },
  argTypes: {
    coach: { description: '첫 실행 코치마크부터: 더블탭 → 아무 곳 탭 → 위로 끌기' },
    lead: { control: 'inline-radio', options: ['none', 'curation', 'pick', 'release'], description: '앞 구간부터 — curation 이번 주 특집 n/5(끝나면 야간 동의 팝업) · pick 이번 주 추천 n/5 · release 좋아요한 아티스트의 신곡 n/3' },
    consent: { description: '첫 실행 광고성 동의 팝업부터(좋아요한 곡이 있는 유저만 — 가장 최근 좋아요의 아티스트)' },
    likeSheet: { description: '좋아요하고 다음 곡으로 넘기면 신곡 알림 시트(한 번)' },
    legal: { description: '시트에 광고성 동의 문구 넣기 — Figma엔 없음(요건이라 추가, 기획 확인 대기)' },
    whatsNew: { description: '업데이트 후 첫 실행 — 새로운 기능 시트' },
    os: { control: 'inline-radio', options: ['ios', 'android'], description: '동의 팝업 띄우기·닫기 모션 — 각 OS 시스템 대화상자 느낌' },
    speed: range(0.5, 3, 0.1, '모션 빠르기 (1 = 기본)'), hold: range(0, 3, 0.1, '좋아요 큰 하트가 다 커진 뒤 머무는 시간(초)'),
    handOffset: range(-160, 160, 2, '코치마크 손 중심 ↕ 아트워크 가운데 기준'), captionBelow: range(-120, 120, 1, '코치마크 캡션이 아트워크 아래로 나오는 길이'),
    peek: range(0, 120, 2, '코치마크 손이 쓸어 올릴 때 화면이 따라 올라가는 거리'),
  } }
