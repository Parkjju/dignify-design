import { story } from './_story.js'
export default { title: 'Screens/1. 피드', parameters: { layout: 'centered' } }

const mode = { mode: { control: 'inline-radio', options: ['following', 'random'] } }
export const Feed = story('feed', {}, mode)
export const Hyped = story('feed', { hyped: true, track: 'loveya', chip: '록' }, mode, '피드 — 하입함')
export const WeeklySet = story('feed', { context: '이번 주 특집 3/5', track: 'seasons', chip: '인디' }, mode, '피드 — 이번 주 특집')
export const SearchResult = story('feed', { query: '실리카겔', track: 'bigvoid', chip: '록' }, mode, '피드 — 검색 결과')
export const Search = story('feed-search')
export const TrackDetail = story('track-detail')
export const PushPopup = story('feed-push-popup')
const gesture = { gesture: { control: 'inline-radio', options: ['double-tap', 'hyped', 'swipe-up'] }, handY: { control: { type: 'range', min: 120, max: 700, step: 2 } }, captionTop: { control: { type: 'range', min: 120, max: 720, step: 2 } } }
export const Coach = story('feed-coach', {}, gesture)
export const CoachHyped = story('feed-coach-hyped', {}, gesture)
export const CoachSwipe = story('feed-coach-swipe', {}, gesture)
export const WhatsNew = story('whats-new')
