import { story } from './_story.js'
export default { title: 'Screens/5. 공유 카드', parameters: { layout: 'centered' } }

export const ShareCard = story('share-card', {}, { variant: { control: 'inline-radio', options: ['track', 'pick', 'profile'], description: 'track = 트랙 · pick = 픽 · profile = 디깅 유형' } }, '공유 카드')
