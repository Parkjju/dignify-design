import { story } from './_story.js'
export default { title: 'Screens/5. 공유 카드', parameters: { layout: 'centered' } }

const v = { variant: { control: 'inline-radio', options: ['track', 'pick', 'profile'] } }
export const Track = story('share-card', {}, v, '트랙')
export const Pick = story('share-card', { variant: 'pick', cover: 'a-loveya', title: '모두가 사랑하는 밴드' }, v, '픽')
export const Profile = story('share-card', { variant: 'profile' }, v, '디깅 유형')
