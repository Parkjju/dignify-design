// 마이 — 프로토타입 하나로 직접 해 본다(screens/live.js). 마이페이지 줄을 눌러 들어가고 ‹ 로 돌아온다.
// 알림(푸시알림 기획 2026-11-12): 광고성 토글 = 저장 → 결과 토스트(끄면 야간도 꺼짐), 광고성 꺼진 채 야간 탭 = 「먼저 동의」 토스트, 기기 알림 권한(설정 전이면 무반응)
// 추천 기준 곡(seed_picker_opened 1.0): 행 = 고르기/풀기(3곡이면 팝업), 장르 칩, ⓘ = 말풍선(2초·바깥 탭 닫힘), 트레이 커버·✕ = 빼기, 저장 = 바뀌면 활성
import { live, go, back } from './live.js'
import { SCREENS } from './registry.js'
import { MyPageScreen, NotificationSettingsScreen, DiggingProfileScreen, MyPicksScreen, HypeHistoryScreen, SeedPickerScreen, ArtistRequestsScreen, BlockedUsersScreen, SEED_FULL_HINTS } from './my.js'
import { FeedScreen } from './feed.js'
import { PicksScreen } from './picks.js'
import { LIKED, T, PICKS } from './data.js'
export default { title: 'Screens/3. 마이', parameters: { layout: 'centered' } }

const D = id => SCREENS[id][2]
const ROWS = { '추천 기준 곡': 'seed', '아티스트 요청': 'requests', '알림': 'alerts', '차단한 유저': 'blocked' }
const shown = s => s.genre === '전체' ? s.tracks : s.tracks.filter(t => t.genre === s.genre)
const onSeed = f => (s, ctx) => s.screen === 'seed' ? f(s, ctx) : undefined
const onAlerts = f => (s, ctx) => s.screen === 'alerts' ? f(s, ctx) : undefined
// 결과 토스트: 3초 뒤 0.3초 페이드 아웃. 새 토스트가 뜨면 앞 타이머는 무시
const toast = (kind, later) => { const id = Date.now(); later(3000, x => x.toastId === id ? { ...x, toastLeaving: true } : x); later(3300, x => x.toastId === id ? { ...x, toast: '' } : x); return { toast: kind, toastLeaving: false, toastId: id } }

const view = (s, a) => ({
  my: () => MyPageScreen({ ...D('my-page'), following: s.following }),
  alerts: () => NotificationSettingsScreen({ ad: s.ad, night: s.night, permission: s.permission, toast: s.toast, toastLeaving: s.toastLeaving }),
  profile: () => DiggingProfileScreen({ ...D('digging-profile'), range: s.range }),
  picks: () => MyPicksScreen(D('my-picks')),
  history: () => HypeHistoryScreen({ ...D('hype-history'), editing: s.editing }),
  seed: () => SeedPickerScreen({ tracks: s.tracks, genre: s.genre, selected: s.selected, saved: s.saved, fullHint: a.fullHint, tooltip: !!s.tip, popup: s.popup, os: a.os }),
  requests: () => ArtistRequestsScreen({ ...D('artist-requests'), requests: s.requests, sheet: s.sheet, sent: s.sent }),
  blocked: () => BlockedUsersScreen({ users: s.users, swiped: s.swiped }),
  feed: () => FeedScreen({ track: T.cannons }),
  'tab-picks': () => PicksScreen({ picks: PICKS }),
})[s.screen]()

export const My = { name: '마이',
  args: { start: 'my', liked: true, saved: [], fullHint: SEED_FULL_HINTS[1], os: 'ios', ad: true, permission: 'on', fail: false },
  argTypes: {
    start: { control: 'inline-radio', options: ['my', 'alerts', 'seed', 'profile', 'requests'], description: '시작 화면(‹ 누르면 마이페이지로)' },
    ad: { description: '알림 — 들어올 때 광고성 수신 동의 상태(야간도 같이)' },
    permission: { control: 'inline-radio', options: ['on', 'off', 'unset'], description: '알림 — 기기 알림 권한: 켜짐 · 꺼짐 · 설정 전(앞에서 OS 권한 팝업이 안 떴음)' },
    fail: { description: '알림 — 토글 저장이 실패하는 경우 보기(토글은 그대로, 실패 토스트)' },
    liked: { description: '좋아요한 곡이 있는지 — 끄면 추천 기준 곡이 빈 화면' },
    saved: { control: 'check', options: LIKED.map(t => t.cover), description: '추천 기준 곡에 들어올 때 이미 고정된 곡' },
    fullHint: { control: 'inline-radio', options: SEED_FULL_HINTS, description: '3곡 다 골랐을 때 트레이 안내 — 명세 문구는 두 줄로 깨진다' },
    os: { control: 'inline-radio', options: ['ios', 'android'], description: '팝업 띄우기·닫기 모션 — 각 OS 시스템 대화상자 느낌' },
  },
  render: live({
    init: a => ({ screen: a.start, stack: a.start === 'my' ? [] : ['my'], following: true, range: 1, editing: false, ad: a.ad, night: a.ad, permission: a.permission, toast: '', toastLeaving: false,
      tracks: a.liked ? LIKED : [], genre: '전체', selected: [...a.saved], saved: [...a.saved], tip: 0, popup: false,
      requests: D('artist-requests').requests, sheet: false, sent: false, users: D('blocked-users').users, swiped: '' }),
    view,
    taps: [
      // 공통: 탭바·뒤로
      ['.tab', (s, { i }) => ({ ...s, screen: ['feed', 'tab-picks', 'my'][i], stack: [] })],
      ['.ds-nav__side:first-child .glass-btn', s => back(s)],
      // 추천 기준 곡
      ['.device', onSeed((s, { target }) => s.tip && !target.closest('.ic-info-circle') ? { tip: 0 } : undefined)],   // 말풍선은 바깥을 누르면 닫힌다. ⓘ를 다시 누르면 2초를 다시 센다
      ['.ds-popup .ds-button, .dim', onSeed((s, { later, args }) => s.popup === true ? (later(args.os === 'android' ? 150 : 200, { popup: false }), { popup: 'leaving' }) : {})],
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
      // 알림: 서버가 받은 뒤에만 토글이 바뀐다(실패면 그대로 + 실패 토스트)
      ['.ds-settings-toggle', onAlerts((s, { i, later, args }) => {
        if (i === 1 && !s.ad) return toast('need-consent', later)
        if (args.fail) return toast('fail', later)
        if (i === 0) return { ad: !s.ad, night: !s.ad && s.night, ...toast(s.ad ? 'off' : 'on', later) }   // 광고성을 끄면 야간도 꺼진다
        return { night: !s.night, ...toast(s.night ? 'night-off' : 'night-on', later) }
      })],
      ['.ds-settings-row--value', onAlerts(() => ({}))],   // 설정 전 = 무반응(2026-11-17), 그 밖 = 설정 앱 Dignify 알림 화면
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
