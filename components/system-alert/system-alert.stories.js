import { SystemAlert } from './system-alert.js'
import spec from './system-alert.md?raw'
import { docs } from '../_story.js'

export default {
  title: 'Components/Overlays/SystemAlert', tags: ['autodocs'], parameters: docs(spec), render: SystemAlert,
  decorators: [story => `<div style="position:relative;width:393px;height:400px;background:#888">${story()}</div>`],
}
export const NotificationPermission = {}
