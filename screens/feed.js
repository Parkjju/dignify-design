// 1. 피드 흐름 화면 — 기준: Features/Feed/FeedView.swift · TrackDetailView · PushOptInPopup · WhatsNewView · FeedCoachGesture
// 광고성 동의(첫 실행·좋아요 시점·야간)와 결과 토스트는 푸시알림 기획(2026-11-12) 시안 — 앱 1.3.2 초안을 대신한다
import { Device, Sheet } from './device.js'
import { FeedTrack } from '../components/feed-track/feed-track.js'
import { FeedHeader } from '../components/feed-header/feed-header.js'
import { SearchBar } from '../components/search-bar/search-bar.js'
import { RecentSearches } from '../components/recent-searches/recent-searches.js'
import { Keyboard } from '../components/keyboard/keyboard.js'
import { TrackDetail } from '../components/track-detail/track-detail.js'
import { PopupLayer } from '../components/popup/popup.js'
import { CoachGesture } from '../components/coach-gesture/coach-gesture.js'
import { ReleaseNotes } from '../components/release-notes/release-notes.js'
import { Button } from '../components/button/button.js'
import { ConsentSheet } from '../components/consent-sheet/consent-sheet.js'
import { Toast } from '../components/toast/toast.js'
import { SystemAlert } from '../components/system-alert/system-alert.js'

// 결과 토스트 자리(탭바 위 8). toast: '' | Toast kind, toastLeaving: 페이드 아웃 중
export const toastLayer = (toast, leaving = false, date = '2026-11-12') => toast ? `<div class="ds-toast-slot">${Toast({ kind: toast, date, leaving })}</div>` : ''

// 피드 한 장: 아트워크 지면 + 위 오버레이. 다른 피드 화면이 이 위에 무언가를 얹는다.
// lift: 제목·아티스트·좋아요 줄을 앱(safe+72)보다 더 올리는 양 — 탭바와 간격 (1.1 검토 중)
export const LIFT = 20
const feedLayer = ({ track, chip, hyped, burst, speed, hold, overlay, mode, context, query, pick, lift = LIFT, peek = 32 }) =>
  `<div style="position:absolute;inset:0;--peek:${peek}px">${FeedTrack({ ...track, chip, hyped, burst, speed, hold, overlay, height: 852, top: 118, bottom: 106 + lift })}</div>
   <div style="position:absolute;top:54px;inset-inline:0;z-index:10">${FeedHeader({ mode, context, query, pick })}</div>`

// context: 앞 구간 배지 — 「이번 주 특집 n/5」 · 「이번 주 추천 n/m」 · 「좋아요한 아티스트의 신곡 n/m」(m 최대 10)
export function FeedScreen({ track, chip = '비슷한 곡: Blame', hyped = false, burst = false, speed = 1, hold = 0.3, mode = 'following', context = '', query = '', time = '10:28', battery = 97, lift = LIFT, toast = '', toastLeaving = false, system = false } = {}) {
  // system: OS 알림 권한 팝업(「알림 받기」 뒤, 기기 권한이 설정 전일 때)
  return Device({ surface: 'media', tab: 'feed', time, battery, children: feedLayer({ track, chip, hyped, burst, speed, hold, mode, context, query, lift }), overlay: toastLayer(toast, toastLeaving) + (system ? SystemAlert({}) : '') })
}

export function FeedSearchScreen({ track, text = '실리카겔', terms = ['잔나비', 'wave to earth', '혁오'], keyboard = true } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: `<div style="position:absolute;inset:0">${FeedTrack({ ...track, chip: '', height: 852, top: 118, bottom: 106 + LIFT })}</div>
    <div style="position:absolute;top:62px;left:16px;right:16px;z-index:10">${SearchBar({ text, focused: true })}</div>
    <div style="position:absolute;inset:110px 0 0;z-index:9;background:var(--color-background)">${RecentSearches({ terms, typed: text })}</div>`,
    overlay: keyboard ? Keyboard({ returnKey: '검색' }) : '' })
}

export function TrackDetailScreen({ track, detail = {} } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: Blame', mode: 'following' }),
    overlay: Sheet({ children: TrackDetail({ ...track, album: track.title, ...detail }) }) })
}

// 광고성 동의 팝업(Popup row). kind: first(첫 실행 P02 — 좋아요한 곡이 있는 유저만, 가장 최근 좋아요의 아티스트) | night(이번 주 특집 끝 P14)
export const CONSENT = {
  first: a => ({ title: `좋아하는 <em>${a}</em>의 신곡,<br>바로 알려드릴까요?`, message: "'알림 받기'를 누르면 광고성 정보 수신에 동의해요.", decline: '나중에' }),
  night: () => ({ title: '밤에도 아티스트 소식을 알려드릴까요?', message: "'알림 받기'를 누르면 야간(오전 8:00 ~ 오후9:00)<br>광고성 정보 수신에 동의해요.", decline: '아니요' }),
}
// 팝업은 지금 보고 있는 곡 위에 뜨고, 닫아도 곡은 그대로다. 야간은 특집 마지막 곡을 넘긴 직후 = 평소 피드 첫 곡 위
export function FeedConsentScreen({ track, kind = 'first', artist = '혁오', os = 'ios', leaving = false, chip = '비슷한 곡: Blame', context = '' } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip, mode: 'following', context }),
    overlay: PopupLayer({ os, leaving, row: true, ...CONSENT[kind](artist) }) })
}

// 좋아요 시점 신곡 알림 제안(P05) — 좋아요하고 다음 곡으로 넘어간 직후. artist·cover = 방금 좋아요한 곡
export function FeedLikeSheetScreen({ track, artist = '혁오', cover = 'a-ohio', legal = true } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: TOMBOY', mode: 'following' }),
    overlay: Sheet({ kind: 'bottom', bottom: 0, children: ConsentSheet({ artist, cover, legal }) }) })
}

// 첫 진입 온보딩(feed_coachmark 1.0): 따라 해야 넘어간다. double-tap → (더블탭) → hyped → (터치) → swipe-up → (스와이프) → 피드
export function FeedCoachScreen({ track, gesture = 'double-tap', handOffset = -18, captionBelow = 25, speed = 1, hold = 0.3, once = false, hyped = gesture === 'hyped', peek = 32 } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '', hyped, burst: gesture === 'hyped', speed, hold, peek, mode: 'following', overlay: CoachGesture({ gesture, handOffset, captionBelow, speed, hold, once }) }) })
}

export function WhatsNewScreen({ track, releases } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: Blame', mode: 'following' }),
    overlay: Sheet({ kind: 'large', children: `<div class="grabber"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:24px 24px 16px"><h1 style="font:var(--typography-title1)">새로운 기능</h1><i class="ic ic-xmark" style="font-size:15px;color:var(--color-text-tertiary)"></i></div>
      <div style="flex:1;overflow:hidden">${ReleaseNotes(releases ? { releases } : {})}</div>
      <div style="padding:0 24px 34px">${Button({ label: '확인' })}</div>` }) })
}
