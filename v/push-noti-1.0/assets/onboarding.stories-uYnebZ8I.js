import{l as c,g as r,b as u}from"./live-Bknvkivv.js";import{S as d,G as l,F as m,a as g,L as C,b as a}from"./registry-DPwe9rP5.js";import{F as B}from"./feed-live-DLQu4X4t.js";import"./data-0w-2XlOy.js";import"./tab-bar-BI7PIY6z.js";import"./feed-DwD2T2fi.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-vbsY4sZA.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-BZ63RXv_.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./consent-sheet-B1-zkaR8.js";import"./toast-EU6A1_2o.js";import"./system-alert-CRt7fUDq.js";import"./picks-DwwDZwyF.js";import"./pick-card-C10KLQzv.js";import"./menu-sheet-CLnGtBRH.js";import"./nav-bar-BifwbVIu.js";import"./section-header-Poff_ct_.js";import"./track-row-B5dkUGq0.js";import"./text-field-DUcLJXXO.js";import"./my-VHlG4OtS.js";import"./settings-row-BQgDJDqd.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./crate-cell-Oc_AW0U_.js";import"./seed-tray-ibQD2q-w.js";import"./filter-chip-CQBSxEKR.js";import"./tooltip-CwYDS6Q8.js";import"./empty-state-CSFNeurQ.js";import"./link-row-CsaWuRq8.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./user-row-DefBl9Ex.js";import"./seed-tile-MVKHPOZQ.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";const ce={title:"Screens/4. 온보딩",parameters:{layout:"centered"}},s=d["onboarding-seed"][2].tiles.map(({number:e,playing:n,...t})=>t),k=(e,n)=>(n(2e3,t=>({...t,screen:"feed",stack:[]})),{...e,screen:"building",stack:[]}),o={name:"첫 실행",args:{titleFont:"title1",titleBreak:!0},argTypes:{titleFont:{control:"inline-radio",options:["title1","title2","headline"],description:"곡 고르기 제목 타이포 — title1 24 · title2 18 · headline 17"},titleBreak:{description:'곡 고르기 제목 "노래를" 뒤에서 줄바꿈'}},render:c({init:()=>({screen:"signin",stack:[],guest:!1,coachSeen:!1,tab:"my",picks:[],playing:""}),view:(e,n,{set:t})=>({signin:()=>a({}),gate:()=>a({gate:!0}),loading:()=>C(),seed:()=>g({titleFont:n.titleFont,titleBreak:n.titleBreak,tiles:s.map(i=>({...i,number:e.picks.indexOf(i.cover)+1,playing:e.playing===i.cover}))}),building:()=>m({covers:e.picks}),prompt:()=>l({tab:e.tab}),feed:()=>B({coach:!e.coachSeen,onTab:i=>e.guest&&t(p=>r({...p,coachSeen:!0},"prompt",{tab:i}))})})[e.screen](),taps:[[".ds-button--apple",(e,{later:n})=>e.screen==="gate"?(n(1500,t=>({...t,screen:"seed",stack:[]})),{...e,screen:"loading",stack:[],guest:!1}):r(e,"seed",{guest:!1})],[".ob-guest",e=>r(e,"feed",{guest:!0})],[".ob-cancel",e=>u(e)],[".tab",(e,{i:n})=>e.screen==="prompt"?n===0?u(e):{tab:["feed","picks","my"][n]}:void 0],[".ds-button",e=>e.screen==="prompt"?r(e,"gate"):void 0],[".ds-seed__pick",(e,{i:n})=>{const t=s[n].cover;return e.picks.includes(t)?{picks:e.picks.filter(i=>i!==t)}:e.picks.length<3?{picks:[...e.picks,t]}:{}}],[".ds-seed__thumb",(e,{i:n})=>({playing:e.playing===s[n].cover?"":s[n].cover})],[".ds-seed-tray__x",(e,{i:n})=>({picks:e.picks.filter((t,i)=>i!==n)})],[".ds-button--primary:not(.is-disabled), .ob-skip",(e,{later:n})=>e.screen==="seed"?k(e,n):void 0]]})},de=["Onboarding"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '첫 실행',
  args: {
    titleFont: 'title1',
    titleBreak: true
  },
  argTypes: {
    titleFont: {
      control: 'inline-radio',
      options: ['title1', 'title2', 'headline'],
      description: '곡 고르기 제목 타이포 — title1 24 · title2 18 · headline 17'
    },
    titleBreak: {
      description: '곡 고르기 제목 "노래를" 뒤에서 줄바꿈'
    }
  },
  render: live({
    init: () => ({
      screen: 'signin',
      stack: [],
      guest: false,
      coachSeen: false,
      tab: 'my',
      picks: [],
      playing: ''
    }),
    view: (s, a, {
      set
    }) => ({
      signin: () => SignInScreen({}),
      gate: () => SignInScreen({
        gate: true
      }),
      loading: () => LoadingScreen(),
      seed: () => SeedOnboardingScreen({
        titleFont: a.titleFont,
        titleBreak: a.titleBreak,
        tiles: TILES.map(t => ({
          ...t,
          number: s.picks.indexOf(t.cover) + 1,
          playing: s.playing === t.cover
        }))
      }),
      building: () => FeedBuildingScreen({
        covers: s.picks
      }),
      prompt: () => GuestPromptScreen({
        tab: s.tab
      }),
      // 피드는 피드 프로토타입을 그대로 넣는다. 게스트가 Picks·My를 누르면 로그인 유도로
      feed: () => FeedLive({
        coach: !s.coachSeen,
        onTab: tab => s.guest && set(x => go({
          ...x,
          coachSeen: true
        }, 'prompt', {
          tab
        }))
      })
    })[s.screen](),
    taps: [
    // 로그인
    ['.ds-button--apple', (s, {
      later
    }) => s.screen === 'gate' ? (later(1500, x => ({
      ...x,
      screen: 'seed',
      stack: []
    })), {
      ...s,
      screen: 'loading',
      stack: [],
      guest: false
    }) : go(s, 'seed', {
      guest: false
    })], ['.ob-guest', s => go(s, 'feed', {
      guest: true
    })], ['.ob-cancel', s => back(s)],
    // 로그인 유도(게스트가 Picks·My)
    ['.tab', (s, {
      i
    }) => s.screen === 'prompt' ? i === 0 ? back(s) : {
      tab: ['feed', 'picks', 'my'][i]
    } : undefined], ['.ds-button', s => s.screen === 'prompt' ? go(s, 'gate') : undefined],
    // 곡 고르기
    ['.ds-seed__pick', (s, {
      i
    }) => {
      const c = TILES[i].cover;
      if (s.picks.includes(c)) return {
        picks: s.picks.filter(x => x !== c)
      };
      return s.picks.length < 3 ? {
        picks: [...s.picks, c]
      } : {}; // 꽉 차면 무반응(비활성 타일)
    }], ['.ds-seed__thumb', (s, {
      i
    }) => ({
      playing: s.playing === TILES[i].cover ? '' : TILES[i].cover
    })], ['.ds-seed-tray__x', (s, {
      i
    }) => ({
      picks: s.picks.filter((_, j) => j !== i)
    })], ['.ds-button--primary:not(.is-disabled), .ob-skip', (s, {
      later
    }) => s.screen === 'seed' ? toFeed(s, later) : undefined]]
  })
}`,...o.parameters?.docs?.source}}};export{o as Onboarding,de as __namedExportsOrder,ce as default};
