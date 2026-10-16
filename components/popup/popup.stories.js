import { Popup } from './popup.js'
import spec from './popup.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/Overlays/Popup', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('rgba(0,0,0,.55)'),
  render: Popup, args: {},
}
export const WeeklySetDone = {}
export const PickPosted = { args: { title: '픽을 올렸어요', message: '올린 픽에 🔥가 달리면 바로 알려드릴게요.' } }
export const Notice = { args: { mark: false, decline: '', accept: '확인', title: '선택한 곡 중 1개를 해제해 주세요', message: '3개까지 선택할 수 있어요' } }
