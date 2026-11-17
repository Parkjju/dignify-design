import{T as t}from"./text-field-DUcLJXXO.js";import{d as s,w as o}from"./_story-BijmNlD_.js";const n="# TextField\n\n> 상태: 구현됨(iOS)\n\n## 언제 쓰나\n한 줄 입력 — 새 픽 제목, 아티스트 요청. 검색은 `SearchBar`를 쓴다.\n\n## 수치\n| 항목 | 새 픽 제목 | 아티스트 요청 |\n|---|---|---|\n| 높이 | 48 | 46 |\n| 좌우 여백 | `spacing.x4` | `spacing.x3-5` |\n| 라운드 | `radius.medium` | `radius.small` |\n| 지면 | `color.surface` | `color.surface` |\n| 글꼴 | 15 | `typography.body` |\n| 커서 | `color.brand` | `color.brand` |\n\n라벨 행(선택): 왼쪽 `typography.label` `textSecondary`, 오른쪽 글자 수 12 `textTertiary`(한도 도달 시 `destructive`).\n",d={title:"Components/Inputs/TextField",tags:["autodocs"],parameters:s(n),decorators:o(393),render:t},e={args:{label:"제목",count:"0 / 30",placeholder:"wave to earth 외 2명"}},r={args:{label:"제목",count:"9 / 30",value:"새벽 드라이브용",focused:!0}},a={args:{compact:!0,value:"검정치마",focused:!0}},l=["Title","Typing","ArtistRequest"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: '제목',
    count: '0 / 30',
    placeholder: 'wave to earth 외 2명'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: '제목',
    count: '9 / 30',
    value: '새벽 드라이브용',
    focused: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    value: '검정치마',
    focused: true
  }
}`,...a.parameters?.docs?.source}}};export{a as ArtistRequest,e as Title,r as Typing,l as __namedExportsOrder,d as default};
