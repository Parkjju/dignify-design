import { CoachGesture } from './coach-gesture.js'
import spec from './coach-gesture.md?raw'
import { docs } from '../_story.js'
import { FeedTrack } from '../feed-track/feed-track.js'

export default {
  title: 'Components/Overlays/CoachGesture', tags: ['autodocs'], parameters: docs(spec),
  decorators: [story => `<div style="position:relative;width:393px;border-radius:12px;overflow:hidden">${FeedTrack()}${story()}</div>`],
  render: CoachGesture, args: { gesture: 'double-tap', handY: 300, captionTop: 405 },
  argTypes: { gesture: { control: 'inline-radio', options: ['double-tap', 'hyped', 'swipe-up'] } },
}
export const DoubleTap = {}
export const Hyped = { args: { gesture: 'hyped' } }
export const SwipeUp = { args: { gesture: 'swipe-up' } }
