// 컴포넌트를 조립해서 만든 화면. 새 시안은 이 방식으로 만든다 — 컴포넌트를 고치면 화면이 같이 바뀐다.
import { Device } from './device.js'
import { PickCard } from '../components/pick-card/pick-card.js'
import { NavBar } from '../components/nav-bar/nav-bar.js'
import { TypeHero } from '../components/type-hero/type-hero.js'
import { SettingsRow } from '../components/settings-row/settings-row.js'
import { CrateDayRow } from '../components/crate-cell/crate-cell.js'
import { FeedTrack } from '../components/feed-track/feed-track.js'

export default { title: 'Screens/0. 조립 예시', parameters: { layout: 'centered' } }

export const Picks = {
  name: 'Picks (컴포넌트 조립)',
  render: () => Device({ surface: 'dark', time: '12:56', battery: 41, tab: 'picks', children: `
  <div class="scroll" style="padding-top:72px">
    <h1 class="large-title" style="color:#fff;padding-bottom:12px">Picks</h1>
    <div style="display:flex;flex-direction:column;gap:var(--spacing-x3-5);padding:12px 16px 0">
      ${PickCard({ verified: true, reacted: true })}
      ${PickCard({ nickname: 'wavelover', time: '1시간 전', title: '국내 브릿팝 루키 🔥', covers: ['a-bigvoid', 'a-billann', 'a-truth'], trackCount: 10, reactions: 1 })}
    </div>
  </div>
  <span style="position:absolute;left:50%;bottom:99px;transform:translateX(-50%);z-index:91;height:48px;padding:0 20px;border-radius:999px;background:var(--color-brand);color:#fff;display:flex;align-items:center;gap:6px;font-size:15px;font-weight:600;box-shadow:0 6px 12px color-mix(in srgb,var(--color-brand) 35%,transparent)"><i class="ic ic-plus" style="font-size:14px"></i>새 픽</span>` }),
}

export const Feed = {
  name: '피드 (컴포넌트 조립)',
  render: () => Device({ surface: 'media', tab: 'feed', children: `<div style="position:absolute;inset:0">${FeedTrack({ height: 852 })}</div>` }),
}

export const DiggingProfile = {
  name: '디깅 프로필 (컴포넌트 조립)',
  render: () => Device({ time: '10:57', battery: 72, tab: 'my', children: `
  <div style="position:absolute;top:54px;inset-inline:0;z-index:5">${NavBar({ title: '디깅 프로필' })}</div>
  <div class="scroll" style="padding-top:126px;display:flex;flex-direction:column;gap:24px">
    <div style="margin:0 20px">${TypeHero({})}</div>
    ${CrateDayRow({ date: '2026년 10월 7일', items: [
      { cover: 'a-farewell', title: 'Farewell to Arms!', artist: '잔나비' }, { cover: 'a-friends', title: 'FRIENDS', artist: 'shinjihang' },
      { cover: 'a-intro', title: 'Introduction to a Man', artist: '윤상' }, { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' }] })}
    ${SettingsRow({ variant: 'card', label: '디깅 프로필', caption: '🔁 충성파' })}
  </div>` }),
}
