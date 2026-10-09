import { PillOnDark } from './pill-on-dark.js'
import spec from './pill-on-dark.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/PillOnDark', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('#2b2014'),
  render: PillOnDark,
  argTypes: { variant: { control: 'inline-radio', options: ['chip', 'mode', 'query', 'badge'] } },
  args: { variant: 'chip', label: '비슷한 곡: Blame' },
}
export const Chip = {}
export const Mode = { args: { variant: 'mode', label: '하입한 곡 따라가는 중' } }
export const Query = { args: { variant: 'query', label: '실리카겔' } }
export const Badge = { args: { variant: 'badge', label: '이번 주 특집 3/5' } }
