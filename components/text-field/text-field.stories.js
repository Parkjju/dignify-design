import { TextField } from './text-field.js'
import spec from './text-field.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Inputs/TextField', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: TextField }
export const Title = { args: { label: '제목', count: '0 / 30', placeholder: 'wave to earth 외 2명' } }
export const Typing = { args: { label: '제목', count: '9 / 30', value: '새벽 드라이브용', focused: true } }
export const ArtistRequest = { args: { compact: true, value: '검정치마', focused: true } }
