import { LensColumns } from './lens-columns.js'
import spec from './lens-columns.md?raw'
import { docs, width } from '../_story.js'

export default { title: 'Components/Content/LensColumns', tags: ['autodocs'], parameters: docs(spec), decorators: width(393), render: LensColumns }
export const Genres = { args: {} }
export const Artists = { args: { title: '주요 아티스트', explore: [['혁오', 6], ['잔나비', 4], ['실리카겔', 3]], keep: [['혁오', 5], ['잔나비', 3]] } }
export const Empty = { args: { explore: [], keep: [] } }
