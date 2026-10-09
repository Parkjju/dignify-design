import { UserRow } from './user-row.js'
import spec from './user-row.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Content/UserRow', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: UserRow }
export const Default = { args: {} }
export const Swiped = { args: { nickname: 'spam_bot_99', swiped: true } }
