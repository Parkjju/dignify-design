import { story } from './_story.js'
import { SEED_FULL_HINTS } from './my.js'
export default { title: 'Screens/3. 마이', parameters: { layout: 'centered' } }

export const MyPage = story('my-page')
export const DiggingProfile = story('digging-profile', {}, { range: { control: 'inline-radio', options: [0, 1], labels: { 0: '이번 주', 1: '전체' } } })
export const DiggingProfileCrate = story('digging-profile', { scroll: 1180 }, {}, '디깅 프로필 — 좋아요한 곡')
export const DiggingProfileLocked = story('digging-profile', { locked: true, stats: { headline: '제일 많이 듣는 건 록, 담는 건 얼터너티브.', dug: 5, kept: 2 } }, {}, '디깅 프로필 — 잠김')
export const MyPicks = story('my-picks')
export const HypeHistory = story('hype-history')
export const HypeHistoryEdit = story('hype-history', { editing: true }, {}, '좋아요 기록 — 편집')
const fullHint = { fullHint: { control: 'inline-radio', options: SEED_FULL_HINTS } }
export const SeedPicker = story('seed-picker', {}, {}, '추천 기준 곡 — 0곡')
export const SeedPickerCleared = story('seed-picker', { saved: ['a-ohio', 'a-blame'] }, {}, '추천 기준 곡 — 고정 다 뺌(저장 활성)')
export const SeedPickerTwo = story('seed-picker', { selected: ['a-ohio', 'a-blame'] }, {}, '추천 기준 곡 — 2곡')
export const SeedPickerFull = story('seed-picker-full', {}, fullHint, '추천 기준 곡 — 3곡 다 고름')
export const SeedPickerFullSpecHint = story('seed-picker-full', { fullHint: SEED_FULL_HINTS[0] }, fullHint, '추천 기준 곡 — 3곡 · 명세 문구(깨짐)')
export const SeedPickerLimit = story('seed-picker-full', { popup: true }, {}, '추천 기준 곡 — 4번째 누름')
export const SeedPickerInfo = story('seed-picker', { selected: ['a-ohio', 'a-blame'], tooltip: true }, {}, '추천 기준 곡 — ⓘ 설명')
export const SeedPickerGenre = story('seed-picker', { genre: '록', selected: ['a-ohio'] }, {}, '추천 기준 곡 — 장르 록')
export const SeedPickerEmpty = story('seed-picker-empty', {}, {}, '추천 기준 곡 — 좋아요 없음')
export const ArtistRequests = story('artist-requests')
export const ArtistRequestSheet = story('artist-requests', { sheet: true }, {}, '아티스트 요청 — 시트')
export const ArtistRequestSent = story('artist-requests', { sheet: true, sent: true }, {}, '아티스트 요청 — 보냄')
export const BlockedUsers = story('blocked-users')
