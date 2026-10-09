import { TrackRow } from './track-row.js'
import spec from './track-row.md?raw'
import { docs, width, COVERS } from '../_story.js'

export default {
  title: 'Components/Content/TrackRow', tags: ['autodocs'], parameters: docs(spec), decorators: width(353),
  render: TrackRow,
  argTypes: { cover: { control: 'select', options: COVERS }, number: { control: { type: 'number', min: 0, max: 3 } } },
  args: { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth', number: 0, playing: false },
}
export const Unselected = {}
export const Selected = { args: { number: 1 } }
export const Playing = { args: { number: 2, playing: true, cover: 'a-bulssi', title: '불씨', artist: '컨파인드 화이트' } }
