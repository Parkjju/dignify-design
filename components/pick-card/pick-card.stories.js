import { PickCard } from './pick-card.js'
import spec from './pick-card.md?raw'
import { docs, onDark, COVERS } from '../_story.js'

export default {
  title: 'Components/Content/PickCard', tags: ['autodocs'], parameters: docs(spec), decorators: [...onDark(), s => `<div style="width:361px">${s()}</div>`],
  render: PickCard,
  argTypes: { covers: { control: 'check', options: COVERS } },
  args: { nickname: 'digger_lover', verified: true, time: '12분 전', title: '모두가 사랑하는 밴드', covers: ['a-loveya', 'a-ohio', 'a-tomboy'], trackCount: 12, reactions: 3, reacted: true, mine: false, plays: 0 },
}
export const Default = {}
export const NoReactions = { args: { verified: false, reactions: 0, reacted: false, nickname: 'wavelover', title: '국내 브릿팝 루키 🔥', covers: ['a-bigvoid', 'a-billann', 'a-truth'], trackCount: 10 } }
export const Mine = { args: { mine: true, reacted: false, plays: 27 } }
export const OneCover = { args: { covers: ['a-seasons'], trackCount: 1, reactions: 0, reacted: false, title: 'seasons 한 곡' } }
