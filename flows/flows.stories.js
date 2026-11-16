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
  { screen: 'feed-coach', note: '손 모션: 1초 안에 두 번 탭 → 1초 쉼 반복. 유저가 더블탭해야 넘어감' },
  { screen: 'feed-coach-hyped', note: '하트 팝 → 페이드아웃. 캡션은 화면 아무 곳 터치 → 사라짐. 게스트면 이 좋아요는 기기에 보관 → 로그인 후 저장' },
  { screen: 'feed-coach-swipe', note: '손 모션: 위로 쓸어 올림. 유저가 다음 곡으로 넘기면 끝' },
]

export const FirstLaunchGuest = { name: '첫 실행 — 로그인 없이 둘러보기', args: { steps: [
  { screen: 'onboarding-signin', note: '로그인 없이 둘러보기' },
  ...coach,
  { screen: 'feed', label: '피드(게스트)', args: { track: { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' }, chip: '인디' } },
  { screen: 'guest-prompt', note: 'Picks·마이 탭을 누르면' },
  { screen: 'onboarding-signin-gate', note: 'Picks·마이에서 로그인, 또는 두 번째 좋아요부터 바로 이 시트 → 「둘러보기 후 로그인」으로' },
] } }

export const FirstLaunch = { name: '첫 실행 — 바로 로그인', args: { steps: [
  { screen: 'onboarding-signin', note: 'Apple로 계속하기' },
  { screen: 'onboarding-seed', note: '곡 선택 (최대 3곡 → 피드 기준)' },
  { screen: 'onboarding-building', note: '최소 2초, 피드가 늦으면 올 때까지' },
  ...coach,
  { screen: 'feed', label: '바로 시작', args: { track: { cover: 'a-wss', title: 'work, shit, sleep', artist: 'jisokuryClub' }, chip: '비슷한 곡: work, shit, sleep' } },
] } }

export const GuestThenSignIn = { name: '둘러보기 후 로그인', args: { steps: [
  { screen: 'onboarding-signin-gate', note: '게스트가 Picks·마이 또는 두 번째 좋아요에서 로그인 · 코치마크 좋아요는 이때 저장' },
  { screen: 'onboarding-loading', note: '곡 선택 후보를 받는 동안 · 코치마크는 이미 봤으니 생략' },
  { screen: 'onboarding-seed', note: '곡 선택' },
  { screen: 'onboarding-building', note: '최소 2초, 피드가 늦으면 올 때까지' },
  { screen: 'feed', label: '바로 시작', args: { track: { cover: 'a-wss', title: 'work, shit, sleep', artist: 'jisokuryClub' }, chip: '비슷한 곡: work, shit, sleep' } },
] } }

export const Discover = { name: '피드에서 발견하기', args: { steps: [
  { screen: 'feed', note: '스와이프로 넘기며 듣기' },
  { screen: 'feed', label: '좋아요', note: '더블탭 또는 하트 버튼', args: { hyped: true } },
  { screen: 'track-detail', note: '••• 버튼 → 상세·스토어' },
  { screen: 'feed-search', note: '검색 버튼' },
  { screen: 'feed', label: '검색 결과', args: { query: '실리카겔', track: { cover: 'a-bigvoid', title: 'BIG VOID', artist: '실리카겔' }, chip: '록' } },
] } }

export const WeeklySet = { name: '이번 주 특집', args: { steps: [
  { screen: 'feed', label: '특집 시작', args: { context: '이번 주 특집 1/5', track: { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' }, chip: '인디' } },
  { screen: 'feed', label: '특집 마지막', args: { context: '이번 주 특집 5/5', track: { cover: 'a-billann', title: 'Bill Loves Ann', artist: '퍼플웨일' }, chip: '인디' } },
  { screen: 'feed-consent-night', note: '다 보면 — 광고성 동의 true + 기기 권한 허용 + 야간 미응답일 때만. 아니면 안 띄움' },
  { screen: 'feed-toast', label: '결과', args: { track: { cover: 'a-cannons', title: 'Cannons', artist: 'Phil Wickham' }, toast: 'night-on' }, note: '아니요 → 야간 수신거부 토스트. 21시~다음 날 08시 특집 알림도 그 시각에 받는다' },
] } }

// 광고성 정보 수신 동의 (푸시알림 기획 1.0, 2026-11-12). 시작점 4개 — Figma 「00. 화면 플로우」
const NOW = { cover: 'a-cannons', title: 'Cannons', artist: 'Phil Wickham' }
export const ConsentFirstRun = { name: '광고성 동의 — 첫 실행', args: { steps: [
  { screen: 'feed', label: '로그인 상태로 피드', note: '로그인 안 했으면 묻지 않음(로그인 뒤 다음 실행). 업데이트로 들어온 기존 유저면 업데이트 소식(1.3.2) 다음' },
  { screen: 'feed-consent', note: '이 기기에서 동의 팝업을 띄운 적 없음 + 좋아요한 곡이 1곡 이상(가장 최근 좋아요의 아티스트). 바깥 탭으로 안 닫힘' },
  { screen: 'feed-toast', label: '알림 받기', args: { track: NOW, toast: 'on' }, note: '동의 true 저장 → 기기 권한 설정 전이면 시스템 팝업 → 결과 토스트' },
  { screen: 'feed', label: '나중에', args: { track: NOW }, note: '닫기만 — 저장·통지 없음. 7일 뒤 같은 팝업' },
] } }

export const ConsentOnLike = { name: '광고성 동의 — 좋아요 시점', args: { steps: [
  { screen: 'feed', label: '좋아요', args: { track: { cover: 'a-ohio', title: 'Ohio', artist: '혁오' }, chip: '록', hyped: true }, note: '로그인 · 기기 권한 설정 전 · 실행 2회 이상 · 이번 세션에 권한 팝업 안 봄 · 피드에서(픽 재생·잠금화면 제외)' },
  { screen: 'feed-like-sheet', note: '다음 곡으로 넘긴 직후. 좋아한 아티스트가 처음이거나, 한 번 묻고 「일주일 동안 안 보기」 한 아티스트를 다시 좋아요했을 때' },
  { screen: 'feed-toast', label: '알림 받기', args: { track: { cover: 'a-tomboy', title: 'TOMBOY', artist: '혁오' }, chip: '비슷한 곡: TOMBOY', toast: 'on' }, note: '동의 true + 시스템 권한 요청 → 결과 토스트' },
  { screen: 'feed', label: '일주일 동안 안 보기', args: { track: { cover: 'a-tomboy', title: 'TOMBOY', artist: '혁오' }, chip: '비슷한 곡: TOMBOY' }, note: '시트만 닫는다. 권한은 설정 전 그대로, 7일 뒤 같은 동작에서 다시' },
] } }

export const ConsentSettings = { name: '광고성 동의 — 마이 › 알림', args: { steps: [
  { screen: 'my-page', note: '「알림」' },
  { screen: 'notification-settings', note: '토글 = 서버 저장 후 바뀜. 기기 알림 권한: 켜짐·꺼짐 → 설정 앱 Dignify 알림 화면, 설정 전 → 눌러도 아무 동작 없음' },
  { screen: 'notification-settings-off', label: '광고성 끔', args: { toast: 'off' }, note: '야간도 같이 꺼짐 → 수신거부 토스트' },
  { screen: 'notification-settings-off', label: '야간 탭', args: { toast: 'need-consent' }, note: '광고성이 꺼져 있으면 야간은 못 켠다' },
  { screen: 'notification-settings', label: '저장 실패', args: { toast: 'fail' }, note: '토글은 그대로' },
] } }

export const LeadSections = { name: '알림 탭 → 피드 앞 구간', args: { steps: [
  { screen: 'feed-weekly-pick', note: '주간 추천 알림 탭 — 「이번 주 추천 n/m」, m = 추천곡 수(최대 10)' },
  { screen: 'feed-new-release', note: '신곡 알림 탭·앱 열기 — 「좋아요한 아티스트의 신곡 n/m」, 10곡 넘으면 무작위 10곡' },
  { screen: 'feed', label: '구간 끝', note: '구간에서 좋아요했으면 그 곡과 연관된 곡, 아니면 평소 피드' },
] } }

export const MakePick = { name: '픽 만들기', args: { steps: [
  { screen: 'picks', note: '새 픽 버튼' },
  { screen: 'pick-compose', note: '좋아요한 곡에서 고르기, 검색도 가능' },
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
  { screen: 'digging-profile', label: '좋아요한 곡', args: { scroll: 1180 } },
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
