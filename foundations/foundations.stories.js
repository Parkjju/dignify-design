import color from '../tokens/color.json'
import typo from '../tokens/typography.json'
import rad from '../tokens/radius.json'
import space from '../tokens/spacing.json'
import shared from '../screens/_shared.css?raw'
import * as F from './foundations.js'

export default { title: 'Foundations', parameters: { layout: 'padded' } }
export const Colors = { name: '색', render: () => F.colors(color.color) }
export const Typography = { name: '타이포그래피', render: () => F.typography(typo.typography) }
export const Radius = { name: '라운드', render: () => F.radius(rad.radius) }
export const Spacing = { name: '여백 (4pt 그리드)', render: () => F.spacing(space.spacing) }
export const Icons = { name: '아이콘', render: () => F.icons(shared) }
export const Covers = { name: '앨범 커버(시안용)', render: () => F.covers(shared) }
