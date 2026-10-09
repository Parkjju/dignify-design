import { RequestRow } from './request-row.js'
import spec from './request-row.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Content/RequestRow', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: RequestRow }
export const Added = { args: {} }
export const Pending = { args: { artist: '쏜애플', status: 'pending', date: '2026년 10월 6일' } }
export const Canceled = { args: { artist: '임영웅', status: 'canceled', reason: 'Apple Music에 미리듣기가 없는 아티스트예요.', date: '2026년 9월 28일' } }
