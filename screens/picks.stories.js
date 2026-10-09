// 앱 화면 시안 — screens/<파일>.html 을 그대로 iframe으로 띄운다. 화면을 추가하면 여기에도 한 줄.
import { frame } from './frame.js'
export default { title: 'Screens/2. Picks', parameters: { layout: 'centered' } }

export const Picks = { name: 'Picks', render: frame('picks') }
export const PickPlay = { name: '픽 재생', render: frame('pick-play') }
export const PickMenu = { name: '픽 메뉴', render: frame('pick-menu') }
export const PickCompose = { name: '새 픽 — 곡 고르기', render: frame('pick-compose') }
export const PickComposeTitle = { name: '새 픽 — 제목', render: frame('pick-compose-title') }
