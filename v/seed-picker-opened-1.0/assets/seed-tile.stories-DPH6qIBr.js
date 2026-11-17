import{S as o}from"./seed-tile-MVKHPOZQ.js";import{d as n}from"./_story-BijmNlD_.js";const d=`# SeedTile

> 상태: 구현됨(iOS)

온보딩 "어떤 소리가 끌려요?"의 3열 타일. 커버 정사각 radius 12, 위에 검정 22%(재생 중 45%) + ▶/❚❚ 20. 우상단 44 탭 영역에 원 24 — 안 고름: 검정 35% + 흰 90% 1.5 테두리, 고름: brand + 고른 순서 번호. 고르면 커버에 brand 55%.

제목 11 semibold, 아티스트 10.5 \`textTertiary\`. 열 간격 10, 행 간격 16.

**3곡을 다 고르면(1.3)** 안 고른 타일은 비활성: 커버 흑백 + 바탕색 60% 덮개(연한 회색), 고르기 원이 사라지고 탭해도 안 골라진다. 제목·아티스트는 \`textTertiary\` 60%. 미리듣기(▶)는 그대로 된다 — 바꿀 곡을 들어 보고 트레이(SeedTray)에서 하나를 빼면 다시 풀린다.
`,l={title:"Components/Content/SeedTile",tags:["autodocs"],parameters:n(d),render:o},s={args:{},decorators:[e=>`<div style="width:108px">${e()}</div>`]},r={args:{number:1},decorators:[e=>`<div style="width:108px">${e()}</div>`]},t={args:{disabled:!0,cover:"a-seasons",title:"seasons",artist:"wave to earth"},decorators:[e=>`<div style="width:108px">${e()}</div>`]},a={args:{number:2,playing:!0,cover:"a-billann",title:"Bill Loves Ann",artist:"퍼플웨일"},decorators:[e=>`<div style="width:108px">${e()}</div>`]},p=["Unselected","Selected","Disabled","Playing"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  args: {},\n  decorators: [s => `<div style="width:108px">${s()}</div>`]\n}',...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    number: 1
  },
  decorators: [s => \`<div style="width:108px">\${s()}</div>\`]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    cover: 'a-seasons',
    title: 'seasons',
    artist: 'wave to earth'
  },
  decorators: [s => \`<div style="width:108px">\${s()}</div>\`]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    number: 2,
    playing: true,
    cover: 'a-billann',
    title: 'Bill Loves Ann',
    artist: '퍼플웨일'
  },
  decorators: [s => \`<div style="width:108px">\${s()}</div>\`]
}`,...a.parameters?.docs?.source}}};export{t as Disabled,a as Playing,r as Selected,s as Unselected,p as __namedExportsOrder,l as default};
