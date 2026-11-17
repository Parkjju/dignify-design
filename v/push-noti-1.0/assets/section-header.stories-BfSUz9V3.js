import{S as n}from"./section-header-Poff_ct_.js";import{d as o,w as s}from"./_story-BijmNlD_.js";const i='# SectionHeader\n\n> 상태: 구현됨(iOS)\n\n## Variants\n| variant | 모양 | 쓰는 곳 |\n|---|---|---|\n| `title` | `typography.title2` + 오른쪽 링크(`bodyMedium` brand) | 디깅 프로필 "좋아요한 곡 · 편집", "주요 장르" |\n| `label` | `typography.label` `textSecondary` | 새 픽 "좋아요한 곡", "미리보기", "3곡" |\n| `date` | `typography.label` `textTertiary` | 날짜 묶음(CrateDayRow 안), 새 픽 날짜 12 semibold |\n| `caption` | 11 semibold `textTertiary` | 최근 검색, 좋아요한 유저 |\n\n좌우 여백 20.\n',p={title:"Components/Content/SectionHeader",tags:["autodocs"],parameters:o(i),decorators:s(393),render:n},a={args:{action:"편집"}},e={args:{variant:"label",title:"좋아요한 곡"}},r={args:{variant:"date",title:"2026년 10월 7일"}},t={args:{variant:"caption",title:"최근 검색"}},l=["Title","Label","Date","Caption"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    action: '편집'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'label',
    title: '좋아요한 곡'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'date',
    title: '2026년 10월 7일'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    title: '최근 검색'
  }
}`,...t.parameters?.docs?.source}}};export{t as Caption,r as Date,e as Label,a as Title,l as __namedExportsOrder,p as default};
