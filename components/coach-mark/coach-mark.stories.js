import { CoachMark } from './coach-mark.js'
import spec from './coach-mark.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/Overlays/CoachMark', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('rgba(0,0,0,.72)'),
  render: CoachMark, args: { step: 1, total: 2 },
}
export const Feed = {}
export const PicksLast = { args: { title: '직접 만들어보기', body: '담아둔 곡을 묶어서 나만의 픽을 올려보세요.', step: 4, total: 4 } }
export const FeedMode = { args: { title: '지금 무엇을 따라가는지', body: '피드가 하입을 따라가는 중인지 무작위인지 여기서 알 수 있어요. 누르면 바뀌어요.', step: 2, total: 2 } }
