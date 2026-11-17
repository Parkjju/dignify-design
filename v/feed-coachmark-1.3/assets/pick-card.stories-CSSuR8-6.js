import{P as o}from"./pick-card-C10KLQzv.js";import{o as t,d as c,C as i}from"./_story-BijmNlD_.js";const l=`# PickCard

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
Picks 탭 목록, 내가 만든 픽 목록, 새 픽 미리보기. 지면이 라이트여도 카드는 항상 다크다.

## Anatomy
\`\`\`
┌ pickSurface, radius.large, 안쪽 14 ─────────────┐
│ @nickname ✓ · 12분 전                    ···   │  15 semibold / 13 white 45%
│ 픽 제목                                         │  17 bold
│ ┌ 220, radius 18 ───────────────────────────┐ │
│ │ 첫 커버 blur 28 + scrim                    │ │
│ │     [+9][  ][  ]  커버 150 ×3, 40씩, 0→4°   │ │
│ └───────────────────────────────────────────┘ │
│ (🔥 3)  ♪ 12곡  ▶ 재생 27회              (⇪)   │
└────────────────────────────────────────────────┘
\`\`\`

## 수치
| 항목 | 토큰 / 값 |
|---|---|
| 카드 간격 | \`spacing.x3-5\`, 좌우 \`spacing.x4\` |
| 인증 배지 | \`checkmark.seal.fill\` 13, \`color.pickAccent\` |
| 남은 곡 수 | 앞 커버 위 검정 50% + 26 bold |
| 반응 버튼 | 높이 36, \`color.fillOnDarkSubtle\`, 🔥 15 + 숫자 14 semibold(0이면 숫자 없음). 내가 눌렀으면 brand 18% + brand 숫자 |
| 곡 수 · 재생 횟수 | 13 medium, \`color.textOnDarkTertiary\`. 재생 횟수는 5회 이상일 때만, 표시 전용(알약 없음) |
| 공유 | 원 36, \`color.fillOnDarkSubtle\` |

## 동작
- 미디어 탭 = 픽 재생(줌 전환 → \`screens/pick-play.html\`).
- \`···\` = 메뉴 시트(\`components/menu-sheet/menu-sheet.md\`).
- 내 픽엔 반응을 누를 수 없다(표시만).

## 플랫폼
| | 이름 |
|---|---|
| iOS | \`PickCard\` · \`PickThumbnailStack\` (\`Features/Picks/PickListView.swift\`) |
`,m={title:"Components/Content/PickCard",tags:["autodocs"],parameters:c(l),decorators:[...t(),s=>`<div style="width:361px">${s()}</div>`],render:o,argTypes:{covers:{control:"check",options:i}},args:{nickname:"digger_lover",verified:!0,time:"12분 전",title:"모두가 사랑하는 밴드",covers:["a-loveya","a-ohio","a-tomboy"],trackCount:12,reactions:3,reacted:!0,mine:!1,plays:0}},e={},a={args:{verified:!1,reactions:0,reacted:!1,nickname:"wavelover",title:"국내 브릿팝 루키 🔥",covers:["a-bigvoid","a-billann","a-truth"],trackCount:10}},r={args:{mine:!0,reacted:!1,plays:27}},n={args:{covers:["a-seasons"],trackCount:1,reactions:0,reacted:!1,title:"seasons 한 곡"}},p=["Default","NoReactions","Mine","OneCover"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    verified: false,
    reactions: 0,
    reacted: false,
    nickname: 'wavelover',
    title: '국내 브릿팝 루키 🔥',
    covers: ['a-bigvoid', 'a-billann', 'a-truth'],
    trackCount: 10
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mine: true,
    reacted: false,
    plays: 27
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    covers: ['a-seasons'],
    trackCount: 1,
    reactions: 0,
    reacted: false,
    title: 'seasons 한 곡'
  }
}`,...n.parameters?.docs?.source}}};export{e as Default,r as Mine,a as NoReactions,n as OneCover,p as __namedExportsOrder,m as default};
