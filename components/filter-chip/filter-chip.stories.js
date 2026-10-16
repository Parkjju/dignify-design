import { FilterChip, FilterChips } from './filter-chip.js'
import spec from './filter-chip.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Inputs/FilterChip', tags: ['autodocs'], parameters: docs(spec), render: FilterChip, args: { label: '록', selected: false } }
export const Default = {}
export const Selected = { args: { selected: true } }
export const Row = { render: FilterChips, decorators: width(393), args: { items: ['전체', '록', 'R&B/소울', '힙합/랩', '인디', '팝'], selected: '전체' } }
