import { CrateCell, CrateDayRow } from './crate-cell.js'
import spec from './crate-cell.md?raw'
import { docs, COVERS } from '../_story.js'

const items = [
  { cover: 'a-farewell', title: 'Farewell to Arms!', artist: '잔나비' }, { cover: 'a-friends', title: 'FRIENDS (feat. Friends)', artist: 'shinjihang' },
  { cover: 'a-intro', title: 'Introduction to a Man', artist: '윤상' }, { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' },
  { cover: 'a-bulssi', title: '불씨', artist: '컨파인드 화이트' },
]
export default {
  title: 'Components/CrateCell', tags: ['autodocs'], parameters: docs(spec),
  render: CrateCell,
  argTypes: { mode: { control: 'inline-radio', options: ['default', 'edit', 'select'] }, cover: { control: 'select', options: COVERS } },
  args: { ...items[0], mode: 'default', selected: false },
}
export const Default = {}
export const Edit = { args: { mode: 'edit' } }
export const SelectOn = { args: { mode: 'select', selected: true } }
export const DayRow = {
  render: ({ mode }) => `<div style="width:393px">${CrateDayRow({ date: '2026년 10월 7일', items, mode, selected: ['a-seasons'] })}</div>`,
  argTypes: { cover: { table: { disable: true } }, title: { table: { disable: true } }, artist: { table: { disable: true } }, selected: { table: { disable: true } } },
}
