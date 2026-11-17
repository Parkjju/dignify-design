import{l as d,b as l,g as p}from"./live-Bknvkivv.js";import{F as m}from"./feed-live-DLQu4X4t.js";import{N as c,b as B}from"./my-VHlG4OtS.js";import{d as f}from"./picks-DwwDZwyF.js";import{P as g}from"./data-0w-2XlOy.js";import"./feed-DwD2T2fi.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-vbsY4sZA.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-BZ63RXv_.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./consent-sheet-B1-zkaR8.js";import"./toast-EU6A1_2o.js";import"./system-alert-CRt7fUDq.js";import"./nav-bar-BifwbVIu.js";import"./settings-row-BQgDJDqd.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./section-header-Poff_ct_.js";import"./crate-cell-Oc_AW0U_.js";import"./seed-tray-ibQD2q-w.js";import"./track-row-B5dkUGq0.js";import"./filter-chip-CQBSxEKR.js";import"./tooltip-CwYDS6Q8.js";import"./empty-state-CSFNeurQ.js";import"./link-row-CsaWuRq8.js";import"./pick-card-C10KLQzv.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./text-field-DUcLJXXO.js";import"./user-row-DefBl9Ex.js";import"./menu-sheet-CLnGtBRH.js";import"./tab-bar-BI7PIY6z.js";const an={title:"Screens/6. 광고성 알림",parameters:{layout:"centered"}},C={"first-run":{ads:{ad:!1,permission:"unset"},feed:{consent:!0,likeSheet:!0}},like:{ads:{ad:!1,permission:"unset"},feed:{likeSheet:!0}},night:{ads:{ad:!0,permission:"on"},feed:{lead:"curation"}},settings:{ads:{ad:!0,night:!0,permission:"on"},screen:"alerts"},"push-pick":{ads:{ad:!0,permission:"on"},feed:{lead:"pick"}},"push-release":{ads:{ad:!0,permission:"on"},feed:{lead:"release"}}},i=(n,s)=>{const e=Date.now();return s(3e3,t=>t.toastId===e?{...t,toastLeaving:!0}:t),s(3300,t=>t.toastId===e?{...t,toast:""}:t),{toast:n,toastLeaving:!1,toastId:e}},o=n=>(s,e)=>s.screen==="alerts"?n(s,e):void 0,a={name:"광고성 알림",args:{start:"first-run",permission:"start",legal:!0,fail:!1,os:"ios"},argTypes:{start:{control:"inline-radio",options:Object.keys(C),description:"first-run 첫 실행 · like 좋아요 시점 · night 이번 주 특집 끝(야간) · settings 마이 › 알림 · push-pick/push-release 알림 탭 → 피드 앞 구간"},permission:{control:"inline-radio",options:["start","unset","on","off"],description:"기기 알림 권한 처음 값 — start면 시작점 기본값. 좋아요 시트는 설정 전(unset)일 때만 뜬다"},legal:{description:"좋아요 시트에 광고성 동의 문구 — Figma엔 없음(요건이라 추가, 기획 확인 대기)"},fail:{description:"마이 › 알림 토글 저장 실패 보기"},os:{control:"inline-radio",options:["ios","android"],description:"동의 팝업 띄우기·닫기 모션"}},render:d({init:n=>{const s=C[n.start],e={...s.ads,...n.permission==="start"?{}:{permission:n.permission}};return{screen:s.screen||"feed",stack:s.screen?["my"]:[],ads:e,feed:s.feed||{},toast:"",toastLeaving:!1,system:!1,following:!0}},view:(n,s,{set:e})=>({feed:()=>m({coach:!1,...n.feed,consent:!!n.feed.consent&&!n.ads.ad,ads:n.ads,legal:s.legal,os:s.os,onTab:t=>e(u=>({...u,screen:t==="my"?"my":"picks",stack:[],feed:{...u.feed,consent:!1}}))}),picks:()=>f({picks:g}),my:()=>B({following:n.following}),alerts:()=>c({ad:n.ads.ad,night:!!n.ads.night,permission:n.ads.permission,toast:n.toast,toastLeaving:n.toastLeaving,system:n.system})})[n.screen](),taps:[[".tab",(n,{i:s})=>n.screen==="feed"?void 0:{screen:["feed","picks","my"][s],stack:[],toast:""}],[".ds-nav__side:first-child .glass-btn",n=>l(n,{toast:""})],[".ds-settings-row",(n,{el:s})=>n.screen==="my"&&s.textContent.trim()==="알림"?p(n,"alerts"):void 0],[".ds-settings-toggle",n=>n.screen==="my"?{following:!n.following}:void 0],[".ds-system-alert__allow, .ds-system-alert__deny",o((n,{el:s,later:e})=>({ads:{...n.ads,permission:s.matches(".ds-system-alert__allow")?"on":"off"},system:!1,...n.pending?i(n.pending,e):{},pending:""}))],[".ds-system-alert-layer",o(()=>({}))],[".ds-settings-toggle",o((n,{i:s,later:e,args:t})=>{if(s===1&&!n.ads.ad)return i("need-consent",e);if(t.fail)return i("fail",e);if(s===0){const u=!n.ads.ad,r={...n.ads,ad:u,night:u?n.ads.night:n.ads.night===void 0?void 0:!1};return u&&n.ads.permission==="unset"?{ads:r,system:!0,pending:"on"}:{ads:r,...i(u?"on":"off",e)}}return{ads:{...n.ads,night:!n.ads.night},...i(n.ads.night?"night-off":"night-on",e)}})],[".ds-settings-row--value",o(()=>({}))]]})},rn=["Consent"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '광고성 알림',
  args: {
    start: 'first-run',
    permission: 'start',
    legal: true,
    fail: false,
    os: 'ios'
  },
  argTypes: {
    start: {
      control: 'inline-radio',
      options: Object.keys(START),
      description: 'first-run 첫 실행 · like 좋아요 시점 · night 이번 주 특집 끝(야간) · settings 마이 › 알림 · push-pick/push-release 알림 탭 → 피드 앞 구간'
    },
    permission: {
      control: 'inline-radio',
      options: ['start', 'unset', 'on', 'off'],
      description: '기기 알림 권한 처음 값 — start면 시작점 기본값. 좋아요 시트는 설정 전(unset)일 때만 뜬다'
    },
    legal: {
      description: '좋아요 시트에 광고성 동의 문구 — Figma엔 없음(요건이라 추가, 기획 확인 대기)'
    },
    fail: {
      description: '마이 › 알림 토글 저장 실패 보기'
    },
    os: {
      control: 'inline-radio',
      options: ['ios', 'android'],
      description: '동의 팝업 띄우기·닫기 모션'
    }
  },
  render: live({
    init: a => {
      const st = START[a.start];
      const ads = {
        ...st.ads,
        ...(a.permission === 'start' ? {} : {
          permission: a.permission
        })
      };
      return {
        screen: st.screen || 'feed',
        stack: st.screen ? ['my'] : [],
        ads,
        feed: st.feed || {},
        toast: '',
        toastLeaving: false,
        system: false,
        following: true
      };
    },
    view: (s, a, {
      set
    }) => ({
      // 피드는 피드 프로토타입을 그대로 넣는다. ads는 같은 객체라 피드에서 동의하면 바로 반영된다. 탭바 Picks·My → 바깥 화면으로
      feed: () => FeedLive({
        coach: false,
        ...s.feed,
        consent: !!s.feed.consent && !s.ads.ad,
        ads: s.ads,
        legal: a.legal,
        os: a.os,
        onTab: id => set(x => ({
          ...x,
          screen: id === 'my' ? 'my' : 'picks',
          stack: [],
          feed: {
            ...x.feed,
            consent: false
          }
        }))
      }),
      picks: () => PicksScreen({
        picks: PICKS
      }),
      my: () => MyPageScreen({
        following: s.following
      }),
      alerts: () => NotificationSettingsScreen({
        ad: s.ads.ad,
        night: !!s.ads.night,
        permission: s.ads.permission,
        toast: s.toast,
        toastLeaving: s.toastLeaving,
        system: s.system
      })
    })[s.screen](),
    taps: [['.tab', (s, {
      i
    }) => s.screen === 'feed' ? undefined : {
      screen: ['feed', 'picks', 'my'][i],
      stack: [],
      toast: ''
    }], ['.ds-nav__side:first-child .glass-btn', s => back(s, {
      toast: ''
    })], ['.ds-settings-row', (s, {
      el
    }) => s.screen === 'my' && el.textContent.trim() === '알림' ? go(s, 'alerts') : undefined], ['.ds-settings-toggle', s => s.screen === 'my' ? {
      following: !s.following
    } : undefined],
    // OS 권한 팝업(마이 › 알림에서 띄운 것)
    ['.ds-system-alert__allow, .ds-system-alert__deny', onAlerts((s, {
      el,
      later
    }) => {
      const ads = {
        ...s.ads,
        permission: el.matches('.ds-system-alert__allow') ? 'on' : 'off'
      };
      return {
        ads,
        system: false,
        ...(s.pending ? toast(s.pending, later) : {}),
        pending: ''
      };
    })], ['.ds-system-alert-layer', onAlerts(() => ({}))],
    // 마이 › 알림: 서버가 받은 뒤에만 토글이 바뀐다
    ['.ds-settings-toggle', onAlerts((s, {
      i,
      later,
      args
    }) => {
      if (i === 1 && !s.ads.ad) return toast('need-consent', later);
      if (args.fail) return toast('fail', later);
      if (i === 0) {
        const on = !s.ads.ad,
          ads = {
            ...s.ads,
            ad: on,
            night: on ? s.ads.night : s.ads.night === undefined ? undefined : false
          }; // 광고성을 끄면 야간도 꺼진다
        // 켜는데 기기 권한이 설정 전이면 OS 권한 팝업 → 고르면 토스트
        return on && s.ads.permission === 'unset' ? {
          ads,
          system: true,
          pending: 'on'
        } : {
          ads,
          ...toast(on ? 'on' : 'off', later)
        };
      }
      return {
        ads: {
          ...s.ads,
          night: !s.ads.night
        },
        ...toast(s.ads.night ? 'night-off' : 'night-on', later)
      };
    })],
    // 기기 알림 권한: 설정 전 = 무반응(2026-11-17), 그 밖 = 설정 앱 Dignify 알림 화면(시안에선 그대로)
    ['.ds-settings-row--value', onAlerts(() => ({}))]]
  })
}`,...a.parameters?.docs?.source}}};export{a as Consent,rn as __namedExportsOrder,an as default};
