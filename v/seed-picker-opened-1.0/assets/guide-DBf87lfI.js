import{u as r,j as n,M as i}from"./blocks-DRRARvq-.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CSyDDRqV.js";function l(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"가이드/시안 수정하기"}),`
`,n.jsx(s.h1,{id:"시안-수정하기",children:"시안 수정하기"}),`
`,n.jsxs(s.p,{children:["이 사이트는 세 층이 서로 연결돼 있다. ",n.jsx(s.strong,{children:"토큰 → 컴포넌트 → 화면 → 흐름."})," 아래 층을 고치면 위 층이 전부 따라 바뀐다."]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Foundations"})," — 색·글꼴·여백. 바꾸면 모든 컴포넌트가 바뀐다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Components"})," — 버튼·카드 같은 부품. 바꾸면 그 부품을 쓰는 모든 화면이 바뀐다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Screens"})," — 부품을 조립한 앱 화면. ",n.jsx(s.strong,{children:"흐름마다 프로토타입 하나"}),"(피드 · Picks · 마이 · 온보딩)라서 앱처럼 누르고 넘기며 상태를 본다. Controls는 시작 상태(코치마크부터, 이번 주 특집부터, 좋아요 없음 …)를 정한다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Flows"})," — 화면을 순서대로 놓은 흐름. Controls의 ",n.jsx(s.code,{children:"steps"}),"로 순서를 바꿔 볼 수 있다."]}),`
`]}),`
`,n.jsx(s.h2,{id:"1-바로-바꿔-보기--controls-저장-안-됨",children:"1. 바로 바꿔 보기 — Controls (저장 안 됨)"}),`
`,n.jsxs(s.p,{children:["화면이나 컴포넌트를 열고 아래 ",n.jsx(s.strong,{children:"Controls"})," 탭에서 값을 바꾼다. Screens의 프로토타입은 화면을 직접 눌러서 움직이고, Controls를 바꾸면 처음부터 다시 시작한다."]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["곡(",n.jsx(s.code,{children:"track"}),"): 목록에서 고른다. 제목·문구: 그대로 입력한다."]}),`
`,n.jsxs(s.li,{children:["상태(",n.jsx(s.code,{children:"hyped"}),", ",n.jsx(s.code,{children:"locked"}),", ",n.jsx(s.code,{children:"editing"}),", ",n.jsx(s.code,{children:"sheet"})," …): 켜고 끈다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"scroll"}),": 긴 화면의 아래쪽을 본다."]}),`
`,n.jsxs(s.li,{children:["목록(",n.jsx(s.code,{children:"picks"}),", ",n.jsx(s.code,{children:"crateDays"}),", ",n.jsx(s.code,{children:"steps"})," …): JSON을 직접 고친다. 항목을 지우거나 복사해서 늘린다."]}),`
`]}),`
`,n.jsx(s.p,{children:"바꾼 값은 저장되지 않는다. 새로고침하면 원래대로 돌아간다. 남기고 싶으면 아래 3번처럼 요청한다."}),`
`,n.jsx(s.h2,{id:"2-흐름-설계--flows",children:"2. 흐름 설계 — Flows"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:["왼쪽 ",n.jsx(s.strong,{children:"Flows"}),"에서 가까운 흐름을 연다(첫 실행, 픽 만들기 …)."]}),`
`,n.jsxs(s.li,{children:["Controls의 ",n.jsx(s.code,{children:"steps"}),"를 고친다. 한 칸은 이렇게 생겼다."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`{ "screen": "feed", "label": "하입", "note": "더블탭 또는 삽 버튼", "args": { "hyped": true } }
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"screen"})," — 화면 id. 쓸 수 있는 id는 Controls의 ",n.jsx(s.code,{children:"steps"})," 설명에 다 있다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"label"}),", ",n.jsx(s.code,{children:"note"})," — 카드 아래 이름과 설명."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"args"})," — 그 칸에서만 바꿀 값. 화면 Controls에 보이는 이름과 같다."]}),`
`]}),`
`,n.jsxs(s.ol,{start:"3",children:[`
`,n.jsx(s.li,{children:"순서를 바꾸려면 칸을 잘라 붙이고, 칸을 늘리려면 복사한다."}),`
`,n.jsxs(s.li,{children:["마음에 들면 ",n.jsx(s.code,{children:"steps"}),` JSON을 통째로 복사해서 Claude에게 넘긴다. "이 흐름을 Flows에 '○○'로 저장해줘."`]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"없는 화면이 필요하면"})," ",n.jsx(s.code,{children:"screen"}),'에 지어낸 id를 넣는다. 빨간 점선 칸으로 표시된다. 그 칸이 곧 "새로 만들 화면" 목록이다.']}),`
`,n.jsx(s.h2,{id:"3-시안-고치기--claude에게-요청",children:"3. 시안 고치기 — Claude에게 요청"}),`
`,n.jsx(s.p,{children:"화면 배치나 흐름을 정했으면 Claude에게 말로 넘긴다. 요청에 이 셋이 들어가면 한 번에 맞는다."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"어디를"})," — 화면 이름 또는 id(",n.jsx(s.code,{children:"digging-profile"}),"), 흐름 이름. 스크린샷에 표시해서 붙여도 된다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"무엇을"})," — 넣기·빼기·순서 바꾸기·문구, 그리고 상태(빈 상태, 로딩, 에러)도 필요한지."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"왜"})," — 한 줄. 판단이 갈릴 때 기준이 된다."]}),`
`]}),`
`,n.jsx(s.p,{children:"예시:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:`"디깅 프로필에서 '주요 아티스트'를 '내가 만든 픽' 아래로 내려줘. 처음 보는 사람이 픽부터 보게 하려고."`}),`
`,n.jsx(s.li,{children:`"Flows '픽 만들기'에 곡 고르기 다음 '미리듣기 화면'을 넣고 싶어. 새 화면이니까 컴포넌트부터 제안해줘."`}),`
`,n.jsx(s.li,{children:`"피드 칩 문구를 '○○를 좋아하면'으로 바꾸는 시안. 앱 문구랑 같이 바뀌어야 해."`}),`
`]}),`
`,n.jsx(s.p,{children:"Claude는 이렇게 처리한다."}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"앱 코드에서 지금 값을 확인한다."}),`
`,n.jsx(s.li,{children:"기존 컴포넌트로 조립한다. 없으면 컴포넌트를 먼저 만든다(명세 · 마크업 · 스타일 · 스토리)."}),`
`,n.jsx(s.li,{children:"렌더해서 확인하고 PR을 올린다."}),`
`,n.jsx(s.li,{children:"머지되면 이 사이트에 자동 반영된다. 링크를 공유해서 리뷰한다."}),`
`]}),`
`,n.jsx(s.h2,{id:"4-직접-고치기-코드가-편하면",children:"4. 직접 고치기 (코드가 편하면)"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"화면 배치"})," — ",n.jsx(s.code,{children:"screens/<흐름>.js"}),"의 화면 함수. 컴포넌트 호출이 위에서 아래 순서대로 놓여 있다. 줄 순서를 바꾸면 화면 순서가 바뀐다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"화면 기본값"})," — ",n.jsx(s.code,{children:"screens/registry.js"}),". 화면마다 기본 args가 한 줄씩 있다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"흐름"})," — ",n.jsx(s.code,{children:"flows/flows.stories.js"}),". 흐름 하나가 ",n.jsx(s.code,{children:"steps"})," 배열 하나다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"부품 모양"})," — ",n.jsx(s.code,{children:"components/<이름>/<이름>.css"}),". 모든 화면에 반영된다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"색·크기"})," — ",n.jsx(s.code,{children:"tokens/*.json"}),". 그다음 ",n.jsx(s.code,{children:"npm run tokens"}),"를 실행한다. iOS·Android 코드도 같이 생성된다.",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["색·글자는 2단이다. 위쪽 ",n.jsx(s.strong,{children:"원시"}),"(",n.jsx(s.code,{children:"gray.900"}),", ",n.jsx(s.code,{children:"brand.600"}),", ",n.jsx(s.code,{children:"text.base.medium"}),")에 값이 있고, 아래쪽 ",n.jsx(s.strong,{children:"쓰임 이름"}),"(",n.jsx(s.code,{children:"textPrimary"}),", ",n.jsx(s.code,{children:"body"}),")은 원시를 가리킨다. 값을 바꾸려면 원시를, 어떤 자리에 무슨 색을 쓸지 바꾸려면 쓰임 이름이 가리키는 곳을 고친다."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(s.p,{children:["로컬에서 보려면 ",n.jsx(s.code,{children:"npm run dev"}),"를 실행하고 http://localhost:6006 을 연다. 저장하면 바로 반영된다."]}),`
`,n.jsx(s.h2,{id:"지키는-것",children:"지키는 것"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"새 값은 토큰으로 넣는다."})," 화면에서 바로 hex나 px를 쓰지 않는다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"앱과 다르게 생긴 시안은 소통에 못 쓴다."})," 앱에 이미 있는 화면을 고칠 때는 앱 코드의 값부터 맞춘다."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"시안이 확정되면 앱 반영은 별도 작업이다."})," 토큰은 생성물을 복사하고, 컴포넌트는 명세의 플랫폼 표를 보고 iOS·Android에서 구현한다."]}),`
`]})]})}function o(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(l,{...e})}):l(e)}export{o as default};
