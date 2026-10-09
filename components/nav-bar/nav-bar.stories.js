import { NavBar } from './nav-bar.js'
import spec from './nav-bar.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/Navigation/NavBar', tags: ['autodocs'], parameters: docs(spec), decorators: width(393),
  render: NavBar, argTypes: { rightIcon: { control: 'select', options: ['', 'plus', 'ellipsis'] } },
  args: { title: '디깅 프로필', back: true, left: '', right: '', rightIcon: '' },
}
export const Back = {}
export const WithAction = { args: { title: '하입 기록', right: '편집' } }
export const InSheet = { args: { title: '새 픽', back: false, left: '취소' } }
export const WithIcon = { args: { title: '아티스트 요청', right: '편집', rightIcon: 'plus' } }
