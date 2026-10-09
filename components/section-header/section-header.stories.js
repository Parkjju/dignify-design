import { SectionHeader } from './section-header.js'
import spec from './section-header.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Content/SectionHeader', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: SectionHeader }
export const Title = { args: { action: '편집' } }
export const Label = { args: { variant: 'label', title: '하입한 곡' } }
export const Date = { args: { variant: 'date', title: '2026년 10월 7일' } }
export const Caption = { args: { variant: 'caption', title: '최근 검색' } }
