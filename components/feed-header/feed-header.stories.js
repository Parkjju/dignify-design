import { FeedHeader } from './feed-header.js'
import spec from './feed-header.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Content/FeedHeader', tags: ['autodocs'], parameters: docs(spec), render: FeedHeader }
export const Following = { args: {} }
export const WithWeeklySet = { args: { context: '이번 주 특집 3/5' } }
export const Random = { args: { mode: 'random' } }
export const SearchResult = { args: { query: '실리카겔' } }
export const PickPlayback = { args: { pick: true, context: '@digger_lover의 픽 3/12' } }
