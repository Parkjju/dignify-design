import { Keyboard } from './keyboard.js'
import spec from './keyboard.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Inputs/Keyboard', tags: ['autodocs'], parameters: docs(spec), render: Keyboard }
export const Search = { args: {} }
export const Send = { args: { returnKey: '보내기' } }
