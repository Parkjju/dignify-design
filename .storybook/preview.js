import '../generated/web/ds.css'   // 토큰 + 애셋 + 공통 + 컴포넌트 CSS (scripts/build.mjs 산출물)
import './preview.css'

// 실기기 모드: 휴대폰에서 시안을 화면 가득 본다. URL에 &globals=fullscreen:!true;mockStatus:!false
//   fullscreen — 기기 테두리 없이 화면에 맞춰 확대·축소(393×852 비율 유지, 남는 곳은 검정)
//   mockStatus — 가짜 상태바·다이내믹 아일랜드·홈 인디케이터를 그릴지
const fit = () => document.documentElement.style.setProperty('--fit', Math.min(innerWidth / 393, innerHeight / 852))
addEventListener('resize', fit); fit()

// 흐름(Flows)을 실기기 모드로 열면 한 장씩: 오른쪽 탭 = 다음, 왼쪽 1/4 탭 = 이전
addEventListener('click', e => {
  const p = e.target.closest('.sb-proto')
  if (!p) return
  const s = [...p.children], i = s.findIndex(x => x.classList.contains('is-on'))
  s[i].classList.remove('is-on')
  s[(i + (e.clientX < innerWidth / 4 ? -1 : 1) + s.length) % s.length].classList.add('is-on')
})

// 실기기 모드에서 0.8초 길게 누르면 모바일 목록(m.html)으로 돌아간다 — 홈 화면 앱엔 뒤로 가기가 없어서
let hold
addEventListener('pointerdown', e => { if (e.target.closest('.sb-fit')) hold = setTimeout(() => { location.href = 'm.html' }, 800) })
for (const t of ['pointerup', 'pointercancel', 'pointermove']) addEventListener(t, e => { if (t !== 'pointermove' || Math.abs(e.movementY) > 4) clearTimeout(hold) })

export default {
  globalTypes: {
    fullscreen: { description: '실기기 모드(화면 가득)', toolbar: { title: '실기기', icon: 'mobile', items: [{ value: false, title: '기기 프레임' }, { value: true, title: '화면 가득' }], dynamicTitle: true } },
    mockStatus: { description: '가짜 상태바 그리기', toolbar: { title: '상태바', icon: 'eye', items: [{ value: true, title: '가짜 상태바 보이기' }, { value: false, title: '가짜 상태바 숨기기' }], dynamicTitle: true } },
  },
  initialGlobals: { fullscreen: false, mockStatus: true },
  decorators: [(story, { globals }) => {
    const out = story()   // 화면은 HTML 문자열, 직접 해 보기(coach-live)는 DOM 요소
    const device = typeof out === 'string' ? out.includes('class="device') : !!out.querySelector?.('.device')
    const cls = [globals.fullscreen && device && 'sb-fit', !globals.mockStatus && 'no-mock'].filter(Boolean).join(' ')
    if (!cls) return out
    if (typeof out === 'string') return `<div class="${cls}">${out}</div>`
    const wrap = document.createElement('div'); wrap.className = cls; wrap.append(out); return wrap
  }],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    options: { storySort: { order: ['소개', '가이드', 'Foundations', 'Components', ['Inputs', 'Navigation', 'Content', 'Overlays'], 'Screens', 'Flows'] } },
  },
}
