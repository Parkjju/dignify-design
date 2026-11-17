import{S as n}from"./settings-row-BQgDJDqd.js";import{d as s,w as o}from"./_story-BijmNlD_.js";const c="# SettingsRow\n\n> 상태: 구현됨(iOS)\n\n## 언제 쓰나\n마이페이지·마이 › 알림 목록. 그룹 사이는 구분선(좌우 20, 상하 12 — 푸시알림 기획 2026-11-12, 이전 8).\n\n## Variants\n| variant | 구성 | 높이 |\n|---|---|---|\n| link | 15 regular + `chevron.right` 13 semibold `color.border` | 50 (이전 48, 푸시알림 기획) |\n| destructive | 15 `color.destructive`, 화살표 없음(계정 삭제) | 50 |\n| value | 15 + 오른쪽 상태 글자 15 `textTertiary` + 화살표(마이 › 알림 「기기 알림 권한 · 켜짐/꺼짐/설정 전」) | 50 |\n| toggle | 15 + 스위치(tint brand), 아래 설명 `typography.caption` `textTertiary` | 상하 12 |\n| card | 아이콘 40(brand, radius 10) + 제목 `bodyMedium` + 부제 `caption` + 화살표, 지면 `surface` radius 14 | 안쪽 12 |\n\n## 같은 계열\n- 상세 목록(아티스트 요청·차단한 유저)은 시스템 `List(.plain)` — 구분선이 행 아래로 깔리고, 밀어서 삭제·차단 해제.\n",l={title:"Components/Content/SettingsRow",tags:["autodocs"],parameters:s(c),decorators:o(393),render:n,argTypes:{variant:{control:"inline-radio",options:["link","destructive","toggle","card","value"]}},args:{variant:"link",label:"추천 기준 곡",caption:"",on:!0}},a={},r={args:{variant:"destructive",label:"계정 삭제"}},e={args:{variant:"toggle",label:"좋아요한 곡 따라가기",caption:"켜면 좋아요한 곡과 소리가 비슷한 곡이 나오고, 끄면 조건 없이 아무 곡이나 나와요."}},t={args:{variant:"card",label:"디깅 프로필",caption:"🔁 충성파"}},u={args:{variant:"value",label:"기기 알림 권한",value:"켜짐"}},d=["Link","Destructive","Toggle","Card","Value"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    label: '계정 삭제'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'value',
    label: '기기 알림 권한',
    value: '켜짐'
  }
}`,...u.parameters?.docs?.source}}};export{t as Card,r as Destructive,a as Link,e as Toggle,u as Value,d as __namedExportsOrder,l as default};
