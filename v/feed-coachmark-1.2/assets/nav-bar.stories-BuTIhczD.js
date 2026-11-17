import{N as s}from"./nav-bar-BUPyutce.js";import{d as n,w as o}from"./_story-BijmNlD_.js";const c=`# NavBar

> 상태: 구현됨(iOS 시스템 NavigationStack)

## 언제 쓰나
푸시된 화면 상단. 제목은 inline(가운데 \`typography.headline\`). 탭 루트(마이페이지·Picks)는 large title 34 bold.

## Anatomy
\`\`\`
(‹)          디깅 프로필          (편집)
 └ 44 원형 유리 버튼      └ 유리 캡슐 텍스트 버튼(brand)
\`\`\`
- 스크롤하면 콘텐츠가 위로 흐려지며 사라진다(iOS 26 스크롤 엣지 효과).
- 시트 안에서는 왼쪽이 "취소"(텍스트, \`textSecondary\`).
`,p={title:"Components/Navigation/NavBar",tags:["autodocs"],parameters:n(c),decorators:o(393),render:s,argTypes:{rightIcon:{control:"select",options:["","plus","ellipsis"]}},args:{title:"디깅 프로필",back:!0,left:"",right:"",rightIcon:""}},r={},e={args:{title:"좋아요 기록",right:"편집"}},t={args:{title:"새 픽",back:!1,left:"취소"}},a={args:{title:"아티스트 요청",right:"편집",rightIcon:"plus"}},l=["Back","WithAction","InSheet","WithIcon"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: '좋아요 기록',
    right: '편집'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '새 픽',
    back: false,
    left: '취소'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '아티스트 요청',
    right: '편집',
    rightIcon: 'plus'
  }
}`,...a.parameters?.docs?.source}}};export{r as Back,t as InSheet,e as WithAction,a as WithIcon,l as __namedExportsOrder,p as default};
