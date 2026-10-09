import { ShareCard } from './share-card.js'
import spec from './share-card.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Content/ShareCard', tags: ['autodocs'], parameters: docs(spec), render: ShareCard }
export const Track = { args: {} }
export const Pick = { args: { variant: 'pick', cover: 'a-loveya', title: '모두가 사랑하는 밴드' } }
export const Profile = { args: { variant: 'profile' } }
