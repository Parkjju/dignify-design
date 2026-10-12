import { SeedTray } from './seed-tray.js'
import spec from './seed-tray.md?raw'
import { docs } from '../_story.js'

const A = { cover: 'a-wss', number: 1 }, B = { cover: 'a-billann', number: 2 }, C = { cover: 'a-seasons', number: 3 }
export default { title: 'Components/Inputs/SeedTray', tags: ['autodocs'], parameters: docs(spec), render: SeedTray, decorators: [s => `<div style="width:345px">${s()}</div>`] }
export const Empty = { args: { items: [] } }
export const Two = { args: { items: [A, B] } }
export const Full = { args: { items: [A, B, C] } }
