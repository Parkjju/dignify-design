import '../generated/web/ds.css'   // 토큰 + 애셋 + 공통 + 컴포넌트 CSS (scripts/build.mjs 산출물)
import './preview.css'

export default {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    options: { storySort: { order: ['소개', '가이드', 'Foundations', 'Components', ['Inputs', 'Navigation', 'Content', 'Overlays'], 'Screens', ['1. 피드', '2. Picks', '3. 마이', '4. 온보딩', '5. 공유 카드', '6. 광고성 알림'], 'Flows'] } },
  },
}
