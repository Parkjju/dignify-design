import { MenuSheet } from './menu-sheet.js'
import spec from './menu-sheet.md?raw'
import { docs, onDark } from '../_story.js'

export default {
  title: 'Components/MenuSheet', tags: ['autodocs'], parameters: docs(spec), decorators: onDark(),
  render: MenuSheet,
}
export const OthersPick = {}
export const MyPick = { args: { rows: [['제목 수정', false], ['삭제', true]] } }
export const ReportReasons = { args: { rows: [['부적절한 닉네임', false], ['부적절한 콘텐츠', false], ['기타', false]] } }
