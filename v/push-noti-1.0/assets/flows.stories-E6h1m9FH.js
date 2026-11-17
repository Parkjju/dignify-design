import{S as E,r as x}from"./registry-DPwe9rP5.js";import"./data-0w-2XlOy.js";import"./tab-bar-BI7PIY6z.js";import"./feed-DwD2T2fi.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-vbsY4sZA.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-BZ63RXv_.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./consent-sheet-B1-zkaR8.js";import"./toast-EU6A1_2o.js";import"./system-alert-CRt7fUDq.js";import"./picks-DwwDZwyF.js";import"./pick-card-C10KLQzv.js";import"./menu-sheet-CLnGtBRH.js";import"./nav-bar-BifwbVIu.js";import"./section-header-Poff_ct_.js";import"./track-row-B5dkUGq0.js";import"./text-field-DUcLJXXO.js";import"./my-VHlG4OtS.js";import"./settings-row-BQgDJDqd.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./crate-cell-Oc_AW0U_.js";import"./seed-tray-ibQD2q-w.js";import"./filter-chip-CQBSxEKR.js";import"./tooltip-CwYDS6Q8.js";import"./empty-state-CSFNeurQ.js";import"./link-row-CsaWuRq8.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./user-row-DefBl9Ex.js";import"./seed-tile-MVKHPOZQ.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";function v({steps:d=[],scale:m=.5,wrap:k=!1}={}){const f=Math.round(440*m),F=Math.round(900*m),y=(u,e)=>{const w=u.label??E[u.screen]?.[0]??u.screen;return`<figure class="flow__step">
      <div class="flow__frame" style="width:${f}px;height:${F}px"><div style="transform:scale(${m});transform-origin:0 0;width:440px;height:900px;display:grid;place-items:center">${x(u.screen,u.args)}</div></div>
      <figcaption><b>${e+1}. ${w}</b><code>${u.screen}</code>${u.note?`<span>${u.note}</span>`:""}</figcaption></figure>`};return`<style>
    .flow { display: flex; ${k?"flex-wrap: wrap;":""} align-items: flex-start; gap: 8px; padding: 24px; font-family: -apple-system, sans-serif; }
    .flow__step { margin: 0; display: flex; flex-direction: column; gap: 10px; width: ${f}px; flex: none; }
    .flow__frame { overflow: hidden; }
    .flow figcaption { display: flex; flex-direction: column; gap: 3px; padding: 0 6px; }
    .flow figcaption b { font-size: 14px; color: #111827; } .flow figcaption code { font-size: 11px; color: #9CA3AF; }
    .flow figcaption span { font-size: 12px; color: #6B7280; line-height: 1.45; }
    .flow__arrow { flex: none; align-self: center; margin-top: -40px; font-size: 22px; color: var(--color-brand); }
  </style><div class="flow">${d.map((u,e)=>(e?'<span class="flow__arrow">→</span>':"")+y(u,e)).join("")}</div>`}const Eu={title:"Flows",render:v,parameters:{layout:"fullscreen"},argTypes:{steps:{control:"object",description:`화면 id: ${Object.keys(E).join(" · ")}`},scale:{control:{type:"range",min:.3,max:1,step:.05}},wrap:{control:"boolean",description:"줄바꿈해서 격자로 보기"}},args:{scale:.5,wrap:!1}},h=[{screen:"feed-coach",note:"손 모션: 1초 안에 두 번 탭 → 1초 쉼 반복. 유저가 더블탭해야 넘어감"},{screen:"feed-coach-hyped",note:"하트 팝 → 페이드아웃. 캡션은 화면 아무 곳 터치 → 사라짐. 게스트면 이 좋아요는 기기에 보관 → 로그인 후 저장"},{screen:"feed-coach-swipe",note:"손 모션: 위로 쓸어 올림. 유저가 다음 곡으로 넘기면 끝"}],n={name:"첫 실행 — 로그인 없이 둘러보기",args:{steps:[{screen:"onboarding-signin",note:"로그인 없이 둘러보기"},...h,{screen:"feed",label:"피드(게스트)",args:{track:{cover:"a-seasons",title:"seasons",artist:"wave to earth"},chip:"인디"}},{screen:"guest-prompt",note:"Picks·마이 탭을 누르면"},{screen:"onboarding-signin-gate",note:"Picks·마이에서 로그인, 또는 두 번째 좋아요부터 바로 이 시트 → 「둘러보기 후 로그인」으로"}]}},C={name:"첫 실행 — 바로 로그인",args:{steps:[{screen:"onboarding-signin",note:"Apple로 계속하기"},{screen:"onboarding-seed",note:"곡 선택 (최대 3곡 → 피드 기준)"},{screen:"onboarding-building",note:"최소 2초, 피드가 늦으면 올 때까지"},...h,{screen:"feed",label:"바로 시작",args:{track:{cover:"a-wss",title:"work, shit, sleep",artist:"jisokuryClub"},chip:"비슷한 곡: work, shit, sleep"}}]}},s={name:"둘러보기 후 로그인",args:{steps:[{screen:"onboarding-signin-gate",note:"게스트가 Picks·마이 또는 두 번째 좋아요에서 로그인 · 코치마크 좋아요는 이때 저장"},{screen:"onboarding-loading",note:"곡 선택 후보를 받는 동안 · 코치마크는 이미 봤으니 생략"},{screen:"onboarding-seed",note:"곡 선택"},{screen:"onboarding-building",note:"최소 2초, 피드가 늦으면 올 때까지"},{screen:"feed",label:"바로 시작",args:{track:{cover:"a-wss",title:"work, shit, sleep",artist:"jisokuryClub"},chip:"비슷한 곡: work, shit, sleep"}}]}},r={name:"피드에서 발견하기",args:{steps:[{screen:"feed",note:"스와이프로 넘기며 듣기"},{screen:"feed",label:"좋아요",note:"더블탭 또는 하트 버튼",args:{hyped:!0}},{screen:"track-detail",note:"••• 버튼 → 상세·스토어"},{screen:"feed-search",note:"검색 버튼"},{screen:"feed",label:"검색 결과",args:{query:"실리카겔",track:{cover:"a-bigvoid",title:"BIG VOID",artist:"실리카겔"},chip:"록"}}]}},t={name:"이번 주 특집",args:{steps:[{screen:"feed",label:"특집 시작",args:{context:"이번 주 특집 1/5",track:{cover:"a-seasons",title:"seasons",artist:"wave to earth"},chip:"인디"}},{screen:"feed",label:"특집 마지막",args:{context:"이번 주 특집 5/5",track:{cover:"a-billann",title:"Bill Loves Ann",artist:"퍼플웨일"},chip:"인디"}},{screen:"feed-consent-night",note:"다 보면 — 광고성 동의 true + 기기 권한 허용 + 야간 미응답일 때만. 아니면 안 띄움"},{screen:"feed-toast",label:"결과",args:{track:{cover:"a-cannons",title:"Cannons",artist:"Phil Wickham"},toast:"night-on"},note:"아니요 → 야간 수신거부 토스트. 21시~다음 날 08시 특집 알림도 그 시각에 받는다"}]}},b={cover:"a-cannons",title:"Cannons",artist:"Phil Wickham"},a={name:"광고성 동의 — 첫 실행",args:{steps:[{screen:"feed",label:"로그인 상태로 피드",note:"로그인 안 했으면 묻지 않음(로그인 뒤 다음 실행). 업데이트로 들어온 기존 유저면 업데이트 소식(1.3.2) 다음"},{screen:"feed-consent",note:"이 기기에서 동의 팝업을 띄운 적 없음 + 좋아요한 곡이 1곡 이상(가장 최근 좋아요의 아티스트). 바깥 탭으로 안 닫힘"},{screen:"feed-toast",label:"알림 받기",args:{track:b,toast:"on"},note:"동의 true 저장 → 기기 권한 설정 전이면 시스템 팝업 → 결과 토스트"},{screen:"feed",label:"나중에",args:{track:b},note:"닫기만 — 저장·통지 없음. 7일 뒤 같은 팝업"}]}},o={name:"광고성 동의 — 좋아요 시점",args:{steps:[{screen:"feed",label:"좋아요",args:{track:{cover:"a-ohio",title:"Ohio",artist:"혁오"},chip:"록",hyped:!0},note:"로그인 · 기기 권한 설정 전 · 실행 2회 이상 · 이번 세션에 권한 팝업 안 봄 · 피드에서(픽 재생·잠금화면 제외)"},{screen:"feed-like-sheet",note:"다음 곡으로 넘긴 직후. 좋아한 아티스트가 처음이거나, 한 번 묻고 「일주일 동안 안 보기」 한 아티스트를 다시 좋아요했을 때"},{screen:"feed-toast",label:"알림 받기",args:{track:{cover:"a-tomboy",title:"TOMBOY",artist:"혁오"},chip:"비슷한 곡: TOMBOY",toast:"on"},note:"동의 true + 시스템 권한 요청 → 결과 토스트"},{screen:"feed",label:"일주일 동안 안 보기",args:{track:{cover:"a-tomboy",title:"TOMBOY",artist:"혁오"},chip:"비슷한 곡: TOMBOY"},note:"시트만 닫는다. 권한은 설정 전 그대로, 7일 뒤 같은 동작에서 다시"}]}},c={name:"광고성 동의 — 마이 › 알림",args:{steps:[{screen:"my-page",note:"「알림」"},{screen:"notification-settings",note:"토글 = 서버 저장 후 바뀜. 기기 알림 권한: 켜짐·꺼짐 → 설정 앱 Dignify 알림 화면, 설정 전 → 눌러도 아무 동작 없음"},{screen:"notification-settings-off",label:"광고성 끔",args:{toast:"off"},note:"야간도 같이 꺼짐 → 수신거부 토스트"},{screen:"notification-settings-off",label:"야간 탭",args:{toast:"need-consent"},note:"광고성이 꺼져 있으면 야간은 못 켠다"},{screen:"notification-settings",label:"저장 실패",args:{toast:"fail"},note:"토글은 그대로"}]}},i={name:"알림 탭 → 피드 앞 구간",args:{steps:[{screen:"feed-weekly-pick",note:"주간 추천 알림 탭 — 「이번 주 추천 n/m」, m = 추천곡 수(최대 10)"},{screen:"feed-new-release",note:"신곡 알림 탭·앱 열기 — 「좋아요한 아티스트의 신곡 n/m」, 10곡 넘으면 무작위 10곡"},{screen:"feed",label:"구간 끝",note:"구간에서 좋아요했으면 그 곡과 연관된 곡, 아니면 평소 피드"}]}},B={name:"픽 만들기",args:{steps:[{screen:"picks",note:"새 픽 버튼"},{screen:"pick-compose",note:"좋아요한 곡에서 고르기, 검색도 가능"},{screen:"pick-compose-title",note:"비우면 자동 제목"},{screen:"picks",label:"올린 뒤",note:"목록 맨 위 + 알림 권유 팝업"}]}},D={name:"픽 듣고 반응하기",args:{steps:[{screen:"picks"},{screen:"pick-play",note:"커버 탭 → 풀스크린 줌"},{screen:"picks",label:"🔥 반응",args:{picks:[{nickname:"wavelover",time:"1시간 전",title:"국내 브릿팝 루키 🔥",covers:["a-bigvoid","a-billann","a-truth"],trackCount:10,reactions:2,reacted:!0}]}},{screen:"pick-menu",note:"··· → 신고·차단"}]}},p={name:"내 취향 보기",args:{steps:[{screen:"my-page"},{screen:"digging-profile"},{screen:"digging-profile",label:"좋아요한 곡",args:{scroll:1180}},{screen:"hype-history",note:"전체 보기"},{screen:"hype-history",label:"편집",args:{editing:!0}}]}},l={name:"추천 기준 바꾸기",args:{steps:[{screen:"my-page"},{screen:"seed-picker",note:"최대 3곡 고정"},{screen:"feed",label:"바뀐 피드",args:{chip:"비슷한 곡: seasons",track:{cover:"a-always",title:"Always You",artist:"Supertaste"}}}]}},A={name:"아티스트 요청",args:{steps:[{screen:"feed-search",args:{text:"검정치마",terms:[]}},{screen:"artist-requests",label:"요청 시트",args:{sheet:!0}},{screen:"artist-requests",label:"보냄",args:{sheet:!0,sent:!0}}]}},g={name:"전체 화면",args:{wrap:!0,scale:.4,steps:Object.keys(E).map(d=>({screen:d}))}},fu=["FirstLaunchGuest","FirstLaunch","GuestThenSignIn","Discover","WeeklySet","ConsentFirstRun","ConsentOnLike","ConsentSettings","LeadSections","MakePick","ListenPick","MyTaste","SeedChange","RequestArtist","AllScreens"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      screen: 'feed-consent-night',
      note: '다 보면 — 광고성 동의 true + 기기 권한 허용 + 야간 미응답일 때만. 아니면 안 띄움'
    }, {
      screen: 'feed-toast',
      label: '결과',
      args: {
        track: {
          cover: 'a-cannons',
          title: 'Cannons',
          artist: 'Phil Wickham'
        },
        toast: 'night-on'
      },
      note: '아니요 → 야간 수신거부 토스트. 21시~다음 날 08시 특집 알림도 그 시각에 받는다'
    }]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '광고성 동의 — 첫 실행',
  args: {
    steps: [{
      screen: 'feed',
      label: '로그인 상태로 피드',
      note: '로그인 안 했으면 묻지 않음(로그인 뒤 다음 실행). 업데이트로 들어온 기존 유저면 업데이트 소식(1.3.2) 다음'
    }, {
      screen: 'feed-consent',
      note: '이 기기에서 동의 팝업을 띄운 적 없음 + 좋아요한 곡이 1곡 이상(가장 최근 좋아요의 아티스트). 바깥 탭으로 안 닫힘'
    }, {
      screen: 'feed-toast',
      label: '알림 받기',
      args: {
        track: NOW,
        toast: 'on'
      },
      note: '동의 true 저장 → 기기 권한 설정 전이면 시스템 팝업 → 결과 토스트'
    }, {
      screen: 'feed',
      label: '나중에',
      args: {
        track: NOW
      },
      note: '닫기만 — 저장·통지 없음. 7일 뒤 같은 팝업'
    }]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '광고성 동의 — 좋아요 시점',
  args: {
    steps: [{
      screen: 'feed',
      label: '좋아요',
      args: {
        track: {
          cover: 'a-ohio',
          title: 'Ohio',
          artist: '혁오'
        },
        chip: '록',
        hyped: true
      },
      note: '로그인 · 기기 권한 설정 전 · 실행 2회 이상 · 이번 세션에 권한 팝업 안 봄 · 피드에서(픽 재생·잠금화면 제외)'
    }, {
      screen: 'feed-like-sheet',
      note: '다음 곡으로 넘긴 직후. 좋아한 아티스트가 처음이거나, 한 번 묻고 「일주일 동안 안 보기」 한 아티스트를 다시 좋아요했을 때'
    }, {
      screen: 'feed-toast',
      label: '알림 받기',
      args: {
        track: {
          cover: 'a-tomboy',
          title: 'TOMBOY',
          artist: '혁오'
        },
        chip: '비슷한 곡: TOMBOY',
        toast: 'on'
      },
      note: '동의 true + 시스템 권한 요청 → 결과 토스트'
    }, {
      screen: 'feed',
      label: '일주일 동안 안 보기',
      args: {
        track: {
          cover: 'a-tomboy',
          title: 'TOMBOY',
          artist: '혁오'
        },
        chip: '비슷한 곡: TOMBOY'
      },
      note: '시트만 닫는다. 권한은 설정 전 그대로, 7일 뒤 같은 동작에서 다시'
    }]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '광고성 동의 — 마이 › 알림',
  args: {
    steps: [{
      screen: 'my-page',
      note: '「알림」'
    }, {
      screen: 'notification-settings',
      note: '토글 = 서버 저장 후 바뀜. 기기 알림 권한: 켜짐·꺼짐 → 설정 앱 Dignify 알림 화면, 설정 전 → 눌러도 아무 동작 없음'
    }, {
      screen: 'notification-settings-off',
      label: '광고성 끔',
      args: {
        toast: 'off'
      },
      note: '야간도 같이 꺼짐 → 수신거부 토스트'
    }, {
      screen: 'notification-settings-off',
      label: '야간 탭',
      args: {
        toast: 'need-consent'
      },
      note: '광고성이 꺼져 있으면 야간은 못 켠다'
    }, {
      screen: 'notification-settings',
      label: '저장 실패',
      args: {
        toast: 'fail'
      },
      note: '토글은 그대로'
    }]
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '알림 탭 → 피드 앞 구간',
  args: {
    steps: [{
      screen: 'feed-weekly-pick',
      note: '주간 추천 알림 탭 — 「이번 주 추천 n/m」, m = 추천곡 수(최대 10)'
    }, {
      screen: 'feed-new-release',
      note: '신곡 알림 탭·앱 열기 — 「좋아요한 아티스트의 신곡 n/m」, 10곡 넘으면 무작위 10곡'
    }, {
      screen: 'feed',
      label: '구간 끝',
      note: '구간에서 좋아요했으면 그 곡과 연관된 곡, 아니면 평소 피드'
    }]
  }
}`,...i.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '전체 화면',
  args: {
    wrap: true,
    scale: 0.4,
    steps: Object.keys(SCREENS).map(screen => ({
      screen
    }))
  }
}`,...g.parameters?.docs?.source}}};export{g as AllScreens,a as ConsentFirstRun,o as ConsentOnLike,c as ConsentSettings,r as Discover,C as FirstLaunch,n as FirstLaunchGuest,s as GuestThenSignIn,i as LeadSections,D as ListenPick,B as MakePick,p as MyTaste,A as RequestArtist,l as SeedChange,t as WeeklySet,fu as __namedExportsOrder,Eu as default};
