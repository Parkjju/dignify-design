import { SeedTile } from './seed-tile.js'
import spec from './seed-tile.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Content/SeedTile', tags: ['autodocs'], parameters: docs(spec), render: SeedTile }
export const Unselected = { args: {}, decorators: [s => `<div style="width:108px">${s()}</div>`] }
export const Selected = { args: { number: 1 }, decorators: [s => `<div style="width:108px">${s()}</div>`] }
export const Playing = { args: { number: 2, playing: true, cover: 'a-billann', title: 'Bill Loves Ann', artist: '퍼플웨일' }, decorators: [s => `<div style="width:108px">${s()}</div>`] }
