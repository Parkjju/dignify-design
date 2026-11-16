// 광고성 알림(푸시알림 기획 1.0, 2026-11-12) — 동의를 받는 곳 전부를 프로토타입 하나로(screens/live.js).
// 피드와 마이 › 알림이 같은 동의 상태(ads)를 나눠 쓴다: 피드에서 동의하면 마이 › 알림 토글이 켜져 있고, 마이에서 끄면 피드에서 다시 물을 조건이 바뀐다.
// 시작점(Controls start) — Figma 「00. 화면 플로우」의 깃발 4개 + 알림 탭 2개:
//   first-run  첫 실행: 동의 팝업 → 알림 받기 → (권한 설정 전이면 OS 권한 팝업) → 토스트. 나중에 = 닫기만(7일 뒤 다시)
//   like       좋아요 시점: 곡을 좋아요(더블탭·♡)하고 위로 넘기면 신곡 알림 시트(기기 권한 설정 전일 때만)
//   night      이번 주 특집 1/5부터 5곡 넘기면 야간 동의 팝업(동의 + 권한 켜짐 + 야간 미응답일 때만)
//   settings   마이 › 알림부터: 토글 = 결과 토스트, 광고성 끄면 야간도 꺼짐, 기기 알림 권한(설정 전 → OS 권한 팝업)
//   push-pick · push-release  알림 탭으로 들어온 피드 앞 구간(이번 주 추천 / 좋아요한 아티스트의 신곡)
// 탭바 Feed·My로 오가며 상태가 이어지는지 본다. 처음부터 다시: Controls 값을 바꾼다.
import { live, go, back } from './live.js'
import { FeedLive } from './feed-live.js'
import { MyPageScreen, NotificationSettingsScreen } from './my.js'
import { PicksScreen } from './picks.js'
import { PICKS } from './data.js'
export default { title: 'Screens/6. 광고성 알림', parameters: { layout: 'centered' } }

// 시작점별 처음 상태. ad: 광고성 동의 · night: undefined = 미응답 · permission: 기기 알림 권한
const START = {
  'first-run': { ads: { ad: false, permission: 'unset' }, feed: { consent: true, likeSheet: true } },
  like: { ads: { ad: false, permission: 'unset' }, feed: { likeSheet: true } },
  night: { ads: { ad: true, permission: 'on' }, feed: { lead: 'curation' } },
  settings: { ads: { ad: true, night: true, permission: 'on' }, screen: 'alerts' },
  'push-pick': { ads: { ad: true, permission: 'on' }, feed: { lead: 'pick' } },
  'push-release': { ads: { ad: true, permission: 'on' }, feed: { lead: 'release' } },
}
const toast = (kind, later) => { const id = Date.now(); later(3000, x => x.toastId === id ? { ...x, toastLeaving: true } : x); later(3300, x => x.toastId === id ? { ...x, toast: '' } : x); return { toast: kind, toastLeaving: false, toastId: id } }
const onAlerts = f => (s, ctx) => s.screen === 'alerts' ? f(s, ctx) : undefined

export const Consent = { name: '광고성 알림',
  args: { start: 'first-run', permission: 'start', legal: true, fail: false, os: 'ios' },
  argTypes: {
    start: { control: 'inline-radio', options: Object.keys(START), description: 'first-run 첫 실행 · like 좋아요 시점 · night 이번 주 특집 끝(야간) · settings 마이 › 알림 · push-pick/push-release 알림 탭 → 피드 앞 구간' },
    permission: { control: 'inline-radio', options: ['start', 'unset', 'on', 'off'], description: '기기 알림 권한 처음 값 — start면 시작점 기본값. 좋아요 시트는 설정 전(unset)일 때만 뜬다' },
    legal: { description: '좋아요 시트에 광고성 동의 문구 — Figma엔 없음(요건이라 추가, 기획 확인 대기)' },
    fail: { description: '마이 › 알림 토글 저장 실패 보기' },
    os: { control: 'inline-radio', options: ['ios', 'android'], description: '동의 팝업 띄우기·닫기 모션' },
  },
  render: live({
    init: a => {
      const st = START[a.start]
      const ads = { ...st.ads, ...(a.permission === 'start' ? {} : { permission: a.permission }) }
      return { screen: st.screen || 'feed', stack: st.screen ? ['my'] : [], ads, feed: st.feed || {}, toast: '', toastLeaving: false, system: false, following: true }
    },
    view: (s, a, { set }) => ({
      // 피드는 피드 프로토타입을 그대로 넣는다. ads는 같은 객체라 피드에서 동의하면 바로 반영된다. 탭바 Picks·My → 바깥 화면으로
      feed: () => FeedLive({ coach: false, ...s.feed, consent: !!s.feed.consent && !s.ads.ad, ads: s.ads, legal: a.legal, os: a.os,
        onTab: id => set(x => ({ ...x, screen: id === 'my' ? 'my' : 'picks', stack: [], feed: { ...x.feed, consent: false } })) }),
      picks: () => PicksScreen({ picks: PICKS }),
      my: () => MyPageScreen({ following: s.following }),
      alerts: () => NotificationSettingsScreen({ ad: s.ads.ad, night: !!s.ads.night, permission: s.ads.permission, toast: s.toast, toastLeaving: s.toastLeaving, system: s.system }),
    })[s.screen](),
    taps: [
      ['.tab', (s, { i }) => s.screen === 'feed' ? undefined : { screen: ['feed', 'picks', 'my'][i], stack: [], toast: '' }],
      ['.ds-nav__side:first-child .glass-btn', s => back(s, { toast: '' })],
      ['.ds-settings-row', (s, { el }) => s.screen === 'my' && el.textContent.trim() === '알림' ? go(s, 'alerts') : undefined],
      ['.ds-settings-toggle', s => s.screen === 'my' ? { following: !s.following } : undefined],
      // OS 권한 팝업(마이 › 알림에서 띄운 것)
      ['.ds-system-alert__allow, .ds-system-alert__deny', onAlerts((s, { el, later }) => {
        const ads = { ...s.ads, permission: el.matches('.ds-system-alert__allow') ? 'on' : 'off' }
        return { ads, system: false, ...(s.pending ? toast(s.pending, later) : {}), pending: '' }
      })],
      ['.ds-system-alert-layer', onAlerts(() => ({}))],
      // 마이 › 알림: 서버가 받은 뒤에만 토글이 바뀐다
      ['.ds-settings-toggle', onAlerts((s, { i, later, args }) => {
        if (i === 1 && !s.ads.ad) return toast('need-consent', later)
        if (args.fail) return toast('fail', later)
        if (i === 0) {
          const on = !s.ads.ad, ads = { ...s.ads, ad: on, night: on ? s.ads.night : (s.ads.night === undefined ? undefined : false) }   // 광고성을 끄면 야간도 꺼진다
          // 켜는데 기기 권한이 설정 전이면 OS 권한 팝업 → 고르면 토스트
          return on && s.ads.permission === 'unset' ? { ads, system: true, pending: 'on' } : { ads, ...toast(on ? 'on' : 'off', later) }
        }
        return { ads: { ...s.ads, night: !s.ads.night }, ...toast(s.ads.night ? 'night-off' : 'night-on', later) }
      })],
      // 기기 알림 권한: 설정 전 = OS 권한 팝업, 그 밖 = 설정 앱 Dignify 알림 화면(시안에선 그대로)
      ['.ds-settings-row--value', onAlerts(s => s.ads.permission === 'unset' ? { system: true, pending: '' } : {})],
    ],
  }) }
