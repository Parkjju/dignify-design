import { BrandMark } from './brand-mark.js'
import spec from './brand-mark.md?raw'
import { docs } from '../_story.js'

export default {
  title: 'Components/BrandMark', tags: ['autodocs'], parameters: docs(spec),
  render: BrandMark, argTypes: { size: { control: { type: 'range', min: 22, max: 128, step: 2 } } }, args: { size: 64 },
}
export const Default = {}
export const Popup = { args: { size: 44 } }
export const Footer = { args: { size: 22 } }
