// 시안용 기기 프레임(iPhone 393×852) — 새 화면은 Device({ … children: 컴포넌트 조합 })으로 만든다.
import { TabBar } from '../components/tab-bar/tab-bar.js'

export function Device({ surface = 'light', time = '10:28', battery = 97, tab = null, children = '' } = {}) {
  const dark = surface !== 'light'
  return `<div class="device${dark ? ' dark' : ''}" style="${surface === 'dark' ? 'background:var(--color-pick-background)' : surface === 'media' ? 'background:#000' : ''}">
  <div class="island"></div>
  <div class="status"><b>${time}</b><span><i class="ic ic-signal"></i><i class="ic ic-wifi"></i><i class="battery">${battery}</i></span></div>
  ${children}
  ${tab ? TabBar({ surface, selected: tab, floating: true }) : ''}
  <div class="home"></div>
</div>`
}
