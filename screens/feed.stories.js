// 앱 화면 시안 — screens/<파일>.html 을 그대로 iframe으로 띄운다. 화면을 추가하면 여기에도 한 줄.
import { frame } from './frame.js'
export default { title: 'Screens/1. 피드', parameters: { layout: 'centered' } }

export const Feed = { name: '피드', render: frame('feed') }
export const FeedSearch = { name: '피드 검색', render: frame('feed-search') }
export const TrackDetail = { name: '트랙 상세', render: frame('track-detail') }
export const FeedPushPopup = { name: '이번 주 특집 끝 · 알림 권유', render: frame('feed-push-popup') }
export const FeedCoach = { name: '피드 코치마크', render: frame('feed-coach') }
export const WhatsNew = { name: '새로운 기능', render: frame('whats-new') }
