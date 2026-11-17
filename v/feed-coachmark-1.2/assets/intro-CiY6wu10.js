import{u as d,j as n,M as r}from"./blocks-Tbc0poZ3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BUJloxWN.js";function i(e){const s={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"소개"}),`
`,n.jsx(s.h1,{id:"dignify-design",children:"Dignify Design"}),`
`,n.jsx(s.p,{children:"Dignify iOS·Android가 같이 쓰는 디자인 시스템이다. 왼쪽 메뉴는 세 층이다."}),`
`,`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"메뉴"}),n.jsx("th",{children:"내용"}),n.jsx("th",{children:"정본"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"Foundations"})}),n.jsx("td",{children:"색·타이포그래피·라운드·여백·아이콘"}),n.jsxs("td",{children:[n.jsx("code",{children:"tokens/*.json"})," → iOS ",n.jsx("code",{children:"DSTokens.swift"})," · Android ",n.jsx("code",{children:"DSTokens.kt"})," 생성"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"Components"})}),n.jsx("td",{children:"컴포넌트별 명세(Docs)와 상태별 미리보기. 아래 Controls로 값을 바꿔 본다"}),n.jsxs("td",{children:[n.jsx("code",{children:"components/<이름>/"})," (명세 md · 마크업 js · 스타일 css · 스토리)"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("b",{children:"Screens"})}),n.jsx("td",{children:"지금 앱(iOS 1.2.1)의 모든 화면과, 컴포넌트를 조립한 새 시안"}),n.jsx("td",{children:n.jsx("code",{children:"screens/"})})]})]})]}),`
`,n.jsx(s.p,{children:"수치·문구는 전부 앱 코드에서 가져왔다. 각 컴포넌트 명세 맨 아래에 대응하는 Swift·Kotlin 이름이 있다."}),`
`,n.jsx(s.h2,{id:"시안--개발",children:"시안 → 개발"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:'Claude에게 시안을 요청한다(예: "디깅 프로필에 이번 달 아티스트 섹션 추가한 시안"). 컴포넌트를 조립한 스토리로 만들어진다.'}),`
`,n.jsx(s.li,{children:"PR이 머지되면 이 사이트가 자동으로 다시 배포된다. 링크만 공유하면 된다."}),`
`,n.jsx(s.li,{children:"새 값·새 컴포넌트가 필요하면 시안과 함께 토큰·명세 변경이 같은 PR에 들어간다."}),`
`,n.jsx(s.li,{children:"개발은 컴포넌트 명세의 플랫폼 표를 보고 iOS·Android를 같이 구현한다."}),`
`]})]})}function h(e={}){const{wrapper:s}={...d(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{h as default};
