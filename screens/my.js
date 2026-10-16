// 3. 마이 흐름 화면 — 기준: Features/MyPage/* · Features/DiggingProfile/DiggingProfileView.swift · Features/ArtistRequest/* · Features/Picks/BlockedUsersView.swift
import { Device, Scroll, NavLayer, Sheet } from './device.js'
import { NavBar } from '../components/nav-bar/nav-bar.js'
import { SettingsRow } from '../components/settings-row/settings-row.js'
import { Segmented } from '../components/segmented/segmented.js'
import { TypeHero } from '../components/type-hero/type-hero.js'
import { StatPair } from '../components/stat-pair/stat-pair.js'
import { LensColumns } from '../components/lens-columns/lens-columns.js'
import { MyPickRow } from '../components/my-pick-row/my-pick-row.js'
import { SectionHeader } from '../components/section-header/section-header.js'
import { CrateDayRow } from '../components/crate-cell/crate-cell.js'
import { SeedTray } from '../components/seed-tray/seed-tray.js'
import { TrackRow } from '../components/track-row/track-row.js'
import { FilterChips } from '../components/filter-chip/filter-chip.js'
import { Tooltip } from '../components/tooltip/tooltip.js'
import { EmptyState } from '../components/empty-state/empty-state.js'
import { Popup } from '../components/popup/popup.js'
import { LinkRow } from '../components/link-row/link-row.js'
import { Button } from '../components/button/button.js'
import { PickCard } from '../components/pick-card/pick-card.js'
import { RequestRow } from '../components/request-row/request-row.js'
import { ArtistRequestForm } from '../components/artist-request-form/artist-request-form.js'
import { Keyboard } from '../components/keyboard/keyboard.js'
import { UserRow } from '../components/user-row/user-row.js'

const hr = '<div class="hr" style="margin:8px 20px"></div>'
const crate = (days, mode = 'default', selected = []) => days.map(d => `<div style="margin-bottom:20px">${CrateDayRow({ ...d, mode, selected })}</div>`).join('')

export function MyPageScreen({ nickname = 'digger_lover', type = '🔁 충성파', following = true, scroll = 0 } = {}) {
  const rows = labels => labels.map(l => SettingsRow({ label: l })).join('')
  return Device({ time: '10:21', tab: 'my', children: Scroll({ top: 100, scroll, children: `
    <h1 class="large-title" style="padding:0 20px">마이페이지</h1>
    <div style="display:flex;justify-content:center;align-items:center;gap:6px;padding:32px 0 24px;font:var(--typography-headline)">${nickname} <i class="ic ic-pencil" style="font-size:13px;color:var(--color-text-tertiary)"></i></div>
    <div style="margin-bottom:12px">${SettingsRow({ variant: 'card', label: '디깅 프로필', caption: type })}</div>${hr}
    ${SettingsRow({ variant: 'toggle', label: '좋아요한 곡 따라가기', caption: '켜면 좋아요한 곡과 소리가 비슷한 곡이 나오고, 끄면 조건 없이 아무 곡이나 나와요.', on: following })}
    ${rows(['추천 기준 곡', '아티스트 요청', '차단한 유저'])}${hr}${rows(['새로운 기능', 'dignify 인스타그램'])}${hr}${rows(['이용약관', '개인정보처리방침'])}${hr}
    ${SettingsRow({ label: '로그아웃' })}${SettingsRow({ variant: 'destructive', label: '계정 삭제' })}
    <p style="text-align:center;padding:24px 0 120px;font:var(--typography-caption);color:var(--color-border)">v1.2.1</p>` }) })
}

export function DiggingProfileScreen({ range = 1, locked = false, type = {}, stats = {}, genres = {}, artists = {}, myPick = {}, crateDays = [], scroll = 0 } = {}) {
  return Device({ time: '10:57', battery: 72, tab: 'my', children: NavLayer(NavBar({ title: '디깅 프로필' })) + Scroll({ top: 126, scroll, children: `
    <div style="display:flex;flex-direction:column;gap:24px;padding-bottom:120px">
      <div style="margin:0 20px">${Segmented({ selected: range })}</div>
      <div style="margin:0 20px">${TypeHero({ locked, ...type })}</div>
      ${StatPair(stats)}${LensColumns({ title: '주요 장르', ...genres })}${LensColumns({ title: '주요 아티스트', ...artists })}
      ${hr}${SectionHeader({ title: '내가 만든 픽' })}${MyPickRow(myPick)}
      ${hr}${SectionHeader({ title: '좋아요한 곡', action: '편집' })}<div>${crate(crateDays)}</div>
      ${LinkRow({})}${locked ? '' : `<div style="margin:0 20px">${Button({ variant: 'block', label: '내 취향 공유', icon: 'share' })}</div>`}
    </div>` }) })
}

