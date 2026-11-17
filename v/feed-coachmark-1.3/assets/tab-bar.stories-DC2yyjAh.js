import{T as s}from"./tab-bar-BI7PIY6z.js";import{d as o,o as d}from"./_story-BijmNlD_.js";const c="# TabBar\n\n> 상태: 구현됨(iOS — 시스템 탭바 · Android — 자체 구현)\n\n## 언제 쓰나\n메인 3탭(Feed · Picks · My). 화면 아래에 떠 있는 캡슐. 시트·풀스크린(픽 재생)에서는 안 보인다.\n\n## Anatomy\n```\n   ╭───────────────────────────────╮\n   │ (⌂ Feed)    ▣ Picks    ◉ My  │   272 × 62, 아래 21\n   ╰───────────────────────────────╯\n     └ 선택 칸: 캡슐 지면 + tint\n```\n\n## Variants\n| 지면 | 탭바 지면 | 아이콘·라벨 | 선택 칸 |\n|---|---|---|---|\n| 라이트 (마이 등) | 흰 유리 78% + 그림자 | `#1C1C1E` | 회색 16% 지면 + `color.brand` |\n| 피드(미디어) | 회색 유리 62% | `#1C1C1E` | 검정 14% 지면 + `color.brand` |\n| Picks(다크) | 짙은 유리 55% | white | 흰 12% 지면 + `color.pickAccent` |\n\n## 수치\n| 항목 | 값 |\n|---|---|\n| 아이콘 | SF Symbol 25 — `house.fill` · `square.stack.fill` · `person.crop.circle.fill` |\n| 라벨 | 10 semibold. **iOS는 번역하지 않는다**(한국어 기기에서도 Feed·Picks·My) |\n| tint | `color.brand` (`MainTabView` `.tint(DSColor.brand)`) |\n\n## 플랫폼\n| | 이름 | 위치 |\n|---|---|---|\n| iOS | `MainTabView` + `AppTab` | `App/` |\n| Android | 하단 내비게이션 | 피드·픽·마이 라벨 한국어 |\n\n## 시안\n`screens/_shared.css` `.tabbar` · `.tabbar.media` · `.tabbar.dark`\n",p={title:"Components/Navigation/TabBar",tags:["autodocs"],parameters:o(c),render:s,argTypes:{surface:{control:"inline-radio",options:["light","media","dark"]},selected:{control:"inline-radio",options:["feed","picks","my"]}},args:{surface:"light",selected:"my"}},e={decorators:[n=>`<div style="background:#fff;padding:24px">${n()}</div>`]},r={args:{surface:"media",selected:"feed"},decorators:[n=>`<div style="padding:24px;background:linear-gradient(#8a6b3e,#111)">${n()}</div>`]},a={args:{surface:"dark",selected:"picks"},decorators:d()},l=["Light","OnFeed","OnPicks"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'{\n  decorators: [s => `<div style="background:#fff;padding:24px">${s()}</div>`]\n}',...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    surface: 'media',
    selected: 'feed'
  },
  decorators: [s => \`<div style="padding:24px;background:linear-gradient(#8a6b3e,#111)">\${s()}</div>\`]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    surface: 'dark',
    selected: 'picks'
  },
  decorators: onDark()
}`,...a.parameters?.docs?.source}}};export{e as Light,r as OnFeed,a as OnPicks,l as __namedExportsOrder,p as default};
