import{T as a}from"./track-row-CL319CUY.js";import{d as s,C as t,w as o}from"./_story-BijmNlD_.js";const c=`# TrackRow (선택형)

> 상태: 구현됨(iOS)

## 언제 쓰나
곡을 들어 보며 여러 개 고르는 목록 — 새 픽 곡 고르기, 새 픽 제목 단계의 곡 목록.

## Anatomy
\`\`\`
[52 커버 ▶]  곡 제목                         ( 1 )
             아티스트                         └ 44 탭 영역, 원 24
\`\`\`

## 수치
| 항목 | 값 |
|---|---|
| 커버 | 52, radius 10, 가운데 ▶/❚❚ 15 white 85%(재생 중 100%) |
| 제목 / 아티스트 | 14 medium \`textPrimary\` / 12 \`textTertiary\`, 간격 2 |
| 행 간격 | \`spacing.x1-5\`, 상하 4 |
| 선택 원 | 24. 안 고름 = \`textTertiary\` 1.5 테두리, 고름 = \`brand\` 채움 + 고른 순서 번호 12 bold |

## 동작
- 행 탭 = 미리듣기, 원 탭 = 선택. **재생 표시를 늘 띄운다** — 재생 중일 때만 띄우면 눌러서 들어보는 자리라는 걸 모른다.

## 같은 계열
- 3열 타일(온보딩 곡 고르기): 원이 커버 우상단, 검정 35% 면 + 흰 90% 테두리. 고르면 커버에 brand 55%.
- 가로 셀(\`crate-cell.md\`): 선택 배지 20, 커버 좌상단 -6 걸침.
`,u={title:"Components/Content/TrackRow",tags:["autodocs"],parameters:s(c),decorators:o(353),render:a,argTypes:{cover:{control:"select",options:t},number:{control:{type:"number",min:0,max:3}}},args:{cover:"a-seasons",title:"seasons",artist:"wave to earth",number:0,playing:!1}},e={},r={args:{number:1}},n={args:{number:2,playing:!0,cover:"a-bulssi",title:"불씨",artist:"컨파인드 화이트"}},d=["Unselected","Selected","Playing"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    number: 1
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    number: 2,
    playing: true,
    cover: 'a-bulssi',
    title: '불씨',
    artist: '컨파인드 화이트'
  }
}`,...n.parameters?.docs?.source}}};export{n as Playing,r as Selected,e as Unselected,d as __namedExportsOrder,u as default};
