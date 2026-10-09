import { Button } from './button.js'
import spec from './button.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/Button', tags: ['autodocs'], parameters: docs(spec), decorators: width(345),
  render: Button,
  argTypes: { variant: { control: 'inline-radio', options: ['primary', 'outline', 'destructive'] } },
  args: { variant: 'primary', label: '확인', disabled: false, busy: false },
}
export const Primary = {}
export const Disabled = { args: { disabled: true, label: '다음' } }
export const Busy = { args: { busy: true } }
export const Outline = { args: { variant: 'outline', label: '아티스트 요청하기' } }
export const Destructive = { args: { variant: 'destructive', label: '계정 삭제' } }
