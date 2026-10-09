import { TrackDetail } from './track-detail.js'
import spec from './track-detail.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Overlays/TrackDetail', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: TrackDetail }
export const Default = { args: {} }
export const NoHypes = { args: { hypers: [] } }
