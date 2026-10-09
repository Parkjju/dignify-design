import { Segmented } from './segmented.js'
import spec from './segmented.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Inputs/Segmented', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: Segmented }
export const AllTime = { args: {} }
export const ThisWeek = { args: { selected: 0 } }
