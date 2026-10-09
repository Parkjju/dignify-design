import { FeedBuilding } from './feed-building.js'
import spec from './feed-building.md?raw'
import { docs, COVERS } from '../_story.js'

export default {
  title: 'Components/Content/FeedBuilding', tags: ['autodocs'], parameters: docs(spec),
  render: FeedBuilding, args: { covers: ['a-wss', 'a-billann', 'a-seasons'] },
  argTypes: { covers: { control: 'check', options: COVERS } },
}
export const ThreeCovers = {}
export const OneCover = { args: { covers: ['a-wss'] } }