export function MyPicksScreen({ picks = [] } = {}) {
  return Device({ time: '10:58', battery: 72, tab: 'my', children: NavLayer(NavBar({ title: '내가 만든 픽' })) + Scroll({ top: 122, children:
    `<div style="display:flex;flex-direction:column;gap:var(--spacing-x3-5);padding:0 16px 120px">${picks.map(p => PickCard({ ...p, mine: true, reacted: false })).join('')}</div>` }) })
}

export function HypeHistoryScreen({ editing = false, crateDays = [], scroll = 0 } = {}) {
  return Device({ time: '4:32', battery: 88, tab: 'my', children: NavLayer(NavBar({ title: '좋아요 기록', right: editing ? '완료' : '편집' })) + Scroll({ top: 122, scroll, children: crate(crateDays, editing ? 'edit' : 'default') }) })
}

// seed_picker_opened 1.0 — 좋아요한 곡 세로 목록 + 장르 필터 + 체크 3곡. 장르 칩은 곡 목록에서 뽑아 곡 많은 순(같으면 먼저 나온 순)
const SEED_HINT = ['최대 3곡까지 담을 수 있어요', '2개 더 선택할 수 있어요', '1개 더 선택할 수 있어요', '3곡을 다 골랐어요'] // 3곡: 명세 「곡은 3개까지 선택할 수 있어요」는 커버 세 칸 옆에서 두 줄로 깨져 줄임(기획 확인 대기)
export function SeedPickerScreen({ tracks = [], genre = '전체', selected = [], tooltip = false, popup = false, scroll = 0 } = {}) {
  const limit = 3, full = selected.length >= limit
  if (!tracks.length) return Device({ time: '4:32', battery: 88, tab: 'my', children: NavLayer(NavBar({ title: '추천 기준 곡' })) +
    `<div style="position:absolute;inset:106px 0 95px;display:grid;place-items:center">${EmptyState({})}</div>` })
  const counts = new Map()
  tracks.forEach(t => counts.set(t.genre, (counts.get(t.genre) || 0) + 1))
  const genres = ['전체', ...[...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a))]
  const shown = genre === '전체' ? tracks : tracks.filter(t => t.genre === genre)
  return Device({ time: '4:32', battery: 88, tab: 'my', children: NavLayer(NavBar({ title: '추천 기준 곡', right: '저장', rightDisabled: !selected.length })) + Scroll({ top: 106, scroll, children: `
    <h2 style="padding:12px 20px 20px;font:var(--typography-title2);color:var(--color-text-primary)">3곡까지 고를 수 있어요.<br>고른 곡을 기준으로 노래를 찾을게요. <i class="ic ic-info-circle" style="font-size:18px;color:var(--color-text-tertiary);vertical-align:-2px"></i></h2>
    ${FilterChips({ items: genres, selected: genre })}
    <p style="padding:24px 20px 4px;font:var(--typography-label);color:var(--color-text-tertiary)">좋아요한 곡 ${shown.length}</p>
    <div style="display:flex;flex-direction:column;gap:var(--spacing-x1-5);padding:0 8px 112px 20px">${shown.map(t =>
      TrackRow({ ...t, number: selected.includes(t.cover) ? 1 : 0, check: true, play: false, disabled: full })).join('')}</div>` }),
    // 고른 곡 트레이: 탭바 위에 떠 있는 카드. 커버·✕ 탭 = 빼기
    overlay: `<div style="position:absolute;left:16px;right:16px;bottom:95px;z-index:80;padding:12px 16px;border-radius:var(--radius-medium);background:var(--color-background);box-shadow:0 8px 28px rgba(0,0,0,.12)">${SeedTray({ items: selected.map((cover, i) => ({ cover, number: i + 1 })), numbered: false, hint: SEED_HINT[selected.length] })}</div>` +
      (tooltip ? `<div style="position:absolute;right:16px;top:186px;z-index:60">${Tooltip({})}</div>` : '') +
      (popup ? `<div class="dim" style="background:var(--color-scrim-strong);display:grid;place-items:center;z-index:90">${Popup({ mark: false, decline: '', accept: '확인', title: '선택한 곡 중 1개를 해제해 주세요', message: '3개까지 선택할 수 있어요' })}</div>` : '') })
}

export function ArtistRequestsScreen({ requests = [], sheet = false, sent = false, value = '검정치마' } = {}) {
  const nav = NavBar({ title: '아티스트 요청', right: '편집', rightIcon: 'plus' })
  return Device({ time: '4:40', battery: 86, children: NavLayer(nav) + Scroll({ top: 114, children: requests.map(RequestRow).join('') }),
    overlay: sheet ? Sheet({ bottom: sent ? 8 : 308, children: ArtistRequestForm({ value, sent }) }) + (sent ? '' : Keyboard({ returnKey: '보내기' })) : '' })
}

export function BlockedUsersScreen({ users = [], swiped = 'spam_bot_99' } = {}) {
  return Device({ time: '4:40', battery: 86, children: NavLayer(NavBar({ title: '차단한 유저' })) + Scroll({ top: 114, children: users.map(n => UserRow({ nickname: n, swiped: n === swiped })).join('') }) })
}
