import { ConsentSheet } from './consent-sheet.js'
import spec from './consent-sheet.md?raw'
import { docs } from '../_story.js'

export default {
  title: 'Components/Overlays/ConsentSheet', tags: ['autodocs'], parameters: docs(spec), render: ConsentSheet,
  decorators: [story => `<div style="width:393px;border-radius:38px 38px 0 0;background:var(--color-background);overflow:hidden">${story()}</div>`],
  args: { artist: '혁오', cover: 'a-ohio', legal: true },
}
export const Default = {}
export const FigmaAsIs = { name: 'Figma 그대로(동의 문구 없음)', args: { legal: false } }
