// 온보딩 — 첫 실행 전체를 프로토타입 하나로(screens/live.js). 두 갈래:
// - Apple로 계속하기 → 곡 고르기(최대 3곡, 트레이 ✕ = 빼기) → 디깅 시작 → 피드 구성(2초) → 코치마크 → 피드
// - 로그인 없이 둘러보기 → 코치마크 → 피드 → Picks·My 탭 → 로그인 유도 → 로그인 시트(취소 = 로그인 유도로) → 불러오는 중 → 곡 고르기 → 피드 구성 → 피드(코치마크는 이미 봄)
import { live, go, back } from './live.js'
import { SignInScreen, LoadingScreen, SeedOnboardingScreen, FeedBuildingScreen, GuestPromptScreen } from './onboarding.js'
import { FeedLive } from './feed-live.js'
import { SCREENS } from './registry.js'
export default { title: 'Screens/4. 온보딩', parameters: { layout: 'centered' } }

const TILES = SCREENS['onboarding-seed'][2].tiles.map(({ number, playing, ...t }) => t)
const toFeed = (s, later) => { later(2000, x => ({ ...x, screen: 'feed', stack: [] })); return { ...s, screen: 'building', stack: [] } }

export const Onboarding = { name: '첫 실행',
  args: { titleFont: 'title1', titleBreak: true },
  argTypes: {
    titleFont: { control: 'inline-radio', options: ['title1', 'title2', 'headline'], description: '곡 고르기 제목 타이포 — title1 24 · title2 18 · headline 17' },
    titleBreak: { description: '곡 고르기 제목 "노래를" 뒤에서 줄바꿈' },
  },
  render: live({
    init: () => ({ screen: 'signin', stack: [], guest: false, coachSeen: false, tab: 'my', picks: [], playing: '' }),
    view: (s, a, { set }) => ({
      signin: () => SignInScreen({}),
      gate: () => SignInScreen({ gate: true }),
      loading: () => LoadingScreen(),
      seed: () => SeedOnboardingScreen({ titleFont: a.titleFont, titleBreak: a.titleBreak,
        tiles: TILES.map(t => ({ ...t, number: s.picks.indexOf(t.cover) + 1, playing: s.playing === t.cover })) }),
      building: () => FeedBuildingScreen({ covers: s.picks }),
      prompt: () => GuestPromptScreen({ tab: s.tab }),
      // 피드는 피드 프로토타입을 그대로 넣는다. 게스트가 Picks·My를 누르면 로그인 유도로
      feed: () => FeedLive({ coach: !s.coachSeen, onTab: tab => s.guest && set(x => go({ ...x, coachSeen: true }, 'prompt', { tab })) }),
    })[s.screen](),
    taps: [
      // 로그인
      ['.ds-button--apple', (s, { later }) => s.screen === 'gate'
        ? (later(1500, x => ({ ...x, screen: 'seed', stack: [] })), { ...s, screen: 'loading', stack: [], guest: false })
        : go(s, 'seed', { guest: false })],
      ['.ob-guest', s => go(s, 'feed', { guest: true })],
      ['.ob-cancel', s => back(s)],
      // 로그인 유도(게스트가 Picks·My)
      ['.tab', (s, { i }) => s.screen === 'prompt' ? (i === 0 ? back(s) : { tab: ['feed', 'picks', 'my'][i] }) : undefined],
      ['.ds-button', s => s.screen === 'prompt' ? go(s, 'gate') : undefined],
      // 곡 고르기
      ['.ds-seed__pick', (s, { i }) => {
        const c = TILES[i].cover
        if (s.picks.includes(c)) return { picks: s.picks.filter(x => x !== c) }
        return s.picks.length < 3 ? { picks: [...s.picks, c] } : {}   // 꽉 차면 무반응(비활성 타일)
      }],
      ['.ds-seed__thumb', (s, { i }) => ({ playing: s.playing === TILES[i].cover ? '' : TILES[i].cover })],
      ['.ds-seed-tray__x', (s, { i }) => ({ picks: s.picks.filter((_, j) => j !== i) })],
      ['.ds-button--primary:not(.is-disabled), .ob-skip', (s, { later }) => s.screen === 'seed' ? toFeed(s, later) : undefined],
    ],
  }) }
