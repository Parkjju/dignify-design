import { ArtistRequestForm } from './artist-request-form.js'
import spec from './artist-request-form.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Overlays/ArtistRequestForm', tags: ['autodocs'], parameters: docs(spec), render: ArtistRequestForm }
export const Typing = { args: {}, decorators: [s => `<div style="width:377px">${s()}</div>`] }
export const Sent = { args: { sent: true }, decorators: [s => `<div style="width:377px">${s()}</div>`] }
