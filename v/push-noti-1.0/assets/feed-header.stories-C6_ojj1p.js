import{F as n}from"./feed-header-vbsY4sZA.js";import{d as t}from"./_story-BijmNlD_.js";import"./pill-on-dark-AFKXiiFh.js";const c=`# FeedHeader

> 상태: 구현됨(iOS — FeedView.searchControls · contextBadge)

피드 위쪽 오버레이. 한 줄(safe+8, 좌우 16): 왼쪽 성향 버튼(\`sparkles\` 따라가는 중 / \`shuffle\` 무작위) + 바로 옆 모드 알약(\`PillOnDark\` mode), 오른쪽 끝 검색 버튼(20 semibold white, 탭 영역 40). 그 아래 가운데 배지(\`PillOnDark\` badge, safe+56): "이번 주 특집 3/5", "@닉네임의 픽 3/12". 검색 결과를 보는 중이면 모드 알약 대신 쿼리 알약(brand).

1.1(2026-10-11) 배치다. 이전: 성향·검색이 오른쪽 위에 나란히, 모드 알약은 그 아래 오른쪽 정렬, 배지는 알약이 있으면 +33.

픽 재생에서는 오른쪽 버튼·모드 알약 없이 왼쪽 위 닫기(44 원, 검정 35%, \`xmark\` 17)만.

푸시알림 기획(2026-11-12): 모드 알약 문구 「좋아요한 곡 따라가는 중」 → 「좋아요 따라가는 중」.
`,i={title:"Components/Content/FeedHeader",tags:["autodocs"],parameters:t(c),render:n},e={args:{}},r={args:{context:"이번 주 특집 3/5"}},a={args:{mode:"random"}},s={args:{query:"실리카겔"}},o={args:{pick:!0,context:"@digger_lover의 픽 3/12"}},p=["Following","WithWeeklySet","Random","SearchResult","PickPlayback"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    context: '이번 주 특집 3/5'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'random'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    query: '실리카겔'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pick: true,
    context: '@digger_lover의 픽 3/12'
  }
}`,...o.parameters?.docs?.source}}};export{e as Following,o as PickPlayback,a as Random,s as SearchResult,r as WithWeeklySet,p as __namedExportsOrder,i as default};
