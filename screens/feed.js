// 1. 피드 흐름 화면 — 기준: Features/Feed/FeedView.swift · TrackDetailView · PushOptInPopup · WhatsNewView · CoachMarks
import { Device, Sheet } from './device.js'
import { FeedTrack } from '../components/feed-track/feed-track.js'
import { FeedHeader } from '../components/feed-header/feed-header.js'
import { SearchBar } from '../components/search-bar/search-bar.js'
import { RecentSearches } from '../components/recent-searches/recent-searches.js'
import { Keyboard } from '../components/keyboard/keyboard.js'
import { TrackDetail } from '../components/track-detail/track-detail.js'
import { Popup } from '../components/popup/popup.js'
import { CoachGesture } from '../components/coach-gesture/coach-gesture.js'
import { ReleaseNotes } from '../components/release-notes/release-notes.js'
import { Button } from '../components/button/button.js'

// 피드 한 장: 아트워크 지면 + 위 오버레이. 다른 피드 화면이 이 위에 무언가를 얹는다.
const feedLayer = ({ track, chip, hyped, mode, context, query, pick }) =>
  `<div style="position:absolute;inset:0">${FeedTrack({ ...track, chip, hyped, height: 852, top: 118, bottom: 106 })}</div>
   <div style="position:absolute;top:54px;inset-inline:0;z-index:10">${FeedHeader({ mode, context, query, pick })}</div>`

export function FeedScreen({ track, chip = '비슷한 곡: Blame', hyped = false, mode = 'following', context = '', query = '', time = '10:28', battery = 97 } = {}) {
  return Device({ surface: 'media', tab: 'feed', time, battery, children: feedLayer({ track, chip, hyped, mode, context, query }) })
}

export function FeedSearchScreen({ track, text = '실리카겔', terms = ['잔나비', 'wave to earth', '혁오'], keyboard = true } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: `<div style="position:absolute;inset:0">${FeedTrack({ ...track, chip: '', height: 852, top: 118, bottom: 106 })}</div>
    <div style="position:absolute;top:62px;left:16px;right:16px;z-index:10">${SearchBar({ text, focused: true })}</div>
    <div style="position:absolute;inset:110px 0 0;z-index:9;background:var(--color-background)">${RecentSearches({ terms, typed: text })}</div>`,
    overlay: keyboard ? Keyboard({ returnKey: '검색' }) : '' })
}

export function TrackDetailScreen({ track, detail = {} } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: Blame', mode: 'following' }),
    overlay: Sheet({ children: TrackDetail({ ...track, album: track.title, ...detail }) }) })
}

export function FeedPopupScreen({ track, title, message } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '인디', mode: 'following', context: '이번 주 특집 5/5' }),
    overlay: `<div class="dim" style="background:var(--color-scrim-strong);display:grid;place-items:center">${Popup({ title, message })}</div>` })
}

// 첫 진입 온보딩(feed_coachmark 1.0): 따라 해야 넘어간다. double-tap → (더블탭) → hyped → (터치) → swipe-up → (스와이프) → 피드
export function FeedCoachScreen({ track, gesture = 'double-tap', handY = 390, captionTop = 525 } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '', hyped: gesture === 'hyped', mode: 'following' }),
    overlay: CoachGesture({ gesture, handY, captionTop }) })
}

export function WhatsNewScreen({ track, releases } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: Blame', mode: 'following' }),
    overlay: Sheet({ kind: 'large', children: `<div class="grabber"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:24px 24px 16px"><h1 style="font:var(--typography-title1)">새로운 기능</h1><i class="ic ic-xmark" style="font-size:15px;color:var(--color-text-tertiary)"></i></div>
      <div style="flex:1;overflow:hidden">${ReleaseNotes(releases ? { releases } : {})}</div>
      <div style="padding:0 24px 34px">${Button({ label: '확인' })}</div>` }) })
}
