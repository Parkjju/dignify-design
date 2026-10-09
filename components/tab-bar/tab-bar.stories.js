import { TabBar } from './tab-bar.js'
import spec from './tab-bar.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/Navigation/TabBar', tags: ['autodocs'], parameters: docs(spec),
  render: TabBar,
  argTypes: { surface: { control: 'inline-radio', options: ['light', 'media', 'dark'] }, selected: { control: 'inline-radio', options: ['feed', 'picks', 'my'] } },
  args: { surface: 'light', selected: 'my' },
}
export const Light = { decorators: [s => `<div style="background:#fff;padding:24px">${s()}</div>`] }
export const OnFeed = { args: { surface: 'media', selected: 'feed' }, decorators: [s => `<div style="padding:24px;background:linear-gradient(#8a6b3e,#111)">${s()}</div>`] }
export const OnPicks = { args: { surface: 'dark', selected: 'picks' }, decorators: onDark() }
