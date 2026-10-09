import { story } from './_story.js'
export default { title: 'Screens/2. Picks', parameters: { layout: 'centered' } }

export const Picks = story('picks')
export const Play = story('pick-play')
export const MenuOthers = story('pick-menu', {}, {}, '픽 메뉴 — 남의 픽')
export const MenuMine = story('pick-menu', { mine: true }, {}, '픽 메뉴 — 내 픽')
export const Compose = story('pick-compose')
export const ComposeNone = story('pick-compose', { selected: 0, sections: [{ date: '2026년 10월 7일', tracks: [{ cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' }, { cover: 'a-bulssi', title: '불씨', artist: '컨파인드 화이트' }] }] }, {}, '새 픽 — 아무것도 안 고름')
export const ComposeTitle = story('pick-compose-title')
