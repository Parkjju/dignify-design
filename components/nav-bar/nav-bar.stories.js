import { NavBar } from './nav-bar.js'
import spec from './nav-bar.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/NavBar', tags: ['autodocs'], parameters: docs(spec), decorators: width(393),
  render: NavBar, args: { title: '디깅 프로필', back: true, left: '', right: '' },
}
export const Back = {}
export const WithAction = { args: { title: '하입 기록', right: '편집' } }
export const InSheet = { args: { title: '새 픽', back: false, left: '취소' } }
