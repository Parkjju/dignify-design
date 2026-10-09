import { Button } from './button.js'
import spec from './button.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/Inputs/Button', tags: ['autodocs'], parameters: docs(spec), decorators: width(345),
  render: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'small', 'block', 'fab', 'dark', 'outline-block', 'outline', 'destructive', 'apple'] },
    icon: { control: 'select', options: ['', 'plus', 'share', 'music-note', 'play', 'search'] },
  },
  args: { variant: 'primary', label: '확인', icon: '', disabled: false, busy: false },
}
export const Primary = {}
export const Disabled = { args: { disabled: true, label: '다음' } }
export const Busy = { args: { busy: true } }
export const Small = { args: { variant: 'small', label: '다음' } }
export const Block = { args: { variant: 'block', label: '내 취향 공유', icon: 'share' } }
export const Fab = { args: { variant: 'fab', label: '새 픽', icon: 'plus' } }
export const AppleMusic = { args: { variant: 'dark', label: 'Apple Music에서 듣기', icon: 'music-note' } }
export const YouTubeMusic = { args: { variant: 'outline-block', label: 'YouTube Music에서 찾기', icon: 'play' } }
export const Outline = { args: { variant: 'outline', label: '아티스트 요청하기' } }
export const Destructive = { args: { variant: 'destructive', label: '계정 삭제' } }
export const SignInWithApple = { args: { variant: 'apple', label: 'Apple로 계속하기' } }
