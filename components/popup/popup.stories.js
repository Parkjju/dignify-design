import { Popup } from './popup.js'
import spec from './popup.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/Popup', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('rgba(0,0,0,.55)'),
  render: Popup, args: {},
}
export const WeeklySetDone = {}
export const PickPosted = { args: { title: '픽을 올렸어요', message: '올린 픽에 🔥가 달리면 바로 알려드릴게요.' } }
