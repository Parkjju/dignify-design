// 4. 온보딩 — 기준: Features/Onboarding/OnboardingFlowView.swift · SeedPoolPickerView.swift · App/AppRootView.swift(LaunchLoadingView) · MainTabView(GuestSignInPromptView)
// 튜토리얼 카드(TutorialView)는 feed_coachmark 1.0에서 삭제 — 피드 코치마크(feed-coach)가 대신한다
import { Device } from './device.js'
import { Button } from '../components/button/button.js'
import { SearchBar } from '../components/search-bar/search-bar.js'
import { SeedGrid } from '../components/seed-tile/seed-tile.js'

const skip = '<span style="position:absolute;top:54px;right:20px;height:44px;display:flex;align-items:center;font:var(--typography-body-medium);color:var(--color-text-tertiary)">건너뛰기</span>'

// gate: 게스트가 Picks·마이를 눌러 뜬 로그인 시트 — 둘러보기 버튼 없이 취소로 닫힌다
export function SignInScreen({ error = '', gate = false } = {}) {
  return Device({ time: '1:06', battery: 36, children: `${gate ? '<span style="position:absolute;top:54px;left:20px;height:44px;display:flex;align-items:center;font:var(--typography-body);color:var(--color-text-secondary)">취소</span>' : ''}<div style="position:absolute;inset:118px 24px 40px;display:flex;flex-direction:column">
    <div style="margin:auto 0;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
      <span style="width:64px;height:64px;border-radius:16px;background:var(--color-brand-light);display:grid;place-items:center"><i class="brand-mark" style="width:41px;height:41px"></i></span>
      <h1 style="font-size:32px;font-weight:700;letter-spacing:-.96px;color:var(--color-brand)">Dignify</h1>
      <p style="font-size:14px;color:var(--color-text-tertiary)">인디 음악을 발굴하고 당신만의 취향을 쌓아가세요.</p></div>
    <div style="display:flex;flex-direction:column;gap:12px">${Button({ variant: 'apple', label: 'Apple로 계속하기' })}
      ${error ? `<p style="font:var(--typography-caption);color:var(--color-destructive);text-align:center">${error}</p>` : ''}
      ${gate ? '' : '<div style="min-height:44px;display:grid;place-items:center;font:var(--typography-body-medium);color:var(--color-text-secondary)">로그인 없이 둘러보기</div>'}
      <p style="font:var(--typography-caption);color:var(--color-text-tertiary);text-align:center;line-height:1.5">계속 진행하면 <span style="color:var(--color-brand)">이용약관</span> 및 <span style="color:var(--color-brand)">개인정보처리방침</span>에 동의하는 것으로 간주됩니다.</p></div></div>` })
}

// 둘러보기 후 로그인 직후: 곡 선택 후보를 받는 동안. 앱 실행 로딩(LaunchLoadingView)과 같은 화면
export function LoadingScreen() {
  return Device({ time: '1:06', battery: 36, children: `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px">
    <i class="brand-mark" style="width:56px;height:56px"></i><h1 style="font:var(--typography-title)">Dignify</h1></div>` })
}

// 게스트가 Picks·마이 탭을 눌렀을 때. 로그인 → SignInScreen({ gate: true })
export function GuestPromptScreen({ tab = 'my' } = {}) {
  return Device({ tab, time: '1:06', battery: 36, children: `<div style="position:absolute;inset:0 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center">
    <i class="brand-mark" style="width:56px;height:56px"></i>
    <h1 style="font:var(--typography-title2)">나만의 취향 만들기</h1>
    <p style="font:var(--typography-body);color:var(--color-text-secondary);line-height:1.6">로그인하면 트랙에 하입하고, 피드를 취향에 맞추고, 담은 곡을 모아볼 수 있어요.</p>
    <div style="align-self:stretch;margin-top:8px">${Button({ label: '로그인' })}</div></div>` })
}

export function SeedOnboardingScreen({ tiles = [], search = '' } = {}) {
  return Device({ time: '1:06', battery: 36, children: `${skip}
    <div style="position:absolute;top:98px;left:24px;right:24px;display:flex;flex-direction:column;gap:6px">
      <h1 style="font:var(--typography-title1)">어떤 소리가 끌려요?</h1><p style="font:var(--typography-body);color:var(--color-text-secondary)">눌러서 들어보고 3곡까지 골라주세요.</p>
      <small style="font:var(--typography-caption);color:var(--color-text-tertiary)">이제 하입한 곡을 기준으로 피드가 만들어져요.</small></div>
    <div style="position:absolute;top:204px;left:24px;right:24px">${SearchBar({ text: search })}</div>
    <div style="position:absolute;top:258px;left:24px;right:24px;bottom:120px;overflow:hidden">${SeedGrid({ items: tiles })}</div>
    <div style="position:absolute;left:0;right:0;bottom:0;padding:12px 24px 34px;background:var(--color-background)">${Button({ label: '디깅 시작', disabled: !tiles.some(t => t.number) })}</div>` })
}
