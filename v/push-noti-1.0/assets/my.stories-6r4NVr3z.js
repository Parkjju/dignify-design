import{l as B,b as a,g as r}from"./live-Bknvkivv.js";import{S as g}from"./registry-DPwe9rP5.js";import{S as d,B as f,A as m,a as D,H as A,M as E,D as h,N as k,b as v}from"./my-VHlG4OtS.js";import{c as y}from"./feed-DwD2T2fi.js";import{d as S}from"./picks-DwwDZwyF.js";import{L as p,P as w,T as _}from"./data-0w-2XlOy.js";import"./button-WsS0bk8m.js";import"./search-bar-B9JuTYWr.js";import"./seed-tile-MVKHPOZQ.js";import"./seed-tray-ibQD2q-w.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";import"./nav-bar-BifwbVIu.js";import"./settings-row-BQgDJDqd.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./section-header-Poff_ct_.js";import"./crate-cell-Oc_AW0U_.js";import"./track-row-B5dkUGq0.js";import"./filter-chip-CQBSxEKR.js";import"./tooltip-CwYDS6Q8.js";import"./empty-state-CSFNeurQ.js";import"./popup-BZ63RXv_.js";import"./link-row-CsaWuRq8.js";import"./pick-card-C10KLQzv.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./text-field-DUcLJXXO.js";import"./keyboard-C8TAjGT_.js";import"./user-row-DefBl9Ex.js";import"./system-alert-CRt7fUDq.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-vbsY4sZA.js";import"./recent-searches-DcMiK4AA.js";import"./track-detail-BoXY4nYS.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./consent-sheet-B1-zkaR8.js";import"./toast-EU6A1_2o.js";import"./menu-sheet-CLnGtBRH.js";import"./tab-bar-BI7PIY6z.js";const he={title:"Screens/3. 마이",parameters:{layout:"centered"}},i=e=>g[e][2],l={"추천 기준 곡":"seed","아티스트 요청":"requests",알림:"alerts","차단한 유저":"blocked"},b=e=>e.genre==="전체"?e.tracks:e.tracks.filter(n=>n.genre===e.genre),u=e=>(n,s)=>n.screen==="seed"?e(n,s):void 0,c=e=>(n,s)=>n.screen==="alerts"?e(n,s):void 0,o=(e,n)=>{const s=Date.now();return n(3e3,t=>t.toastId===s?{...t,toastLeaving:!0}:t),n(3300,t=>t.toastId===s?{...t,toast:""}:t),{toast:e,toastLeaving:!1,toastId:s}},q=(e,n)=>({my:()=>v({...i("my-page"),following:e.following}),alerts:()=>k({ad:e.ad,night:e.night,permission:e.permission,toast:e.toast,toastLeaving:e.toastLeaving}),profile:()=>h({...i("digging-profile"),range:e.range}),picks:()=>E(i("my-picks")),history:()=>A({...i("hype-history"),editing:e.editing}),seed:()=>D({tracks:e.tracks,genre:e.genre,selected:e.selected,saved:e.saved,fullHint:n.fullHint,tooltip:!!e.tip,popup:e.popup,os:n.os}),requests:()=>m({...i("artist-requests"),requests:e.requests,sheet:e.sheet,sent:e.sent}),blocked:()=>f({users:e.users,swiped:e.swiped}),feed:()=>y({track:_.cannons}),"tab-picks":()=>S({picks:w})})[e.screen](),C={name:"마이",args:{start:"my",liked:!0,saved:[],fullHint:d[1],os:"ios",ad:!0,permission:"on",fail:!1},argTypes:{start:{control:"inline-radio",options:["my","alerts","seed","profile","requests"],description:"시작 화면(‹ 누르면 마이페이지로)"},ad:{description:"알림 — 들어올 때 광고성 수신 동의 상태(야간도 같이)"},permission:{control:"inline-radio",options:["on","off","unset"],description:"알림 — 기기 알림 권한: 켜짐 · 꺼짐 · 설정 전(앞에서 OS 권한 팝업이 안 떴음)"},fail:{description:"알림 — 토글 저장이 실패하는 경우 보기(토글은 그대로, 실패 토스트)"},liked:{description:"좋아요한 곡이 있는지 — 끄면 추천 기준 곡이 빈 화면"},saved:{control:"check",options:p.map(e=>e.cover),description:"추천 기준 곡에 들어올 때 이미 고정된 곡"},fullHint:{control:"inline-radio",options:d,description:"3곡 다 골랐을 때 트레이 안내 — 명세 문구는 두 줄로 깨진다"},os:{control:"inline-radio",options:["ios","android"],description:"팝업 띄우기·닫기 모션 — 각 OS 시스템 대화상자 느낌"}},render:B({init:e=>({screen:e.start,stack:e.start==="my"?[]:["my"],following:!0,range:1,editing:!1,ad:e.ad,night:e.ad,permission:e.permission,toast:"",toastLeaving:!1,tracks:e.liked?p:[],genre:"전체",selected:[...e.saved],saved:[...e.saved],tip:0,popup:!1,requests:i("artist-requests").requests,sheet:!1,sent:!1,users:i("blocked-users").users,swiped:""}),view:q,taps:[[".tab",(e,{i:n})=>({...e,screen:["feed","tab-picks","my"][n],stack:[]})],[".ds-nav__side:first-child .glass-btn",e=>a(e)],[".device",u((e,{target:n})=>e.tip&&!n.closest(".ic-info-circle")?{tip:0}:void 0)],[".ds-popup .ds-button, .dim",u((e,{later:n,args:s})=>e.popup===!0?(n(s.os==="android"?150:200,{popup:!1}),{popup:"leaving"}):{})],[".ic-info-circle",u((e,{later:n})=>{const s=Date.now();return n(2200,t=>t.tip===s?{...t,tip:0}:t),{tip:s}})],[".ds-filter-chip",u((e,{el:n})=>({genre:n.textContent}))],[".ds-track-row",u((e,{i:n})=>{const s=b(e)[n].cover;return e.selected.includes(s)?{selected:e.selected.filter(t=>t!==s)}:e.selected.length>=3?{popup:!0}:{selected:[...e.selected,s]}})],[".ds-seed-tray__slot:not(.is-empty)",u((e,{i:n})=>({selected:e.selected.filter((s,t)=>t!==n)}))],[".ds-nav__action:not(.is-disabled)",u(e=>a(e,{saved:[...e.selected]}))],[".ds-empty .ds-button",u(e=>({...e,screen:"feed",stack:[]}))],[".ds-settings-toggle",c((e,{i:n,later:s,args:t})=>n===1&&!e.ad?o("need-consent",s):t.fail?o("fail",s):n===0?{ad:!e.ad,night:!e.ad&&e.night,...o(e.ad?"off":"on",s)}:{night:!e.night,...o(e.night?"night-off":"night-on",s)})],[".ds-settings-row--value",c(()=>({}))],[".ds-settings-card",e=>r(e,"profile")],[".ds-settings-toggle",e=>({following:!e.following})],[".ds-settings-row",(e,{el:n})=>l[n.textContent.trim()]?r(e,l[n.textContent.trim()],{genre:"전체",selected:[...e.saved],tip:0,popup:!1}):{}],[".ds-seg span",(e,{i:n})=>({range:n})],[".ds-section a",e=>r(e,"history",{editing:!0})],[".ds-link-row",e=>r(e,"history",{editing:!1})],[".ds-my-pick",e=>r(e,"picks")],[".ds-nav__action",e=>e.screen==="history"?{editing:!e.editing}:void 0],[".ds-nav .glass-btn:has(.ic-plus)",()=>({sheet:!0,sent:!1})],[".ds-request-form__send",(e,{later:n})=>(n(1500,s=>({...s,sheet:!1,sent:!1,requests:[{artist:"검정치마",status:"pending",date:"2026년 10월 16일"},...s.requests]})),{sent:!0})],[".dim",e=>e.screen==="requests"?{sheet:!1}:void 0],[".ds-user b",(e,{el:n})=>({users:e.users.filter(s=>s!==e.swiped),swiped:""})],[".ds-user",(e,{i:n})=>({swiped:e.swiped===e.users[n]?"":e.users[n]})]]})},ke=["My"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '마이',
  args: {
    start: 'my',
    liked: true,
    saved: [],
    fullHint: SEED_FULL_HINTS[1],
    os: 'ios',
    ad: true,
    permission: 'on',
    fail: false
  },
  argTypes: {
    start: {
      control: 'inline-radio',
      options: ['my', 'alerts', 'seed', 'profile', 'requests'],
      description: '시작 화면(‹ 누르면 마이페이지로)'
    },
    ad: {
      description: '알림 — 들어올 때 광고성 수신 동의 상태(야간도 같이)'
    },
    permission: {
      control: 'inline-radio',
      options: ['on', 'off', 'unset'],
      description: '알림 — 기기 알림 권한: 켜짐 · 꺼짐 · 설정 전(앞에서 OS 권한 팝업이 안 떴음)'
    },
    fail: {
      description: '알림 — 토글 저장이 실패하는 경우 보기(토글은 그대로, 실패 토스트)'
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
      ad: a.ad,
      night: a.ad,
      permission: a.permission,
      toast: '',
      toastLeaving: false,
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
    // 알림: 서버가 받은 뒤에만 토글이 바뀐다(실패면 그대로 + 실패 토스트)
    ['.ds-settings-toggle', onAlerts((s, {
      i,
      later,
      args
    }) => {
      if (i === 1 && !s.ad) return toast('need-consent', later);
      if (args.fail) return toast('fail', later);
      if (i === 0) return {
        ad: !s.ad,
        night: !s.ad && s.night,
        ...toast(s.ad ? 'off' : 'on', later)
      }; // 광고성을 끄면 야간도 꺼진다
      return {
        night: !s.night,
        ...toast(s.night ? 'night-off' : 'night-on', later)
      };
    })], ['.ds-settings-row--value', onAlerts(() => ({}))],
    // 설정 전 = 무반응(2026-11-17), 그 밖 = 설정 앱 Dignify 알림 화면
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
}`,...C.parameters?.docs?.source}}};export{C as My,ke as __namedExportsOrder,he as default};
