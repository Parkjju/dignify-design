import '../generated/web/ds.css'   // 토큰 + 애셋 + 공통 + 컴포넌트 CSS (scripts/build.mjs 산출물)
import './preview.css'
import { setMeasure } from '../tools/measure.js'

export default {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    options: { storySort: { order: ['소개', '가이드', 'Foundations', 'Components', ['Inputs', 'Navigation', 'Content', 'Overlays'], 'Screens', ['1. 피드', '2. Picks', '3. 마이', '4. 온보딩', '5. 공유 카드', '6. 광고성 알림'], 'Flows'] } },
  },
  // 툴바 토글 두 개(tools/measure.js) — 치수: 호버 = 크기·간격(pt), 클릭 = 고정 / 가이드: 좌우 16·20, safe area, 4pt 그리드
  globalTypes: {
    measure: { description: '치수 — 호버 = 크기·부모까지 거리, 클릭 = 고정 후 다른 요소까지 거리, Esc = 풀기 (켜 있는 동안 화면 조작은 막힘)',
      toolbar: { title: '치수', icon: 'ruler', items: [{ value: 'off', title: '치수' }, { value: 'on', title: '치수 표시 중' }], dynamicTitle: true } },
    guide: { description: '레이아웃 가이드 — 좌우 16·20 선, safe area(위 54·아래 34), 4pt 그리드',
      toolbar: { title: '가이드', icon: 'grid', items: [{ value: 'off', title: '가이드' }, { value: 'on', title: '가이드 표시 중' }], dynamicTitle: true } },
  },
  initialGlobals: { measure: 'off', guide: 'off' },
  decorators: [(story, ctx) => {
    const out = story()
    setTimeout(() => setMeasure(document, { on: ctx.globals.measure === 'on', guide: ctx.globals.guide === 'on' }))
    return out
  }],
}
