import { story } from './_story.js'
import { CoachLive as live } from './coach-live.js'
export default { title: 'Screens/1. 피드', parameters: { layout: 'centered' } }

const mode = { mode: { control: 'inline-radio', options: ['following', 'random'] }, lift: { control: { type: 'range', min: 0, max: 80, step: 2 }, description: '제목·아티스트·좋아요 줄을 더 올리는 양 (0 = 지금 앱, 탭바와 간격 23)' } }
export const Feed = story('feed', {}, mode)
export const Hyped = story('feed', { hyped: true, track: 'loveya', chip: '록' }, mode, '피드 — 좋아요함')
export const Liking = story('feed', { hyped: true, burst: true, track: 'loveya', chip: '록', speed: 1 }, { ...mode, speed: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 }, description: '모션 빠르기' } }, '피드 — 좋아요 누르는 순간')
export const WeeklySet = story('feed', { context: '이번 주 특집 3/5', track: 'seasons', chip: '인디' }, mode, '피드 — 이번 주 특집')
export const SearchResult = story('feed', { query: '실리카겔', track: 'bigvoid', chip: '록' }, mode, '피드 — 검색 결과')
export const Search = story('feed-search')
export const TrackDetail = story('track-detail')
export const PushPopup = story('feed-push-popup')
const gesture = { gesture: { control: 'inline-radio', options: ['double-tap', 'hyped', 'swipe-up'] }, handOffset: { control: { type: 'range', min: -160, max: 160, step: 2 }, description: '손 중심 ↕ 아트워크 가운데 기준' }, captionBelow: { control: { type: 'range', min: -120, max: 120, step: 1 }, description: '캡션이 아트워크 아래로 나오는 길이' }, speed: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 }, description: '모션 빠르기 (1 = 기본, 2 = 두 배 빠르게)' } }
export const Coach = story('feed-coach', {}, gesture)
export const CoachHyped = story('feed-coach-hyped', {}, gesture)
const peek = { peek: { control: { type: 'range', min: 0, max: 120, step: 2 }, description: '손이 쓸어 올릴 때 화면이 따라 올라가는 거리(px, 0 = 안 움직임)' } }
export const CoachSwipe = story('feed-coach-swipe', {}, { ...gesture, ...peek })
export const WhatsNew = story('whats-new')

// 직접 해 보기: 더블탭 → 아무 곳 탭 → 위로 쓸기. 처음부터 다시 하려면 Controls 값을 바꾸거나 새로고침
export const CoachLive = { name: '코치마크 — 직접 해 보기', render: live, args: { speed: 1, hold: 0.3, handOffset: -18, captionBelow: 25, peek: 32 },
  argTypes: { speed: gesture.speed, hold: { control: { type: 'range', min: 0, max: 3, step: 0.1 }, description: '더블탭 후 하트 아이콘이 다 커진 뒤 머무는 시간(초)' }, handOffset: gesture.handOffset, captionBelow: gesture.captionBelow, ...peek } }
