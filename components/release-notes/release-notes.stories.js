import { ReleaseNotes } from './release-notes.js'
import spec from './release-notes.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Overlays/ReleaseNotes', tags: ['autodocs'], parameters: docs(spec), render: ReleaseNotes }
export const Default = { args: {}, decorators: [s => `<div style="width:393px">${s()}</div>`] }
