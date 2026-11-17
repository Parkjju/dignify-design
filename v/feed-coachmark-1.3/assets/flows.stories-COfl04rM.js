import{S as d,r as E}from"./registry-CAx16e9d.js";import"./tab-bar-BI7PIY6z.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-C1iKZhb9.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-C-FxAWsy.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./pick-card-C10KLQzv.js";import"./menu-sheet-CLnGtBRH.js";import"./nav-bar-BUPyutce.js";import"./section-header-Poff_ct_.js";import"./track-row-CL319CUY.js";import"./text-field-DUcLJXXO.js";import"./settings-row-B05oNaJP.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./crate-cell-B_hdCFLZ.js";import"./seed-tray-C3sOefLd.js";import"./link-row-CsaWuRq8.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./user-row-DefBl9Ex.js";import"./seed-tile-MVKHPOZQ.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";function k({steps:B=[],scale:g=.5,wrap:A=!1}={}){const m=Math.round(440*g),f=Math.round(900*g),h=(e,n)=>{const b=e.label??d[e.screen]?.[0]??e.screen;return`<figure class="flow__step">
      <div class="flow__frame" style="width:${m}px;height:${f}px"><div style="transform:scale(${g});transform-origin:0 0;width:440px;height:900px;display:grid;place-items:center">${E(e.screen,e.args)}</div></div>
      <figcaption><b>${n+1}. ${b}</b><code>${e.screen}</code>${e.note?`<span>${e.note}</span>`:""}</figcaption></figure>`};return`<style>
    .flow { display: flex; ${A?"flex-wrap: wrap;":""} align-items: flex-start; gap: 8px; padding: 24px; font-family: -apple-system, sans-serif; }
    .flow__step { margin: 0; display: flex; flex-direction: column; gap: 10px; width: ${m}px; flex: none; }
    .flow__frame { overflow: hidden; }
    .flow figcaption { display: flex; flex-direction: column; gap: 3px; padding: 0 6px; }
    .flow figcaption b { font-size: 14px; color: #111827; } .flow figcaption code { font-size: 11px; color: #9CA3AF; }
    .flow figcaption span { font-size: 12px; color: #6B7280; line-height: 1.45; }
    .flow__arrow { flex: none; align-self: center; margin-top: -40px; font-size: 22px; color: var(--color-brand); }
  </style><div class="flow">${B.map((e,n)=>(n?'<span class="flow__arrow">→</span>':"")+h(e,n)).join("")}</div>`}const re={title:"Flows",render:k,parameters:{layout:"fullscreen"},argTypes:{steps:{control:"object",description:`화면 id: ${Object.keys(d).join(" · ")}`},scale:{control:{type:"range",min:.3,max:1,step:.05}},wrap:{control:"boolean",description:"줄바꿈해서 격자로 보기"}},args:{scale:.5,wrap:!1}},D=[{screen:"feed-coach",note:"손 모션: 1초 안에 두 번 탭 → 1초 쉼 반복. 유저가 더블탭해야 넘어감"},{screen:"feed-coach-hyped",note:"하트 팝 → 페이드아웃. 캡션은 화면 아무 곳 터치 → 사라짐. 게스트면 이 좋아요는 기기에 보관 → 로그인 후 저장"},{screen:"feed-coach-swipe",note:"손 모션: 위로 쓸어 올림. 유저가 다음 곡으로 넘기면 끝"}],u={name:"첫 실행 — 로그인 없이 둘러보기",args:{steps:[{screen:"onboarding-signin",note:"로그인 없이 둘러보기"},...D,{screen:"feed",label:"피드(게스트)",args:{track:{cover:"a-seasons",title:"seasons",artist:"wave to earth"},chip:"인디"}},{screen:"guest-prompt",note:"Picks·마이 탭을 누르면"},{screen:"onboarding-signin-gate",note:"Picks·마이에서 로그인, 또는 두 번째 좋아요부터 바로 이 시트 → 「둘러보기 후 로그인」으로"}]}},s={name:"첫 실행 — 바로 로그인",args:{steps:[{screen:"onboarding-signin",note:"Apple로 계속하기"},{screen:"onboarding-seed",note:"곡 선택 (최대 3곡 → 피드 기준)"},{screen:"onboarding-building",note:"최소 2초, 피드가 늦으면 올 때까지"},...D,{screen:"feed",label:"바로 시작",args:{track:{cover:"a-wss",title:"work, shit, sleep",artist:"jisokuryClub"},chip:"비슷한 곡: work, shit, sleep"}}]}},r={name:"둘러보기 후 로그인",args:{steps:[{screen:"onboarding-signin-gate",note:"게스트가 Picks·마이 또는 두 번째 좋아요에서 로그인 · 코치마크 좋아요는 이때 저장"},{screen:"onboarding-loading",note:"곡 선택 후보를 받는 동안 · 코치마크는 이미 봤으니 생략"},{screen:"onboarding-seed",note:"곡 선택"},{screen:"onboarding-building",note:"최소 2초, 피드가 늦으면 올 때까지"},{screen:"feed",label:"바로 시작",args:{track:{cover:"a-wss",title:"work, shit, sleep",artist:"jisokuryClub"},chip:"비슷한 곡: work, shit, sleep"}}]}},t={name:"피드에서 발견하기",args:{steps:[{screen:"feed",note:"스와이프로 넘기며 듣기"},{screen:"feed",label:"좋아요",note:"더블탭 또는 하트 버튼",args:{hyped:!0}},{screen:"track-detail",note:"••• 버튼 → 상세·스토어"},{screen:"feed-search",note:"검색 버튼"},{screen:"feed",label:"검색 결과",args:{query:"실리카겔",track:{cover:"a-bigvoid",title:"BIG VOID",artist:"실리카겔"},chip:"록"}}]}},a={name:"이번 주 특집",args:{steps:[{screen:"feed",label:"특집 시작",args:{context:"이번 주 특집 1/5",track:{cover:"a-seasons",title:"seasons",artist:"wave to earth"},chip:"인디"}},{screen:"feed",label:"특집 마지막",args:{context:"이번 주 특집 5/5",track:{cover:"a-billann",title:"Bill Loves Ann",artist:"퍼플웨일"},chip:"인디"}},{screen:"feed-push-popup",note:"다 보면 알림 권유"}]}},o={name:"픽 만들기",args:{steps:[{screen:"picks",note:"새 픽 버튼"},{screen:"pick-compose",note:"좋아요한 곡에서 고르기, 검색도 가능"},{screen:"pick-compose-title",note:"비우면 자동 제목"},{screen:"picks",label:"올린 뒤",note:"목록 맨 위 + 알림 권유 팝업"}]}},C={name:"픽 듣고 반응하기",args:{steps:[{screen:"picks"},{screen:"pick-play",note:"커버 탭 → 풀스크린 줌"},{screen:"picks",label:"🔥 반응",args:{picks:[{nickname:"wavelover",time:"1시간 전",title:"국내 브릿팝 루키 🔥",covers:["a-bigvoid","a-billann","a-truth"],trackCount:10,reactions:2,reacted:!0}]}},{screen:"pick-menu",note:"··· → 신고·차단"}]}},c={name:"내 취향 보기",args:{steps:[{screen:"my-page"},{screen:"digging-profile"},{screen:"digging-profile",label:"좋아요한 곡",args:{scroll:1180}},{screen:"hype-history",note:"전체 보기"},{screen:"hype-history",label:"편집",args:{editing:!0}}]}},i={name:"추천 기준 바꾸기",args:{steps:[{screen:"my-page"},{screen:"seed-picker",note:"최대 3곡 고정"},{screen:"feed",label:"바뀐 피드",args:{chip:"비슷한 곡: seasons",track:{cover:"a-always",title:"Always You",artist:"Supertaste"}}}]}},p={name:"아티스트 요청",args:{steps:[{screen:"feed-search",args:{text:"검정치마",terms:[]}},{screen:"artist-requests",label:"요청 시트",args:{sheet:!0}},{screen:"artist-requests",label:"보냄",args:{sheet:!0,sent:!0}}]}},l={name:"전체 화면",args:{wrap:!0,scale:.4,steps:Object.keys(d).map(B=>({screen:B}))}},te=["FirstLaunchGuest","FirstLaunch","GuestThenSignIn","Discover","WeeklySet","MakePick","ListenPick","MyTaste","SeedChange","RequestArtist","AllScreens"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '첫 실행 — 로그인 없이 둘러보기',
  args: {
    steps: [{
      screen: 'onboarding-signin',
      note: '로그인 없이 둘러보기'
    }, ...coach, {
      screen: 'feed',
      label: '피드(게스트)',
      args: {
        track: {
          cover: 'a-seasons',
          title: 'seasons',
          artist: 'wave to earth'
        },
        chip: '인디'
      }
    }, {
      screen: 'guest-prompt',
      note: 'Picks·마이 탭을 누르면'
    }, {
      screen: 'onboarding-signin-gate',
      note: 'Picks·마이에서 로그인, 또는 두 번째 좋아요부터 바로 이 시트 → 「둘러보기 후 로그인」으로'
    }]
  }
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '첫 실행 — 바로 로그인',
  args: {
    steps: [{
      screen: 'onboarding-signin',
      note: 'Apple로 계속하기'
    }, {
      screen: 'onboarding-seed',
      note: '곡 선택 (최대 3곡 → 피드 기준)'
    }, {
      screen: 'onboarding-building',
      note: '최소 2초, 피드가 늦으면 올 때까지'
    }, ...coach, {
      screen: 'feed',
      label: '바로 시작',
      args: {
        track: {
          cover: 'a-wss',
          title: 'work, shit, sleep',
          artist: 'jisokuryClub'
        },
        chip: '비슷한 곡: work, shit, sleep'
      }
    }]
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '둘러보기 후 로그인',
  args: {
    steps: [{
      screen: 'onboarding-signin-gate',
      note: '게스트가 Picks·마이 또는 두 번째 좋아요에서 로그인 · 코치마크 좋아요는 이때 저장'
    }, {
      screen: 'onboarding-loading',
      note: '곡 선택 후보를 받는 동안 · 코치마크는 이미 봤으니 생략'
    }, {
      screen: 'onboarding-seed',
      note: '곡 선택'
    }, {
      screen: 'onboarding-building',
      note: '최소 2초, 피드가 늦으면 올 때까지'
    }, {
      screen: 'feed',
      label: '바로 시작',
      args: {
        track: {
          cover: 'a-wss',
          title: 'work, shit, sleep',
          artist: 'jisokuryClub'
        },
        chip: '비슷한 곡: work, shit, sleep'
      }
    }]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '피드에서 발견하기',
  args: {
    steps: [{
      screen: 'feed',
      note: '스와이프로 넘기며 듣기'
    }, {
      screen: 'feed',
      label: '좋아요',
      note: '더블탭 또는 하트 버튼',
      args: {
        hyped: true
      }
    }, {
      screen: 'track-detail',
      note: '••• 버튼 → 상세·스토어'
    }, {
      screen: 'feed-search',
      note: '검색 버튼'
    }, {
      screen: 'feed',
      label: '검색 결과',
      args: {
        query: '실리카겔',
        track: {
          cover: 'a-bigvoid',
          title: 'BIG VOID',
          artist: '실리카겔'
        },
        chip: '록'
      }
    }]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '이번 주 특집',
  args: {
    steps: [{
      screen: 'feed',
      label: '특집 시작',
      args: {
        context: '이번 주 특집 1/5',
        track: {
          cover: 'a-seasons',
          title: 'seasons',
          artist: 'wave to earth'
        },
        chip: '인디'
      }
    }, {
      screen: 'feed',
      label: '특집 마지막',
      args: {
        context: '이번 주 특집 5/5',
        track: {
          cover: 'a-billann',
          title: 'Bill Loves Ann',
          artist: '퍼플웨일'
        },
        chip: '인디'
      }
    }, {
      screen: 'feed-push-popup',
      note: '다 보면 알림 권유'
    }]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '픽 만들기',
  args: {
    steps: [{
      screen: 'picks',
      note: '새 픽 버튼'
    }, {
      screen: 'pick-compose',
      note: '좋아요한 곡에서 고르기, 검색도 가능'
    }, {
      screen: 'pick-compose-title',
      note: '비우면 자동 제목'
    }, {
      screen: 'picks',
      label: '올린 뒤',
      note: '목록 맨 위 + 알림 권유 팝업'
    }]
  }
}`,...o.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '픽 듣고 반응하기',
  args: {
    steps: [{
      screen: 'picks'
    }, {
      screen: 'pick-play',
      note: '커버 탭 → 풀스크린 줌'
    }, {
      screen: 'picks',
      label: '🔥 반응',
      args: {
        picks: [{
          nickname: 'wavelover',
          time: '1시간 전',
          title: '국내 브릿팝 루키 🔥',
          covers: ['a-bigvoid', 'a-billann', 'a-truth'],
          trackCount: 10,
          reactions: 2,
          reacted: true
        }]
      }
    }, {
      screen: 'pick-menu',
      note: '··· → 신고·차단'
    }]
  }
}`,...C.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '내 취향 보기',
  args: {
    steps: [{
      screen: 'my-page'
    }, {
      screen: 'digging-profile'
    }, {
      screen: 'digging-profile',
      label: '좋아요한 곡',
      args: {
        scroll: 1180
      }
    }, {
      screen: 'hype-history',
      note: '전체 보기'
    }, {
      screen: 'hype-history',
      label: '편집',
      args: {
        editing: true
      }
    }]
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '추천 기준 바꾸기',
  args: {
    steps: [{
      screen: 'my-page'
    }, {
      screen: 'seed-picker',
      note: '최대 3곡 고정'
    }, {
      screen: 'feed',
      label: '바뀐 피드',
      args: {
        chip: '비슷한 곡: seasons',
        track: {
          cover: 'a-always',
          title: 'Always You',
          artist: 'Supertaste'
        }
      }
    }]
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '아티스트 요청',
  args: {
    steps: [{
      screen: 'feed-search',
      args: {
        text: '검정치마',
        terms: []
      }
    }, {
      screen: 'artist-requests',
      label: '요청 시트',
      args: {
        sheet: true
      }
    }, {
      screen: 'artist-requests',
      label: '보냄',
      args: {
        sheet: true,
        sent: true
      }
    }]
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '전체 화면',
  args: {
    wrap: true,
    scale: 0.4,
    steps: Object.keys(SCREENS).map(screen => ({
      screen
    }))
  }
}`,...l.parameters?.docs?.source}}};export{l as AllScreens,t as Discover,s as FirstLaunch,u as FirstLaunchGuest,r as GuestThenSignIn,C as ListenPick,o as MakePick,c as MyTaste,p as RequestArtist,i as SeedChange,a as WeeklySet,te as __namedExportsOrder,re as default};
