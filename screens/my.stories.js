import { story } from './_story.js'
export default { title: 'Screens/3. 마이', parameters: { layout: 'centered' } }

export const MyPage = story('my-page')
export const DiggingProfile = story('digging-profile', {}, { range: { control: 'inline-radio', options: [0, 1], labels: { 0: '이번 주', 1: '전체' } } })
export const DiggingProfileCrate = story('digging-profile', { scroll: 1180 }, {}, '디깅 프로필 — 하입한 곡')
export const DiggingProfileLocked = story('digging-profile', { locked: true, stats: { headline: '제일 많이 듣는 건 록, 담는 건 얼터너티브.', dug: 5, kept: 2 } }, {}, '디깅 프로필 — 잠김')
export const MyPicks = story('my-picks')
export const HypeHistory = story('hype-history')
export const HypeHistoryEdit = story('hype-history', { editing: true }, {}, '하입 기록 — 편집')
export const SeedPicker = story('seed-picker')
export const ArtistRequests = story('artist-requests')
export const ArtistRequestSheet = story('artist-requests', { sheet: true }, {}, '아티스트 요청 — 시트')
export const ArtistRequestSent = story('artist-requests', { sheet: true, sent: true }, {}, '아티스트 요청 — 보냄')
export const BlockedUsers = story('blocked-users')
