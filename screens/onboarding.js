// 4. 온보딩 — 기준: Features/Onboarding/OnboardingFlowView.swift · SeedPoolPickerView.swift · App/AppRootView.swift(LaunchLoadingView) · MainTabView(GuestSignInPromptView)
// 튜토리얼 카드(TutorialView)는 feed_coachmark 1.0에서 삭제 — 피드 코치마크(feed-coach)가 대신한다
import { Device } from './device.js'
import { Button } from '../components/button/button.js'
import { SearchBar } from '../components/search-bar/search-bar.js'
import { SeedGrid } from '../components/seed-tile/seed-tile.js'
import { SeedTray } from '../components/seed-tray/seed-tray.js'
import { FeedBuilding } from '../components/feed-building/feed-building.js'

// ob-skip·ob-cancel·ob-guest 클래스는 온보딩 프로토타입이 탭을 받는 자리(screens/onboarding.stories.js)
const skip = '<span class="ob-skip" style="position:absolute;top:54px;right:20px;height:44px;display:flex;align-items:center;font:var(--typography-body-medium);color:var(--color-text-tertiary)">건너뛰기</span>'

// gate: 게스트가 Picks·마이를 눌러 뜬 로그인 시트 — 둘러보기 버튼 없이 취소로 닫힌다
export function SignInScreen({ error = '', gate = false } = {}) {
  return Device({ time: '1:06', battery: 36, children: `${gate ? '<span class="ob-cancel" style="position:absolute;top:54px;left:20px;height:44px;display:flex;align-items:center;font:var(--typography-body);color:var(--color-text-secondary)">취소</span>' : ''}<div style="position:absolute;inset:118px 24px 40px;display:flex;flex-direction:column">
    <div style="margin:auto 0;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
      <span style="width:64px;height:64px;border-radius:16px;background:var(--color-brand-light);display:grid;place-items:center"><i class="brand-mark" style="width:41px;height:41px"></i></span>
      <h1 style="font-size:32px;font-weight:700;letter-spacing:-.96px;color:var(--color-brand)">Dignify</h1>
      <p style="font-size:14px;color:var(--color-text-tertiary)">인디 음악을 발굴하고, 취향을 쌓아가요.</p></div>
    <div style="display:flex;flex-direction:column;gap:12px">${Button({ variant: 'apple', label: 'Apple로 계속하기' })}
      ${error ? `<p style="font:var(--typography-caption);color:var(--color-destructive);text-align:center">${error}</p>` : ''}
      ${gate ? '' : '<div class="ob-guest" style="min-height:44px;display:grid;place-items:center;font:var(--typography-body-medium);color:var(--color-text-secondary)">로그인 없이 둘러보기</div>'}
      <p style="font:var(--typography-caption);color:var(--color-text-tertiary);text-align:center;line-height:1.5">계속 진행하면 <span style="color:var(--color-brand)">이용약관</span> 및 <span style="color:var(--color-brand)">개인정보처리방침</span>에 동의하는 것으로 간주됩니다.</p></div></div>` })
}

// 둘러보기 후 로그인 직후: 곡 선택 후보를 받는 동안. 로고 + 원형 인디케이터(iOS ProgressView) — 1.1에서 인디케이터 추가
export function LoadingScreen() {
  return Device({ time: '1:06', battery: 36, children: `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px">
    <i class="brand-mark" style="width:56px;height:56px"></i><h1 style="font:var(--typography-title)">Dignify</h1>
    <span role="progressbar" aria-label="불러오는 중" style="margin-top:12px;width:20px;height:20px;border-radius:50%;border:2px solid var(--color-border-light);border-top-color:var(--color-text-tertiary);animation:ds-spin .8s linear infinite"></span></div>` })
}

// 추천 기준 곡을 고른 직후 첫 피드를 받는 동안 — 최소 2초, 늦으면 응답까지
export function FeedBuildingScreen({ covers = [] } = {}) {
  return Device({ time: '1:06', battery: 36, children: `<div style="position:absolute;inset:0;display:grid;place-items:center;padding:0 24px">${FeedBuilding({ covers })}</div>` })
}

// 게스트가 Picks·마이 탭을 눌렀을 때. 로그인 → SignInScreen({ gate: true })
export function GuestPromptScreen({ tab = 'my' } = {}) {
  return Device({ tab, time: '1:06', battery: 36, children: `<div style="position:absolute;inset:0 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center">
    <i class="brand-mark" style="width:56px;height:56px"></i>
    <h1 style="font:var(--typography-title2)">나만의 취향 만들기</h1>
    <p style="font:var(--typography-body);color:var(--color-text-secondary);line-height:1.6">로그인하면 마음에 드는 노래를 찜하고,<br>내 취향에 맞는 피드를 만들 수 있어요.</p>
    <div style="align-self:stretch;margin-top:8px">${Button({ label: '내 취향 찾으러 가기' })}</div></div>` })
}

// titleFont: 제목 타이포 토큰 · titleBreak: "노래를" 뒤에서 일부러 줄바꿈 — 1.1 확정: title1 + 줄바꿈
// 제목 줄 수가 바뀌어도 검색창·그리드가 따라 내려오게 세로로 쌓는다(앱 VStack과 같음)
export function SeedOnboardingScreen({ tiles = [], search = '', titleFont = 'title1', titleBreak = true } = {}) {
  return Device({ time: '1:06', battery: 36, children: `${skip}
    <div style="position:absolute;top:98px;left:24px;right:24px;bottom:184px;display:flex;flex-direction:column">
      <div style="display:flex;flex-direction:column;gap:6px">
        <h1 style="font:var(--typography-${titleFont})">마음에 드는 노래를${titleBreak ? '<br>' : ' '}3곡까지 골라주세요.</h1><p style="font:var(--typography-body);color:var(--color-text-secondary)">선택한 곡을 기준으로 추천해 드릴게요.</p></div>
      <div style="margin-top:12px">${SearchBar({ text: search })}</div>
      <div style="margin-top:14px;flex:1;min-height:0;overflow:hidden">${SeedGrid({ items: tiles })}</div>
    </div>
    <div style="position:absolute;left:0;right:0;bottom:0;padding:12px 24px 34px;background:var(--color-background);display:flex;flex-direction:column;gap:12px;box-shadow:0 -1px 0 var(--color-divider)">${SeedTray({ items: tiles.filter(t => t.number) })}${Button({ label: '디깅 시작', disabled: !tiles.some(t => t.number) })}</div>` })
}
