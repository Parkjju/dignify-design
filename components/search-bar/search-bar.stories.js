import { SearchBar } from './search-bar.js'
import spec from './search-bar.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/Inputs/SearchBar', tags: ['autodocs'], parameters: docs(spec), decorators: width(361),
  render: SearchBar, args: { text: '', placeholder: '아티스트, 트랙 검색', focused: false },
}
export const Empty = {}
export const Typing = { args: { text: '실리카겔', focused: true } }
