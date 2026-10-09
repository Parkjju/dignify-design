import { Shimmer } from './shimmer.js'
import spec from './shimmer.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/Shimmer', tags: ['autodocs'], parameters: docs(spec), decorators: onDark('#000'),
  render: Shimmer, args: { width: 200, height: 200, radius: 24 },
}
export const Artwork = {}
