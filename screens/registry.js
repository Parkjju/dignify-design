// 화면 목록 — 스토리와 플로우 보드가 같이 쓴다. 기본값(args)을 여기서 한 번만 정한다.
// 새 화면: 함수를 만들고 여기에 [id, 이름, 함수, 기본 args] 한 줄 추가 → 스토리·플로우에서 바로 쓸 수 있다.
import { T, PICKS, CRATE } from './data.js'
import * as Feed from './feed.js'
import * as Picks from './picks.js'
import * as My from './my.js'
import * as On from './onboarding.js'
import { ShareCard } from '../components/share-card/share-card.js'

const seedTiles = [
  { ...T.findme }, { ...T.wss, number: 1 }, { ...T.loveya, artist: '혁오 & Sunset Rollercoaster' }, { ...T.bigvoid, title: 'BIG VOID (Single Version)' },
  { ...T.billann, number: 2, playing: true }, { ...T.truth }, { ...T.comedown }, { ...T.seasons }, { ...T.bulssi }, { ...T.ohio }, { ...T.shanty }, { ...T.always },
]

export const SCREENS = {
  'feed': ['피드', Feed.FeedScreen, { track: T.cannons, chip: '비슷한 곡: Blame', hyped: false, mode: 'following', context: '', query: '' }],
  'feed-search': ['피드 검색', Feed.FeedSearchScreen, { track: T.cannons, text: '실리카겔', terms: ['잔나비', 'wave to earth', '혁오'], keyboard: true }],
  'track-detail': ['트랙 상세', Feed.TrackDetailScreen, { track: T.cannons, detail: { genre: 'CCM', released: '2007.06.19' } }],
  'feed-push-popup': ['이번 주 특집 끝 · 알림 권유', Feed.FeedPopupScreen, { track: T.seasons, title: '이번 주 특집, 여기까지예요', message: '방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요?' }],
  'feed-coach': ['피드 코치마크', Feed.FeedCoachScreen, { track: T.cannons, step: 1 }],
  'whats-new': ['새로운 기능', Feed.WhatsNewScreen, { track: T.cannons }],
  'picks': ['Picks', Picks.PicksScreen, { picks: PICKS, scroll: 0 }],
  'pick-play': ['픽 재생', Picks.PickPlayScreen, { track: T.loveya, chip: '록', hyped: true, nickname: 'digger_lover', index: 3, total: 12 }],
  'pick-menu': ['픽 메뉴', Picks.PickMenuScreen, { picks: PICKS, mine: false, nickname: 'wavelover' }],
  'pick-compose': ['새 픽 — 곡 고르기', Picks.PickComposeScreen, { selected: 3, sections: [
    { date: '2026년 10월 7일', tracks: [{ ...T.seasons, number: 1, playing: true }, { ...T.cheeky }, { ...T.bulssi, number: 2 }] },
    { date: '2026년 10월 5일', tracks: [{ ...T.bluff }, { ...T.always, number: 3 }, { ...T.fireworks }, { ...T.comedown }] }] }],
  'pick-compose-title': ['새 픽 — 제목', Picks.PickComposeTitleScreen, { title: '', fallback: 'wave to earth 외 2명', tracks: [{ ...T.seasons, number: 1 }, { ...T.bulssi, number: 2 }, { ...T.always, number: 3 }] }],
  'my-page': ['마이페이지', My.MyPageScreen, { nickname: 'digger_lover', type: '🔁 충성파', following: true, scroll: 0 }],
  'digging-profile': ['디깅 프로필', My.DiggingProfileScreen, { range: 1, locked: false, scroll: 0, crateDays: CRATE.slice(0, 3),
    type: { name: '충성파', genre: '록', blurb: '자기 취향을 알고, 거기에 충실해요.' }, stats: { headline: '듣는 것도 담는 것도 록.', dug: 50, kept: 36 },
    genres: { explore: [['록', 39], ['R&B/소울', 3], ['얼터너티브', 2], ['일렉트로닉', 2], ['힙합/랩', 1]], keep: [['록', 25], ['R&B/소울', 4], ['컨트리', 3], ['얼터너티브', 2], ['CCM', 2]] },
    artists: { explore: [['혁오', 6], ['잔나비', 4], ['실리카겔', 3], ['wave to earth', 2], ['Jio', 2]], keep: [['혁오', 5], ['잔나비', 3], ['wave to earth', 2], ['Jio', 2], ['윤상', 1]] },
    myPick: { cover: 'a-loveya', title: '모두가 사랑하는 밴드', count: 3 } }],
  'my-picks': ['내가 만든 픽', My.MyPicksScreen, { picks: [{ ...PICKS[0], verified: false, plays: 27 }, { ...PICKS[1], nickname: 'digger_lover', time: '3일 전', title: '새벽 드라이브' }] }],
  'hype-history': ['하입 기록', My.HypeHistoryScreen, { editing: false, crateDays: CRATE, scroll: 0 }],
  'seed-picker': ['추천 기준 곡', My.SeedPickerScreen, { crateDays: CRATE, selected: ['a-seasons', 'a-ohio'] }],
  'artist-requests': ['아티스트 요청', My.ArtistRequestsScreen, { sheet: false, sent: false, value: '검정치마', requests: [
    { artist: '실리카겔', status: 'added', date: '2026년 10월 3일' }, { artist: '쏜애플', status: 'pending', date: '2026년 10월 6일' },
    { artist: 'Big Thief', status: 'pending', date: '2026년 10월 7일' }, { artist: '임영웅', status: 'canceled', reason: 'Apple Music에 미리듣기가 없는 아티스트예요.', date: '2026년 9월 28일' }] }],
  'blocked-users': ['차단한 유저', My.BlockedUsersScreen, { users: ['noisy_neighbor', 'spam_bot_99', 'crate_thief'], swiped: 'spam_bot_99' }],
  'onboarding-signin': ['로그인', On.SignInScreen, { error: '' }],
  'onboarding-tutorial': ['튜토리얼', On.TutorialScreen, { page: 0 }],
  'onboarding-seed': ['추천 기준 곡 고르기', On.SeedOnboardingScreen, { tiles: seedTiles, search: '' }],
  'share-card': ['공유 카드', ShareCard, { variant: 'track' }],
}

// id + (선택) 덮어쓸 args → HTML
export const renderScreen = (id, args = {}) => {
  const s = SCREENS[id]
  if (!s) return `<div style="width:393px;height:852px;display:grid;place-items:center;border:2px dashed #EF4444;border-radius:55px;color:#EF4444;font:600 14px sans-serif">없는 화면: ${id}</div>`
  return s[1]({ ...s[2], ...args })
}
