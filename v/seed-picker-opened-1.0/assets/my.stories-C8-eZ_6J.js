import{l as C,b as d,g as r}from"./live-Bknvkivv.js";import{S as a,a as l,B,A as m,b as g,H as f,M as D,D as E,c as k}from"./registry-DmT_MLBG.js";import{b as A}from"./feed-BS8ltCqF.js";import{P as y}from"./picks-AzV4t5od.js";import{L as p,P as v,T as S}from"./data-0w-2XlOy.js";import"./nav-bar-BifwbVIu.js";import"./settings-row-B05oNaJP.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./section-header-Poff_ct_.js";import"./crate-cell-B_hdCFLZ.js";import"./seed-tray-ibQD2q-w.js";import"./track-row-B5dkUGq0.js";import"./filter-chip-CQBSxEKR.js";import"./tooltip-CwYDS6Q8.js";import"./empty-state-CSFNeurQ.js";import"./button-WsS0bk8m.js";import"./popup-CV4Hmnhs.js";import"./link-row-CsaWuRq8.js";import"./pick-card-C10KLQzv.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./text-field-DUcLJXXO.js";import"./keyboard-C8TAjGT_.js";import"./user-row-DefBl9Ex.js";import"./search-bar-B9JuTYWr.js";import"./seed-tile-MVKHPOZQ.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-C1iKZhb9.js";import"./recent-searches-DcMiK4AA.js";import"./track-detail-BoXY4nYS.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./menu-sheet-CLnGtBRH.js";import"./tab-bar-BI7PIY6z.js";const Be={title:"Screens/3. 마이",parameters:{layout:"centered"}},i=e=>l[e][2],c={"추천 기준 곡":"seed","아티스트 요청":"requests","차단한 유저":"blocked"},w=e=>e.genre==="전체"?e.tracks:e.tracks.filter(s=>s.genre===e.genre),t=e=>(s,n)=>s.screen==="seed"?e(s,n):void 0,h=(e,s)=>({my:()=>k({...i("my-page"),following:e.following}),profile:()=>E({...i("digging-profile"),range:e.range}),picks:()=>D(i("my-picks")),history:()=>f({...i("hype-history"),editing:e.editing}),seed:()=>g({tracks:e.tracks,genre:e.genre,selected:e.selected,saved:e.saved,fullHint:s.fullHint,tooltip:!!e.tip,popup:e.popup,os:s.os}),requests:()=>m({...i("artist-requests"),requests:e.requests,sheet:e.sheet,sent:e.sent}),blocked:()=>B({users:e.users,swiped:e.swiped}),feed:()=>A({track:S.cannons}),"tab-picks":()=>y({picks:v})})[e.screen](),o={name:"마이",args:{start:"my",liked:!0,saved:[],fullHint:a[1],os:"ios"},argTypes:{start:{control:"inline-radio",options:["my","seed","profile","requests"],description:"시작 화면(‹ 누르면 마이페이지로)"},liked:{description:"좋아요한 곡이 있는지 — 끄면 추천 기준 곡이 빈 화면"},saved:{control:"check",options:p.map(e=>e.cover),description:"추천 기준 곡에 들어올 때 이미 고정된 곡"},fullHint:{control:"inline-radio",options:a,description:"3곡 다 골랐을 때 트레이 안내 — 명세 문구는 두 줄로 깨진다"},os:{control:"inline-radio",options:["ios","android"],description:"팝업 띄우기·닫기 모션 — 각 OS 시스템 대화상자 느낌"}},render:C({init:e=>({screen:e.start,stack:e.start==="my"?[]:["my"],following:!0,range:1,editing:!1,tracks:e.liked?p:[],genre:"전체",selected:[...e.saved],saved:[...e.saved],tip:0,popup:!1,requests:i("artist-requests").requests,sheet:!1,sent:!1,users:i("blocked-users").users,swiped:""}),view:h,taps:[[".tab",(e,{i:s})=>({...e,screen:["feed","tab-picks","my"][s],stack:[]})],[".ds-nav__side:first-child .glass-btn",e=>d(e)],[".device",t((e,{target:s})=>e.tip&&!s.closest(".ic-info-circle")?{tip:0}:void 0)],[".ds-popup .ds-button, .dim",t((e,{later:s,args:n})=>e.popup===!0?(s(n.os==="android"?150:200,{popup:!1}),{popup:"leaving"}):{})],[".ic-info-circle",t((e,{later:s})=>{const n=Date.now();return s(2200,u=>u.tip===n?{...u,tip:0}:u),{tip:n}})],[".ds-filter-chip",t((e,{el:s})=>({genre:s.textContent}))],[".ds-track-row",t((e,{i:s})=>{const n=w(e)[s].cover;return e.selected.includes(n)?{selected:e.selected.filter(u=>u!==n)}:e.selected.length>=3?{popup:!0}:{selected:[...e.selected,n]}})],[".ds-seed-tray__slot:not(.is-empty)",t((e,{i:s})=>({selected:e.selected.filter((n,u)=>u!==s)}))],[".ds-nav__action:not(.is-disabled)",t(e=>d(e,{saved:[...e.selected]}))],[".ds-empty .ds-button",t(e=>({...e,screen:"feed",stack:[]}))],[".ds-settings-card",e=>r(e,"profile")],[".ds-settings-toggle",e=>({following:!e.following})],[".ds-settings-row",(e,{el:s})=>c[s.textContent.trim()]?r(e,c[s.textContent.trim()],{genre:"전체",selected:[...e.saved],tip:0,popup:!1}):{}],[".ds-seg span",(e,{i:s})=>({range:s})],[".ds-section a",e=>r(e,"history",{editing:!0})],[".ds-link-row",e=>r(e,"history",{editing:!1})],[".ds-my-pick",e=>r(e,"picks")],[".ds-nav__action",e=>e.screen==="history"?{editing:!e.editing}:void 0],[".ds-nav .glass-btn:has(.ic-plus)",()=>({sheet:!0,sent:!1})],[".ds-request-form__send",(e,{later:s})=>(s(1500,n=>({...n,sheet:!1,sent:!1,requests:[{artist:"검정치마",status:"pending",date:"2026년 10월 16일"},...n.requests]})),{sent:!0})],[".dim",e=>e.screen==="requests"?{sheet:!1}:void 0],[".ds-user b",(e,{el:s})=>({users:e.users.filter(n=>n!==e.swiped),swiped:""})],[".ds-user",(e,{i:s})=>({swiped:e.swiped===e.users[s]?"":e.users[s]})]]})},me=["My"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '마이',
  args: {
    start: 'my',
    liked: true,
    saved: [],
    fullHint: SEED_FULL_HINTS[1],
    os: 'ios'
  },
  argTypes: {
    start: {
      control: 'inline-radio',
      options: ['my', 'seed', 'profile', 'requests'],
      description: '시작 화면(‹ 누르면 마이페이지로)'
    },
    liked: {
      description: '좋아요한 곡이 있는지 — 끄면 추천 기준 곡이 빈 화면'
    },
    saved: {
      control: 'check',
      options: LIKED.map(t => t.cover),
      description: '추천 기준 곡에 들어올 때 이미 고정된 곡'
    },
    fullHint: {
      control: 'inline-radio',
      options: SEED_FULL_HINTS,
      description: '3곡 다 골랐을 때 트레이 안내 — 명세 문구는 두 줄로 깨진다'
    },
    os: {
      control: 'inline-radio',
      options: ['ios', 'android'],
      description: '팝업 띄우기·닫기 모션 — 각 OS 시스템 대화상자 느낌'
    }
  },
  render: live({
    init: a => ({
      screen: a.start,
      stack: a.start === 'my' ? [] : ['my'],
      following: true,
      range: 1,
      editing: false,
      tracks: a.liked ? LIKED : [],
      genre: '전체',
      selected: [...a.saved],
      saved: [...a.saved],
      tip: 0,
      popup: false,
      requests: D('artist-requests').requests,
      sheet: false,
      sent: false,
      users: D('blocked-users').users,
      swiped: ''
    }),
    view,
    taps: [
    // 공통: 탭바·뒤로
    ['.tab', (s, {
      i
    }) => ({
      ...s,
      screen: ['feed', 'tab-picks', 'my'][i],
      stack: []
    })], ['.ds-nav__side:first-child .glass-btn', s => back(s)],
    // 추천 기준 곡
    ['.device', onSeed((s, {
      target
    }) => s.tip && !target.closest('.ic-info-circle') ? {
      tip: 0
    } : undefined)],
    // 말풍선은 바깥을 누르면 닫힌다. ⓘ를 다시 누르면 2초를 다시 센다
    ['.ds-popup .ds-button, .dim', onSeed((s, {
      later,
      args
    }) => s.popup === true ? (later(args.os === 'android' ? 150 : 200, {
      popup: false
    }), {
      popup: 'leaving'
    }) : {})], ['.ic-info-circle', onSeed((s, {
      later
    }) => {
      const tip = Date.now();
      later(2200, x => x.tip === tip ? {
        ...x,
        tip: 0
      } : x);
      return {
        tip
      };
    })], ['.ds-filter-chip', onSeed((s, {
      el
    }) => ({
      genre: el.textContent
    }))], ['.ds-track-row', onSeed((s, {
      i
    }) => {
      const c = shown(s)[i].cover;
      if (s.selected.includes(c)) return {
        selected: s.selected.filter(x => x !== c)
      };
      return s.selected.length >= 3 ? {
        popup: true
      } : {
        selected: [...s.selected, c]
      };
    })], ['.ds-seed-tray__slot:not(.is-empty)', onSeed((s, {
      i
    }) => ({
      selected: s.selected.filter((_, j) => j !== i)
    }))], ['.ds-nav__action:not(.is-disabled)', onSeed(s => back(s, {
      saved: [...s.selected]
    }))], ['.ds-empty .ds-button', onSeed(s => ({
      ...s,
      screen: 'feed',
      stack: []
    }))],
    // 마이페이지
    ['.ds-settings-card', s => go(s, 'profile')], ['.ds-settings-toggle', s => ({
      following: !s.following
    })], ['.ds-settings-row', (s, {
      el
    }) => ROWS[el.textContent.trim()] ? go(s, ROWS[el.textContent.trim()], {
      genre: '전체',
      selected: [...s.saved],
      tip: 0,
      popup: false
    }) : {}],
    // 디깅 프로필
    ['.ds-seg span', (s, {
      i
    }) => ({
      range: i
    })], ['.ds-section a', s => go(s, 'history', {
      editing: true
    })], ['.ds-link-row', s => go(s, 'history', {
      editing: false
    })], ['.ds-my-pick', s => go(s, 'picks')],
    // 좋아요 기록: 편집 ↔ 완료
    ['.ds-nav__action', s => s.screen === 'history' ? {
      editing: !s.editing
    } : undefined],
    // 아티스트 요청: + → 시트 → 보내기 → 「요청 완료」 1.5초 뒤 닫히고 맨 위에 대기 중
    ['.ds-nav .glass-btn:has(.ic-plus)', () => ({
      sheet: true,
      sent: false
    })], ['.ds-request-form__send', (s, {
      later
    }) => {
      later(1500, x => ({
        ...x,
        sheet: false,
        sent: false,
        requests: [{
          artist: '검정치마',
          status: 'pending',
          date: '2026년 10월 16일'
        }, ...x.requests]
      }));
      return {
        sent: true
      };
    }], ['.dim', s => s.screen === 'requests' ? {
      sheet: false
    } : undefined],
    // 차단한 유저: 줄 = 밀어서 보이기, 차단 해제 = 지우기
    ['.ds-user b', (s, {
      el
    }) => ({
      users: s.users.filter(u => u !== s.swiped),
      swiped: ''
    })], ['.ds-user', (s, {
      i
    }) => ({
      swiped: s.swiped === s.users[i] ? '' : s.users[i]
    })]]
  })
}`,...o.parameters?.docs?.source}}};export{o as My,me as __namedExportsOrder,Be as default};
