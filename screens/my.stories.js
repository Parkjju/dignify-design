// 마이 — 프로토타입 하나로 직접 해 본다(screens/live.js). 마이페이지 줄을 눌러 들어가고 ‹ 로 돌아온다.
// 추천 기준 곡(seed_picker_opened 1.0): 행 = 고르기/풀기(3곡이면 팝업), 장르 칩, ⓘ = 말풍선(2초·바깥 탭 닫힘), 트레이 커버·✕ = 빼기, 저장 = 바뀌면 활성
import { live, go, back } from './live.js'
import { SCREENS } from './registry.js'
import { MyPageScreen, DiggingProfileScreen, MyPicksScreen, HypeHistoryScreen, SeedPickerScreen, ArtistRequestsScreen, BlockedUsersScreen, SEED_FULL_HINTS } from './my.js'
import { FeedScreen } from './feed.js'
import { PicksScreen } from './picks.js'
import { LIKED, T, PICKS } from './data.js'
export default { title: 'Screens/3. 마이', parameters: { layout: 'centered' } }

const D = id => SCREENS[id][2]
const ROWS = { '추천 기준 곡': 'seed', '아티스트 요청': 'requests', '차단한 유저': 'blocked' }
const shown = s => s.genre === '전체' ? s.tracks : s.tracks.filter(t => t.genre === s.genre)
const onSeed = f => (s, ctx) => s.screen === 'seed' ? f(s, ctx) : undefined

const view = (s, a) => ({
  my: () => MyPageScreen({ ...D('my-page'), following: s.following }),
  profile: () => DiggingProfileScreen({ ...D('digging-profile'), range: s.range }),
  picks: () => MyPicksScreen(D('my-picks')),
  history: () => HypeHistoryScreen({ ...D('hype-history'), editing: s.editing }),
  seed: () => SeedPickerScreen({ tracks: s.tracks, genre: s.genre, selected: s.selected, saved: s.saved, fullHint: a.fullHint, tooltip: !!s.tip, popup: s.popup }),
  requests: () => ArtistRequestsScreen({ ...D('artist-requests'), requests: s.requests, sheet: s.sheet, sent: s.sent }),
  blocked: () => BlockedUsersScreen({ users: s.users, swiped: s.swiped }),
  feed: () => FeedScreen({ track: T.cannons }),
  'tab-picks': () => PicksScreen({ picks: PICKS }),
})[s.screen]()

export const My = { name: '마이',
  args: { start: 'my', liked: true, saved: [], fullHint: SEED_FULL_HINTS[1] },
  argTypes: {
    start: { control: 'inline-radio', options: ['my', 'seed', 'profile', 'requests'], description: '시작 화면(‹ 누르면 마이페이지로)' },
    liked: { description: '좋아요한 곡이 있는지 — 끄면 추천 기준 곡이 빈 화면' },
    saved: { control: 'check', options: LIKED.map(t => t.cover), description: '추천 기준 곡에 들어올 때 이미 고정된 곡' },
    fullHint: { control: 'inline-radio', options: SEED_FULL_HINTS, description: '3곡 다 골랐을 때 트레이 안내 — 명세 문구는 두 줄로 깨진다' },
  },
  render: live({
    init: a => ({ screen: a.start, stack: a.start === 'my' ? [] : ['my'], following: true, range: 1, editing: false,
      tracks: a.liked ? LIKED : [], genre: '전체', selected: [...a.saved], saved: [...a.saved], tip: 0, popup: false,
      requests: D('artist-requests').requests, sheet: false, sent: false, users: D('blocked-users').users, swiped: '' }),
    view,
    taps: [
      // 공통: 탭바·뒤로
      ['.tab', (s, { i }) => ({ ...s, screen: ['feed', 'tab-picks', 'my'][i], stack: [] })],
      ['.ds-nav__side:first-child .glass-btn', s => back(s)],
      // 추천 기준 곡
      ['.device', onSeed((s, { target }) => s.tip && !target.closest('.ic-info-circle') ? { tip: 0 } : undefined)],   // 말풍선은 바깥을 누르면 닫힌다. ⓘ를 다시 누르면 2초를 다시 센다
      ['.ds-popup .ds-button, .dim', onSeed(() => ({ popup: false }))],
      ['.ic-info-circle', onSeed((s, { later }) => { const tip = Date.now(); later(2200, x => x.tip === tip ? { ...x, tip: 0 } : x); return { tip } })],
      ['.ds-filter-chip', onSeed((s, { el }) => ({ genre: el.textContent }))],
      ['.ds-track-row', onSeed((s, { i }) => {
        const c = shown(s)[i].cover
        if (s.selected.includes(c)) return { selected: s.selected.filter(x => x !== c) }
        return s.selected.length >= 3 ? { popup: true } : { selected: [...s.selected, c] }
      })],
      ['.ds-seed-tray__slot:not(.is-empty)', onSeed((s, { i }) => ({ selected: s.selected.filter((_, j) => j !== i) }))],
      ['.ds-nav__action:not(.is-disabled)', onSeed(s => back(s, { saved: [...s.selected] }))],
      ['.ds-empty .ds-button', onSeed(s => ({ ...s, screen: 'feed', stack: [] }))],
      // 마이페이지
      ['.ds-settings-card', s => go(s, 'profile')],
      ['.ds-settings-toggle', s => ({ following: !s.following })],
      ['.ds-settings-row', (s, { el }) => ROWS[el.textContent.trim()] ? go(s, ROWS[el.textContent.trim()], { genre: '전체', selected: [...s.saved], tip: 0, popup: false }) : {}],
      // 디깅 프로필
      ['.ds-seg span', (s, { i }) => ({ range: i })],
      ['.ds-section a', s => go(s, 'history', { editing: true })],
      ['.ds-link-row', s => go(s, 'history', { editing: false })],
      ['.ds-my-pick', s => go(s, 'picks')],
      // 좋아요 기록: 편집 ↔ 완료
      ['.ds-nav__action', s => s.screen === 'history' ? { editing: !s.editing } : undefined],
      // 아티스트 요청: + → 시트 → 보내기 → 「요청 완료」 1.5초 뒤 닫히고 맨 위에 대기 중
      ['.ds-nav .glass-btn:has(.ic-plus)', () => ({ sheet: true, sent: false })],
      ['.ds-request-form__send', (s, { later }) => {
        later(1500, x => ({ ...x, sheet: false, sent: false, requests: [{ artist: '검정치마', status: 'pending', date: '2026년 10월 16일' }, ...x.requests] }))
        return { sent: true }
      }],
      ['.dim', s => s.screen === 'requests' ? { sheet: false } : undefined],
      // 차단한 유저: 줄 = 밀어서 보이기, 차단 해제 = 지우기
      ['.ds-user b', (s, { el }) => ({ users: s.users.filter(u => u !== s.swiped), swiped: '' })],
      ['.ds-user', (s, { i }) => ({ swiped: s.swiped === s.users[i] ? '' : s.users[i] })],
    ],
  }) }
