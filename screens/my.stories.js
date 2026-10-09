// 앱 화면 시안 — screens/<파일>.html 을 그대로 iframe으로 띄운다. 화면을 추가하면 여기에도 한 줄.
import { frame } from './frame.js'
export default { title: 'Screens/3. 마이', parameters: { layout: 'centered' } }

export const MyPage = { name: '마이페이지', render: frame('my-page') }
export const DiggingProfile = { name: '디깅 프로필', render: frame('digging-profile') }
export const DiggingProfileCrate = { name: '디깅 프로필 — 하입한 곡', render: frame('digging-profile-crate') }
export const DiggingProfileLocked = { name: '디깅 프로필 — 잠김', render: frame('digging-profile-locked') }
export const MyPicks = { name: '내가 만든 픽', render: frame('my-picks') }
export const HypeHistory = { name: '하입 기록', render: frame('hype-history') }
export const HypeHistoryEdit = { name: '하입 기록 — 편집', render: frame('hype-history-edit') }
export const SeedPicker = { name: '추천 기준 곡', render: frame('seed-picker') }
export const ArtistRequests = { name: '아티스트 요청', render: frame('artist-requests') }
export const ArtistRequestSheet = { name: '아티스트 요청 시트', render: frame('artist-request-sheet') }
export const BlockedUsers = { name: '차단한 유저', render: frame('blocked-users') }
