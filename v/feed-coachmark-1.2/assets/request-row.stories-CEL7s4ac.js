import{R as t}from"./request-row-DPksExhh.js";import{d as a,w as n}from"./_story-BijmNlD_.js";const o="# RequestRow\n\n> 상태: 구현됨(iOS — `List(.plain)` 행)\n\n아티스트 요청 내역. 이름 `bodyMedium` + 상태 배지(`typography.micro`, 좌우 8 상하 3, 캡슐, 글자색 12% 지면): 대기 중 `textSecondary` · 추가됨 `brand` · 취소됨 `destructive`. 취소 사유(`caption` `textSecondary`), 날짜(`caption` `textTertiary`). 밀어서 삭제.\n",d={title:"Components/Content/RequestRow",tags:["autodocs"],parameters:a(o),decorators:n(393),render:t},e={args:{}},s={args:{artist:"쏜애플",status:"pending",date:"2026년 10월 6일"}},r={args:{artist:"임영웅",status:"canceled",reason:"Apple Music에 미리듣기가 없는 아티스트예요.",date:"2026년 9월 28일"}},i=["Added","Pending","Canceled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    artist: '쏜애플',
    status: 'pending',
    date: '2026년 10월 6일'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    artist: '임영웅',
    status: 'canceled',
    reason: 'Apple Music에 미리듣기가 없는 아티스트예요.',
    date: '2026년 9월 28일'
  }
}`,...r.parameters?.docs?.source}}};export{e as Added,r as Canceled,s as Pending,i as __namedExportsOrder,d as default};
