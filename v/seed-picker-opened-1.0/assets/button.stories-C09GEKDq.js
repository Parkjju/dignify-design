import{B as p}from"./button-WsS0bk8m.js";import{d,w as m}from"./_story-BijmNlD_.js";const b='# Button\n\n> 상태: 구현됨(iOS·Android) — Outline·Destructive는 iOS만\n\n변형: `primary` · `small` · `block` · `fab` · `dark` · `outline-block` · `outline` · `destructive` · `apple`\n\n## 언제 쓰나\n- **Primary**: 화면 하단 확정 버튼. 한 화면에 하나. 온보딩·팝업·What\'s New에서 쓴다.\n- **Outline**: 보조 액션(재시도, 더 보기). Primary 옆에 둘 때 위계를 낮추는 용도.\n- **Destructive**: 삭제·차단·로그아웃. 지면 없이 텍스트만 쓴다(확인 다이얼로그 안에서 쓰는 게 기본).\n\n## 화면별 변형\n| variant | 쓰는 곳 | 수치 |\n|---|---|---|\n| `small` | 새 픽 하단 바 "다음" | 높이 40, 좌우 20, `radius.medium`, 14 semibold |\n| `block` | 디깅 프로필 "내 취향 공유" | 상하 15, radius 14, 16 semibold, 아이콘 |\n| `fab` | Picks "새 픽" | 캡슐 48, 좌우 20, 15 semibold, 그림자 brand 35% |\n| `dark` / `outline-block` | 트랙 상세 Apple Music / YouTube Music | 높이 48, `radius.medium`, 14 semibold |\n| `apple` | 로그인 | Sign in with Apple(.continue · .black), 높이 56 |\n\n## Anatomy\n```\nPrimary   ┌────────────────────────────┐  full width, 56\n          │           Label            │\n          └────────────────────────────┘\nOutline       ( Label )                     capsule, 40\nDestructive     Label                       텍스트만\n```\n\n## Variants · States\n| variant | 지면 | 텍스트 | 테두리 | pressed |\n|---|---|---|---|---|\n| primary | `color.brand` | white | — | scale 0.97, opacity 0.9 |\n| primary · disabled | `color.borderLight` | `color.textTertiary` | — | — |\n| primary · busy | `color.brand` | 스피너(white, 20) | — | — |\n| outline | 투명 | `color.textPrimary` | `color.border` 1 | opacity 0.65 |\n| destructive | 투명 | `color.destructive` | — | opacity 0.55 |\n\npressed 애니메이션은 easeOut 0.15s.\n\n## 수치\n| 항목 | primary | outline | destructive |\n|---|---|---|---|\n| 높이 | 56 | 40 | — |\n| 좌우 여백 | — (full width) | `spacing.x5` | — |\n| 라운드 | `radius.medium` | `radius.full` | — |\n| 글꼴 | 16 semibold ※ | `typography.callout` | `typography.body` |\n\n※ iOS는 16 semibold, Android는 `typography.headline`(17 semibold)로 갈라져 있다. 다음 손볼 때 `headline`으로 맞춘다.\n\n## 플랫폼\n| | 이름 | 위치 |\n|---|---|---|\n| iOS | `DSPrimaryButtonStyle` · `DSOutlineButtonStyle` · `DSDestructiveButtonStyle` | `Core/DesignSystem/DSButtonStyle.swift` |\n| Android | `PrimaryButton(label, enabled, busy)` | `core/designsystem/DesignSystem.kt` |\n\n## 하지 말 것\n- Primary를 한 화면에 둘 이상 두지 않는다. 두 번째는 Outline.\n- Material3 `Button`·SwiftUI `.borderedProminent`로 대신하지 않는다. 테마 색이 브랜드와 어긋난다.\n',C={title:"Components/Inputs/Button",tags:["autodocs"],parameters:d(b),decorators:m(345),render:p,argTypes:{variant:{control:"select",options:["primary","small","block","fab","dark","outline-block","outline","destructive","apple"]},icon:{control:"select",options:["","plus","share","music-note","play","search"]}},args:{variant:"primary",label:"확인",icon:"",disabled:!1,busy:!1}},e={},r={args:{disabled:!0,label:"다음"}},a={args:{busy:!0}},s={args:{variant:"small",label:"다음"}},n={args:{variant:"block",label:"내 취향 공유",icon:"share"}},t={args:{variant:"fab",label:"새 픽",icon:"plus"}},o={args:{variant:"dark",label:"Apple Music에서 듣기",icon:"music-note"}},i={args:{variant:"outline-block",label:"YouTube Music에서 찾기",icon:"play"}},l={args:{variant:"outline",label:"아티스트 요청하기"}},u={args:{variant:"destructive",label:"계정 삭제"}},c={args:{variant:"apple",label:"Apple로 계속하기"}},v=["Primary","Disabled","Busy","Small","Block","Fab","AppleMusic","YouTubeMusic","Outline","Destructive","SignInWithApple"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: '다음'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    label: '다음'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'block',
    label: '내 취향 공유',
    icon: 'share'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    label: '새 픽',
    icon: 'plus'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    label: 'Apple Music에서 듣기',
    icon: 'music-note'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline-block',
    label: 'YouTube Music에서 찾기',
    icon: 'play'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: '아티스트 요청하기'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    label: '계정 삭제'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'apple',
    label: 'Apple로 계속하기'
  }
}`,...c.parameters?.docs?.source}}};export{o as AppleMusic,n as Block,a as Busy,u as Destructive,r as Disabled,t as Fab,l as Outline,e as Primary,c as SignInWithApple,s as Small,i as YouTubeMusic,v as __namedExportsOrder,C as default};
