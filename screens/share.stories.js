// 앱 화면 시안 — screens/<파일>.html 을 그대로 iframe으로 띄운다. 화면을 추가하면 여기에도 한 줄.
import { frame } from './frame.js'
export default { title: 'Screens/5. 공유 카드', parameters: { layout: 'centered' } }

export const ShareCardTrack = { name: '트랙', render: frame('share-card-track') }
export const ShareCardPick = { name: '픽', render: frame('share-card-pick') }
export const ShareCardProfile = { name: '디깅 유형', render: frame('share-card-profile') }
