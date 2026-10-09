// 시안용 기기 프레임(iPhone 393×852). 화면 함수는 전부 Device(...)로 감싼다.
// surface: light | media(피드·픽 재생) | dark(Picks) · tab: null | feed | picks | my
// status: auto | light(흰 글씨) | dark(검은 글씨) — 시트가 어두운 지면 위에 뜰 때 등 수동 지정
import { TabBar } from '../components/tab-bar/tab-bar.js'

export function Device({ surface = 'light', time = '10:28', battery = 97, tab = null, status = 'auto', children = '', overlay = '' } = {}) {
  const dark = surface !== 'light'
  const bg = surface === 'dark' ? 'background:var(--color-pick-background)' : surface === 'media' ? 'background:#000' : ''
  const tone = status === 'auto' ? '' : status === 'light' ? ' style="color:#fff"' : ' style="color:#000"'
  const bat = status === 'light' ? ' style="background:#fff;color:#000"' : status === 'dark' ? ' style="background:#000;color:#fff"' : ''
  return `<div class="device${dark ? ' dark' : ''}" style="${bg}">
  <div class="island"></div>
  <div class="status"${tone}><b>${time}</b><span><i class="ic ic-signal"></i><i class="ic ic-wifi"></i><i class="battery"${bat}>${battery}</i></span></div>
  ${children}
  ${tab ? TabBar({ surface, selected: tab, floating: true }) : ''}
  ${overlay}
  <div class="home"></div>
</div>`
}

// 스크롤 화면: 내용 전체를 scroll 만큼 위로 민다(Controls의 scroll로 아래쪽을 본다).
export const Scroll = ({ top = 0, scroll = 0, children = '' }) =>
  `<div class="scroll"><div style="padding-top:${top}px;transform:translateY(${-scroll}px)">${children}</div></div>`

// 내비 바: 스크롤 엣지 효과(위로 흐려짐) 포함
export const NavLayer = nav => `<div style="position:absolute;top:54px;inset-inline:0;z-index:50"><div style="position:absolute;inset:-54px 0 -14px;background:linear-gradient(var(--color-background) 75%,rgba(255,255,255,0))"></div><div style="position:relative">${nav}</div></div>`

// 시트: kind = large(위 64부터) | floating(내용 높이) — dim 포함
export const Sheet = ({ kind = 'floating', bottom = 8, children = '', dim = true, bg = '' }) =>
  `${dim ? '<div class="dim"></div>' : ''}<div class="sheet${kind === 'floating' ? ' floating' : ''}" style="${kind === 'large' ? 'top:64px;display:flex;flex-direction:column;' : `bottom:${bottom}px;`}${bg}">${children}</div>`
