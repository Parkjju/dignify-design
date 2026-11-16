import { Popup } from './popup.js'
import spec from './popup.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/Overlays/Popup', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('rgba(0,0,0,.35)'),
  render: Popup, args: {},
}
export const WeeklySetDone = {}
export const PickPosted = { args: { title: '픽을 올렸어요', message: '올린 픽에 🔥가 달리면 바로 알려드릴게요.' } }
export const Notice = { args: { mark: false, decline: '', accept: '확인', title: '선택한 곡 중 1개를 해제해 주세요', message: '3개까지 선택할 수 있어요' } }
export const Consent = { args: { row: true, title: '좋아하는 <em>혁오</em>의 신곡,<br>바로 알려드릴까요?', message: "'알림 받기'를 누르면 광고성 정보 수신에 동의해요." }, decorators: [story => `<div style="width:393px">${story()}</div>`] }
export const ConsentNight = { args: { row: true, decline: '아니요', title: '밤에도 아티스트 소식을 알려드릴까요?', message: "'알림 받기'를 누르면 야간(오전 8:00 ~ 오후9:00)<br>광고성 정보 수신에 동의해요." }, decorators: [story => `<div style="width:393px">${story()}</div>`] }
