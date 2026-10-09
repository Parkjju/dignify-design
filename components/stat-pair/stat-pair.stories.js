import { StatPair } from './stat-pair.js'
import spec from './stat-pair.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Content/StatPair', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: StatPair }
export const Same = { args: {} }
export const Different = { args: { headline: '제일 많이 듣는 건 록, 담는 건 얼터너티브.', dug: 5, kept: 2 } }
