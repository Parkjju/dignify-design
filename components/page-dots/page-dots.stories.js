import { PageDots } from './page-dots.js'
import spec from './page-dots.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Navigation/PageDots', tags: ['autodocs'], parameters: docs(spec), render: PageDots }
export const Tutorial = { args: {} }
export const Last = { args: { index: 6 } }
