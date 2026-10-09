import { CoachMark } from './coach-mark.js'
import spec from './coach-mark.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/CoachMark', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('rgba(0,0,0,.72)'),
  render: CoachMark, args: { step: 1, total: 2 },
}
export const Feed = {}
export const PicksLast = { args: { title: '직접 만들어 보세요', body: '담아 둔 곡을 모아서 내 픽을 올려 보세요.', step: 4, total: 4 } }
