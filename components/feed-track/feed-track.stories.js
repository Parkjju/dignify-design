import { FeedTrack } from './feed-track.js'
import spec from './feed-track.md?raw'
import { docs, COVERS } from '../_story.js'

export default {
  title: 'Components/Content/FeedTrack', tags: ['autodocs'], parameters: docs(spec),
  render: FeedTrack,
  argTypes: { cover: { control: 'select', options: COVERS }, width: { table: { disable: true } }, height: { table: { disable: true } }, top: { table: { disable: true } }, bottom: { table: { disable: true } } },
  args: { cover: 'a-cannons', title: 'Cannons', artist: 'Phil Wickham', chip: '비슷한 곡: Blame', hyped: false },
}
export const Default = {}
const speed = { speed: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 }, description: '버스트 빠르기 (1 = 기본)' } }
export const Burst = { args: { hyped: true, burst: true, speed: 1 }, argTypes: speed, name: '하입 버스트' }
export const Hyped = { args: { hyped: true, cover: 'a-loveya', title: 'LOVE YA!', artist: '혁오', chip: '록' } }
