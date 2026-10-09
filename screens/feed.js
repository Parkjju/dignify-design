// 1. 피드 흐름 화면 — 기준: Features/Feed/FeedView.swift · TrackDetailView · PushOptInPopup · WhatsNewView · CoachMarks
import { Device, Sheet } from './device.js'
import { FeedTrack } from '../components/feed-track/feed-track.js'
import { FeedHeader } from '../components/feed-header/feed-header.js'
import { SearchBar } from '../components/search-bar/search-bar.js'
import { RecentSearches } from '../components/recent-searches/recent-searches.js'
import { Keyboard } from '../components/keyboard/keyboard.js'
import { TrackDetail } from '../components/track-detail/track-detail.js'
import { Popup } from '../components/popup/popup.js'
import { CoachMark } from '../components/coach-mark/coach-mark.js'
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

export function FeedCoachScreen({ track, step = 1 } = {}) {
  const steps = [['마음에 들면 하입하세요', '하입한 곡은 담은 곡에 모여요. 그리고 피드가 그 곡과 비슷한 소리를 찾아 와요.', 'left:12px;top:706px;width:48px;height:48px', 'bottom:186px'],
    ['지금 무엇을 따라가는지', '피드가 하입을 따라가는 중인지 무작위인지 여기서 알 수 있어요. 누르면 바뀌어요.', 'right:12px;top:102px;width:172px;height:42px;border-radius:20px', 'top:168px']]
  const [title, body, spot, place] = steps[step - 1] || steps[0]
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: Blame', mode: 'following' }),
    overlay: `<div class="ds-spotlight" style="position:absolute;z-index:95;${spot}"></div><div style="position:absolute;left:24px;right:24px;z-index:96;${place}">${CoachMark({ title, body, step, total: 2 })}</div>` })
}

export function WhatsNewScreen({ track, releases } = {}) {
  return Device({ surface: 'media', tab: 'feed', children: feedLayer({ track, chip: '비슷한 곡: Blame', mode: 'following' }),
    overlay: Sheet({ kind: 'large', children: `<div class="grabber"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:24px 24px 16px"><h1 style="font:var(--typography-title1)">새로운 기능</h1><i class="ic ic-xmark" style="font-size:15px;color:var(--color-text-tertiary)"></i></div>
      <div style="flex:1;overflow:hidden">${ReleaseNotes(releases ? { releases } : {})}</div>
      <div style="padding:0 24px 34px">${Button({ label: '확인' })}</div>` }) })
}
