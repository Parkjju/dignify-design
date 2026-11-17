import{S as n}from"./settings-row-B05oNaJP.js";import{d as s,w as u}from"./_story-BijmNlD_.js";const o="# SettingsRow\n\n> 상태: 구현됨(iOS)\n\n## 언제 쓰나\n마이페이지 목록. 그룹 사이는 구분선(좌우 20, 상하 8).\n\n## Variants\n| variant | 구성 | 높이 |\n|---|---|---|\n| link | 15 regular + `chevron.right` 13 semibold `color.border` | 48 |\n| destructive | 15 `color.destructive`, 화살표 없음(계정 삭제) | 48 |\n| toggle | 15 + 스위치(tint brand), 아래 설명 `typography.caption` `textTertiary` | 상하 12 |\n| card | 아이콘 40(brand, radius 10) + 제목 `bodyMedium` + 부제 `caption` + 화살표, 지면 `surface` radius 14 | 안쪽 12 |\n\n## 같은 계열\n- 상세 목록(아티스트 요청·차단한 유저)은 시스템 `List(.plain)` — 구분선이 행 아래로 깔리고, 밀어서 삭제·차단 해제.\n",C={title:"Components/Content/SettingsRow",tags:["autodocs"],parameters:s(o),decorators:u(393),render:n,argTypes:{variant:{control:"inline-radio",options:["link","destructive","toggle","card"]}},args:{variant:"link",label:"추천 기준 곡",caption:"",on:!0}},r={},a={args:{variant:"destructive",label:"계정 삭제"}},e={args:{variant:"toggle",label:"좋아요한 곡 따라가기",caption:"켜면 좋아요한 곡과 소리가 비슷한 곡이 나오고, 끄면 조건 없이 아무 곡이나 나와요."}},t={args:{variant:"card",label:"디깅 프로필",caption:"🔁 충성파"}},d=["Link","Destructive","Toggle","Card"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    label: '계정 삭제'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'toggle',
    label: '좋아요한 곡 따라가기',
    caption: '켜면 좋아요한 곡과 소리가 비슷한 곡이 나오고, 끄면 조건 없이 아무 곡이나 나와요.'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    label: '디깅 프로필',
    caption: '🔁 충성파'
  }
}`,...t.parameters?.docs?.source}}};export{t as Card,a as Destructive,r as Link,e as Toggle,d as __namedExportsOrder,C as default};
