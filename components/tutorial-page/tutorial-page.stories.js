import { TutorialPage } from './tutorial-page.js'
import spec from './tutorial-page.md?raw'
import { docs } from '../_story.js'

export default { title: 'Components/Content/TutorialPage', tags: ['autodocs'], parameters: docs(spec), render: TutorialPage }
export const First = { args: {}, argTypes: { page: { control: { type: 'range', min: 0, max: 6 } } }, decorators: [s => `<div style="width:393px">${s()}</div>`] }
