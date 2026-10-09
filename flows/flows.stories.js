// 사용자 흐름. Controls › steps 를 고치면 순서·화면·화면별 값이 바로 바뀐다.
// 마음에 드는 흐름은 Controls 의 steps JSON 을 복사해서 Claude에게 "이 흐름으로 저장해줘"라고 넘기면 된다.
import { FlowBoard } from './flow-board.js'
import { SCREENS } from '../screens/registry.js'

export default {
  title: 'Flows', render: FlowBoard, parameters: { layout: 'fullscreen' },
  argTypes: {
    steps: { control: 'object', description: `화면 id: ${Object.keys(SCREENS).join(' · ')}` },
    scale: { control: { type: 'range', min: 0.3, max: 1, step: 0.05 } },
    wrap: { control: 'boolean', description: '줄바꿈해서 격자로 보기' },
  },
  args: { scale: 0.5, wrap: false },
}

// 첫 실행 3갈래 (feed_coachmark 1.0). 코치마크는 피드에서만, 따라 해야 넘어간다. 바로 로그인은 곡 선택 → 피드 구성 → 코치마크
const coach = [
  { screen: 'feed-coach', note: '손 모션: 1초 안에 두 번 탭 → 2초 쉼 반복. 유저가 더블탭해야 넘어감' },
  { screen: 'feed-coach-hyped', note: '하입 아이콘 팝 → 페이드아웃. 캡션은 화면 아무 곳 터치 → 사라짐' },
  { screen: 'feed-coach-swipe', note: '손 모션: 위로 쓸어 올림. 유저가 다음 곡으로 넘기면 끝' },
]

export const FirstLaunchGuest = { name: '첫 실행 — 로그인 없이 둘러보기', args: { steps: [
  { screen: 'onboarding-signin', note: '로그인 없이 둘러보기' },
  ...coach,
  { screen: 'feed', label: '피드(게스트)', args: { track: { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' }, chip: '인디' } },
  { screen: 'guest-prompt', note: 'Picks·마이 탭을 누르면' },
  { screen: 'onboarding-signin-gate', note: '로그인 → 「둘러보기 후 로그인」으로' },
] } }

export const FirstLaunch = { name: '첫 실행 — 바로 로그인', args: { steps: [
  { screen: 'onboarding-signin', note: 'Apple로 계속하기' },
  { screen: 'onboarding-seed', note: '곡 선택 (최대 3곡 → 피드 기준)' },
  { screen: 'onboarding-building', note: '최소 1초, 피드가 늦으면 올 때까지' },
  ...coach,
  { screen: 'feed', label: '바로 시작', args: { track: { cover: 'a-wss', title: 'work, shit, sleep', artist: 'jisokuryClub' }, chip: '비슷한 곡: work, shit, sleep' } },
] } }

export const GuestThenSignIn = { name: '둘러보기 후 로그인', args: { steps: [
  { screen: 'onboarding-signin-gate', note: '게스트가 Picks·마이에서 로그인' },
  { screen: 'onboarding-loading', note: '곡 선택 후보를 받는 동안 · 코치마크는 이미 봤으니 생략' },
  { screen: 'onboarding-seed', note: '곡 선택' },
  { screen: 'onboarding-building', note: '최소 1초, 피드가 늦으면 올 때까지' },
  { screen: 'feed', label: '바로 시작', args: { track: { cover: 'a-wss', title: 'work, shit, sleep', artist: 'jisokuryClub' }, chip: '비슷한 곡: work, shit, sleep' } },
] } }

export const Discover = { name: '피드에서 발견하기', args: { steps: [
  { screen: 'feed', note: '스와이프로 넘기며 듣기' },
  { screen: 'feed', label: '하입', note: '더블탭 또는 삽 버튼', args: { hyped: true } },
  { screen: 'track-detail', note: '디스크 버튼 → 상세·스토어' },
  { screen: 'feed-search', note: '검색 버튼' },
  { screen: 'feed', label: '검색 결과', args: { query: '실리카겔', track: { cover: 'a-bigvoid', title: 'BIG VOID', artist: '실리카겔' }, chip: '록' } },
] } }

export const WeeklySet = { name: '이번 주 특집', args: { steps: [
  { screen: 'feed', label: '특집 시작', args: { context: '이번 주 특집 1/5', track: { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' }, chip: '인디' } },
  { screen: 'feed', label: '특집 마지막', args: { context: '이번 주 특집 5/5', track: { cover: 'a-billann', title: 'Bill Loves Ann', artist: '퍼플웨일' }, chip: '인디' } },
  { screen: 'feed-push-popup', note: '다 보면 알림 권유' },
] } }

export const MakePick = { name: '픽 만들기', args: { steps: [
  { screen: 'picks', note: '새 픽 버튼' },
  { screen: 'pick-compose', note: '하입한 곡에서 고르기, 검색도 가능' },
  { screen: 'pick-compose-title', note: '비우면 자동 제목' },
  { screen: 'picks', label: '올린 뒤', note: '목록 맨 위 + 알림 권유 팝업' },
] } }

export const ListenPick = { name: '픽 듣고 반응하기', args: { steps: [
  { screen: 'picks' },
  { screen: 'pick-play', note: '커버 탭 → 풀스크린 줌' },
  { screen: 'picks', label: '🔥 반응', args: { picks: [{ nickname: 'wavelover', time: '1시간 전', title: '국내 브릿팝 루키 🔥', covers: ['a-bigvoid', 'a-billann', 'a-truth'], trackCount: 10, reactions: 2, reacted: true }] } },
  { screen: 'pick-menu', note: '··· → 신고·차단' },
] } }

export const MyTaste = { name: '내 취향 보기', args: { steps: [
  { screen: 'my-page' },
  { screen: 'digging-profile' },
  { screen: 'digging-profile', label: '하입한 곡', args: { scroll: 1180 } },
  { screen: 'hype-history', note: '전체 보기' },
  { screen: 'hype-history', label: '편집', args: { editing: true } },
] } }

export const SeedChange = { name: '추천 기준 바꾸기', args: { steps: [
  { screen: 'my-page' },
  { screen: 'seed-picker', note: '최대 3곡 고정' },
  { screen: 'feed', label: '바뀐 피드', args: { chip: '비슷한 곡: seasons', track: { cover: 'a-always', title: 'Always You', artist: 'Supertaste' } } },
] } }

export const RequestArtist = { name: '아티스트 요청', args: { steps: [
  { screen: 'feed-search', args: { text: '검정치마', terms: [] } },
  { screen: 'artist-requests', label: '요청 시트', args: { sheet: true } },
  { screen: 'artist-requests', label: '보냄', args: { sheet: true, sent: true } },
] } }

export const AllScreens = { name: '전체 화면', args: { wrap: true, scale: 0.4, steps: Object.keys(SCREENS).map(screen => ({ screen })) } }
