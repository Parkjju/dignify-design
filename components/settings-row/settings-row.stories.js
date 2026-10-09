import { SettingsRow } from './settings-row.js'
import spec from './settings-row.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/Content/SettingsRow', tags: ['autodocs'], parameters: docs(spec), decorators: width(393),
  render: SettingsRow,
  argTypes: { variant: { control: 'inline-radio', options: ['link', 'destructive', 'toggle', 'card'] } },
  args: { variant: 'link', label: '추천 기준 곡', caption: '', on: true },
}
export const Link = {}
export const Destructive = { args: { variant: 'destructive', label: '계정 삭제' } }
export const Toggle = { args: { variant: 'toggle', label: '하입한 곡 따라가기', caption: '켜면 하입한 곡과 소리가 비슷한 곡이 나오고, 끄면 조건 없이 아무 곡이나 나와요.' } }
export const Card = { args: { variant: 'card', label: '디깅 프로필', caption: '🔁 충성파' } }
