import{C as o,a as i}from"./crate-cell-ChYFYZbk.js";import{d as l,C as d}from"./_story-BijmNlD_.js";const c=`# CrateCell (좋아요한 곡 셀)

> 상태: 구현됨(iOS)

## 언제 쓰나
좋아요한 곡을 날짜별로 가로로 늘어놓는 곳 — 디깅 프로필, 좋아요 기록, 추천 기준 곡.

## Anatomy
\`\`\`
2026년 10월 7일                 ← 13 semibold textTertiary
[72][72][72][72][72]→           ← 가로 스크롤, 간격 12, 좌우 20
곡 제목                          ← 11 medium, 한 줄
아티스트                          ← 10 textTertiary, 한 줄
\`\`\`

## Variants
| 모드 | 배지(커버 좌상단 -6 걸침) | 탭 |
|---|---|---|
| 기본 | 없음 | 미리듣기, 길게 누르면 상세·제거 메뉴 |
| 편집 | \`minus.circle.fill\` 20, destructive | 확인 후 제거 |
| 선택(추천 기준 곡) | 원 20 — 고름 brand + 체크 11 bold, 안 고름 흰 면 + \`textTertiary\` 1.5 | 선택(최대 3, 넘으면 무반응) |

## 수치
| 항목 | 토큰 |
|---|---|
| 커버 | 72, \`radius.medium\` |
| 날짜 묶음 간격 | \`spacing.x5\` |
| 끝까지 당기면 | "See all" 셀(56×72, brand) → 좋아요 기록 |

## 하지 말 것
- 선택 배지 테두리를 흰색으로 두지 않는다. 커버 밖으로 나간 절반이 밝은 지면에 묻혀 원이 잘려 보인다.
`,s=[{cover:"a-farewell",title:"Farewell to Arms!",artist:"잔나비"},{cover:"a-friends",title:"FRIENDS (feat. Friends)",artist:"shinjihang"},{cover:"a-intro",title:"Introduction to a Man",artist:"윤상"},{cover:"a-seasons",title:"seasons",artist:"wave to earth"},{cover:"a-bulssi",title:"불씨",artist:"컨파인드 화이트"}],p={title:"Components/Content/CrateCell",tags:["autodocs"],parameters:l(c),render:o,argTypes:{mode:{control:"inline-radio",options:["default","edit","select"]},cover:{control:"select",options:d}},args:{...s[0],mode:"default",selected:!1}},e={},t={args:{mode:"edit"}},a={args:{mode:"select",selected:!0}},r={render:({mode:n})=>`<div style="width:393px">${i({date:"2026년 10월 7일",items:s,mode:n,selected:["a-seasons"]})}</div>`,argTypes:{cover:{table:{disable:!0}},title:{table:{disable:!0}},artist:{table:{disable:!0}},selected:{table:{disable:!0}}}},b=["Default","Edit","SelectOn","DayRow"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'edit'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'select',
    selected: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    mode
  }) => \`<div style="width:393px">\${CrateDayRow({
    date: '2026년 10월 7일',
    items,
    mode,
    selected: ['a-seasons']
  })}</div>\`,
  argTypes: {
    cover: {
      table: {
        disable: true
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    artist: {
      table: {
        disable: true
      }
    },
    selected: {
      table: {
        disable: true
      }
    }
  }
}`,...r.parameters?.docs?.source}}};export{r as DayRow,e as Default,t as Edit,a as SelectOn,b as __namedExportsOrder,p as default};
