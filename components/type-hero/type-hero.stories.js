import { TypeHero } from './type-hero.js'
import spec from './type-hero.md?raw'
import { docs, width } from '../_story.js'

export default {
  title: 'Components/TypeHero', tags: ['autodocs'], parameters: docs(spec), decorators: width(353),
  render: TypeHero,
  argTypes: { name: { control: 'select', options: ['쉼 없는 큐레이터', '순수주의자', '잡식가', '충성파'] } },
  args: { locked: false, name: '충성파', genre: '록', blurb: '자기 취향을 알고, 거기에 충실해요.' },
}
export const Open = {}
export const Locked = { args: { locked: true } }
