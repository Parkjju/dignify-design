import { RecentSearches } from './recent-searches.js'
import spec from './recent-searches.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Content/RecentSearches', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: RecentSearches }
export const WithTyped = { args: { typed: '실리카겔' } }
export const Empty = { args: { terms: [], typed: '실리카겔' } }
