import { Toast } from './toast.js'
import spec from './toast.md?raw'
import { docs } from '../_story.js'

export default {
  title: 'Components/Overlays/Toast', tags: ['autodocs'], parameters: docs(spec), render: Toast,
  decorators: [story => `<div style="width:393px;padding:24px 0;display:flex;justify-content:center;background:#555">${story()}</div>`],
  argTypes: { kind: { control: 'inline-radio', options: ['on', 'off', 'night-on', 'night-off', 'fail', 'need-consent'] } },
  args: { kind: 'on', date: '2026-11-12' },
}
export const OptIn = {}
export const OptOut = { args: { kind: 'off' } }
export const Failed = { args: { kind: 'fail' } }
export const NeedConsent = { args: { kind: 'need-consent' } }
