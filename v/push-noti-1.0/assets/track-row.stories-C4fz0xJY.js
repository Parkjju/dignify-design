import{T as t}from"./track-row-B5dkUGq0.js";import{d as o,C as c,w as l}from"./_story-BijmNlD_.js";const i=`# TrackRow (선택형)

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

## 체크형 (마이 추천 기준 곡, seed_picker_opened 1.0)
- \`check\` — 고른 순서가 없는 선택. 고름 = \`brand\` 원 + 흰 체크 12, 안 고름 = 빈 원(위와 같음)
- \`genre\` — 둘째 줄을 「아티스트 · 장르」로
- \`play: false\` — 커버 위 재생 표시를 뺀다. 이 화면은 이미 좋아요한 곡이라 들어 볼 이유가 적고, 행 탭 = 고르기다
- \`disabled\` — 3곡을 다 고른 뒤 안 고른 행: 커버 흑백 40%, 제목·아티스트 \`textTertiary\` 60%, 원 60%. **원은 숨기지 않는다** — 눌러서 「1개를 해제해 주세요」 팝업이 떠야 한다

## 동작
- 행 탭 = 미리듣기, 원 탭 = 선택. **재생 표시를 늘 띄운다** — 재생 중일 때만 띄우면 눌러서 들어보는 자리라는 걸 모른다.

## 같은 계열
- 3열 타일(온보딩 곡 고르기): 원이 커버 우상단, 검정 35% 면 + 흰 90% 테두리. 고르면 커버에 brand 55%.
- 가로 셀(\`crate-cell.md\`): 선택 배지 20, 커버 좌상단 -6 걸침.
`,m={title:"Components/Content/TrackRow",tags:["autodocs"],parameters:o(i),decorators:l(353),render:t,argTypes:{cover:{control:"select",options:c},number:{control:{type:"number",min:0,max:3}}},args:{cover:"a-seasons",title:"seasons",artist:"wave to earth",genre:"",number:0,playing:!1,check:!1,play:!0,disabled:!1}},e={},r={args:{number:1}},a={args:{number:2,playing:!0,cover:"a-bulssi",title:"불씨",artist:"컨파인드 화이트"}},n={args:{check:!0,play:!1,number:1,cover:"a-ohio",title:"Ohio",artist:"혁오",genre:"록"}},s={args:{check:!0,play:!1,disabled:!0,cover:"a-farewell",title:"Farewell to Arms!",artist:"잔나비",genre:"록"}},p=["Unselected","Selected","Playing","Checked","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    number: 1
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    number: 2,
    playing: true,
    cover: 'a-bulssi',
    title: '불씨',
    artist: '컨파인드 화이트'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    check: true,
    play: false,
    number: 1,
    cover: 'a-ohio',
    title: 'Ohio',
    artist: '혁오',
    genre: '록'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    check: true,
    play: false,
    disabled: true,
    cover: 'a-farewell',
    title: 'Farewell to Arms!',
    artist: '잔나비',
    genre: '록'
  }
}`,...s.parameters?.docs?.source}}};export{n as Checked,s as Disabled,a as Playing,r as Selected,e as Unselected,p as __namedExportsOrder,m as default};
