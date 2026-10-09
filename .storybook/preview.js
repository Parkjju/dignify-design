import '../generated/web/ds.css'   // 토큰 + 애셋 + 공통 + 컴포넌트 CSS (scripts/build.mjs 산출물)
import './preview.css'

export default {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    options: { storySort: { order: ['소개', '가이드', 'Foundations', 'Components', ['Inputs', 'Navigation', 'Content', 'Overlays'], 'Screens', 'Flows'] } },
  },
}
