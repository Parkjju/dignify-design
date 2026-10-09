// 2. Picks 흐름 화면 — 기준: Features/Picks/PickListView.swift · PickComposeView.swift · FeedView(mode: .pick)
import { Device, Scroll, Sheet } from './device.js'
import { PickCard } from '../components/pick-card/pick-card.js'
import { Button } from '../components/button/button.js'
import { MenuSheet } from '../components/menu-sheet/menu-sheet.js'
import { FeedTrack } from '../components/feed-track/feed-track.js'
import { FeedHeader } from '../components/feed-header/feed-header.js'
import { NavBar } from '../components/nav-bar/nav-bar.js'
import { SearchBar } from '../components/search-bar/search-bar.js'
import { SectionHeader } from '../components/section-header/section-header.js'
import { TrackRow } from '../components/track-row/track-row.js'
import { TextField } from '../components/text-field/text-field.js'

const list = picks => `<div style="display:flex;flex-direction:column;gap:var(--spacing-x3-5);padding:12px 16px 120px">${picks.map(PickCard).join('')}</div>`
const fab = `<div style="position:absolute;left:50%;bottom:99px;transform:translateX(-50%);z-index:91">${Button({ variant: 'fab', label: '새 픽', icon: 'plus' })}</div>`

export function PicksScreen({ picks = [], scroll = 0 } = {}) {
  return Device({ surface: 'dark', time: '12:56', battery: 41, tab: 'picks',
    children: Scroll({ top: 72, scroll, children: `<h1 class="large-title" style="color:#fff;padding-bottom:12px">Picks</h1>${list(picks)}` }), overlay: fab })
}

export function PickPlayScreen({ track, chip = '록', hyped = true, nickname = 'digger_lover', index = 3, total = 12 } = {}) {
  return Device({ surface: 'media', children: `<div style="position:absolute;inset:0">${FeedTrack({ ...track, chip, hyped, height: 852, top: 118, bottom: 106 })}</div>
    <div style="position:absolute;top:54px;inset-inline:0;z-index:10">${FeedHeader({ pick: true, context: `@${nickname}의 픽 ${index}/${total}` })}</div>` })
}

export function PickMenuScreen({ picks = [], mine = false, nickname = 'wavelover' } = {}) {
  const rows = mine ? [['제목 수정', false], ['삭제', true]] : [['신고', false], [`@${nickname} 차단`, true]]
  return Device({ surface: 'dark', time: '12:56', battery: 41, tab: 'picks',
    children: Scroll({ top: 72, children: `<h1 class="large-title" style="color:#fff;padding-bottom:12px">Picks</h1>${list(picks)}` }),
    overlay: `<div class="dim" style="background:rgba(0,0,0,.45)"></div><div style="position:absolute;left:8px;bottom:8px;z-index:93">${MenuSheet({ rows })}</div>` })
}

// 새 픽 시트 공통: Picks 위에 큰 시트
const composeSheet = children => Device({ surface: 'media', time: '12:58', battery: 41, status: 'light',
  children: '<div style="position:absolute;inset:0;background:var(--color-pick-background);transform:scale(.92) translateY(14px);border-radius:30px;opacity:.6"></div>',
  overlay: Sheet({ kind: 'large', dim: false, children }) })

export function PickComposeScreen({ sections = [], selected = 3 } = {}) {
  const rows = sections.map(({ date, tracks }, i) => `<div style="padding:${i ? 10 : 0}px 0 6px;font-size:12px;font-weight:600;color:var(--color-text-tertiary)">${date}</div>${tracks.map(TrackRow).join('')}`).join('')
  return composeSheet(`<div class="grabber"></div><div style="margin-top:4px">${NavBar({ title: '새 픽', back: false, left: '취소' })}</div>
    <div style="padding:8px 20px 20px">${SearchBar({})}</div>${SectionHeader({ variant: 'label', title: '하입한 곡' })}
    <div style="flex:1;overflow:hidden;padding:14px 20px 0;display:flex;flex-direction:column;gap:6px">${rows}</div>
    <div style="display:flex;align-items:center;gap:14px;padding:12px 20px 42px;border-top:1px solid rgba(0,0,0,.06)"><span style="flex:1;font-size:14px;color:${selected ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'}">${selected ? `${selected}곡 선택됨` : '곡을 선택해주세요'}</span>${Button({ variant: 'small', label: '다음', disabled: !selected })}</div>`)
}

export function PickComposeTitleScreen({ title = '', fallback = 'wave to earth 외 2명', tracks = [] } = {}) {
  return composeSheet(`<div class="grabber"></div><div style="margin-top:4px">${NavBar({ title: '제목' })}</div>
    <div style="flex:1;overflow:hidden;padding:20px 16px 0">
      <div style="font:var(--typography-label);color:var(--color-text-secondary)">미리보기</div>
      <div style="margin-top:8px;border-radius:var(--radius-large);background:var(--color-pick-background);padding:8px;zoom:.86">${PickCard({ nickname: 'digger_lover', time: '방금', title: title || fallback, covers: tracks.map(t => t.cover).slice(0, 3), trackCount: tracks.length, reactions: 0, mine: true })}</div>
      <div style="margin-top:24px">${TextField({ label: '제목', count: `${title.length} / 30`, value: title, placeholder: fallback })}</div>
      <div style="margin-top:24px;font:var(--typography-label);color:var(--color-text-secondary)">${tracks.length}곡</div>
      <div style="margin-top:8px;display:flex;flex-direction:column;gap:6px">${tracks.map(TrackRow).join('')}</div>
    </div>
    <div style="padding:12px 16px 42px;border-top:1px solid rgba(0,0,0,.05)"><button class="ds-button ds-button--primary" style="height:52px">올리기</button></div>`)
}
