import{s as a}from"./_story-D-tG-CXm.js";import{F as I,a as V,T as l}from"./registry-CZAsr1aF.js";import"./tab-bar-BI7PIY6z.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-C1iKZhb9.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-C-FxAWsy.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./pick-card-C10KLQzv.js";import"./menu-sheet-CLnGtBRH.js";import"./nav-bar-BUPyutce.js";import"./section-header-Poff_ct_.js";import"./track-row-CL319CUY.js";import"./text-field-DUcLJXXO.js";import"./settings-row-B05oNaJP.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./crate-cell-ChYFYZbk.js";import"./link-row-CsaWuRq8.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./user-row-DefBl9Ex.js";import"./seed-tile-WcSoN9D9.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";const y=[l.billann,l.seasons,l.loveya,l.bigvoid,l.wss];function X({speed:F=1,handOffset:U=-18,captionBelow:j=25,hold:M=.3,peek:G=32}={}){const n=document.createElement("div");n.className="sb-live";let c="double-tap",H=0,i=!1,Y=0,W=0,p=!1,o=null;const h=1/F,d=(e=!1)=>{const r=y[H%y.length];n.innerHTML=c==="feed"?I({track:r,chip:"",hyped:i,burst:e,speed:F,hold:M}):V({track:r,gesture:c,hyped:i,handOffset:U,captionBelow:j,speed:F,hold:M,peek:G,once:!0}),Y=performance.now()},_=".device > div:has(> .ds-feed-track)",J=e=>{p=!0,n.querySelector(".ds-coach-gesture")?.classList.add("is-leaving"),setTimeout(()=>{p=!1,e()},200*h)},$=()=>c==="swipe-up"||c==="feed",R=e=>{const r=n.querySelector(_),t=document.createElement("div");t.innerHTML=I({track:y[(H+1)%y.length],chip:""});const s=t.querySelector(_);r.after(s);const q=r.querySelector(".ds-coach-gesture");q&&(q.style.transition="none");const O=r.querySelector(".ds-feed-track"),z=new DOMMatrix(getComputedStyle(O).transform).m42;O.style.animation="none";const P=r.querySelector(".ds-coach-gesture__hand");return P&&(P.style.animationPlayState="paused"),{y0:e-z,t0:performance.now(),dy:z,moved:!1,cur:r,next:s,coach:q,card:O,hand:P,H:r.offsetHeight}},m=(e,r,t=0)=>{const s=t?`transform ${t}ms cubic-bezier(.2,.8,.2,1), opacity ${t}ms`:"none";e.cur.style.transition=e.next.style.transition=s,e.cur.style.transform=`translateY(${r}px)`,e.next.style.transform=`translateY(calc(100% + ${r}px))`,e.coach&&(e.coach.style.transition=s,e.coach.style.opacity=Math.max(0,1+r/(e.H*.25)))},Q=e=>{const r=[e.card,e.hand].filter(Boolean);r.forEach(t=>{t.style.animation="none"}),e.card.offsetWidth,r.forEach(t=>{t.style.animation=t.style.animationPlayState=""})},N=e=>{e.next.remove(),e.cur.style.transform=e.cur.style.transition="",e.coach&&(e.coach.style.transition=""),Q(e)},T=(e,r)=>{const t=320*h;p=!0,m(e,r?-e.H:0,t),setTimeout(()=>{p=!1,r?(c="feed",H++,i=!1,d()):N(e)},t)};return n.addEventListener("pointerdown",e=>{if(!(p||!$())){o=R(e.clientY);try{n.setPointerCapture(e.pointerId)}catch{}m(o,o.dy)}}),n.addEventListener("pointermove",e=>{if(!o)return;let r=e.clientY-o.y0;Math.abs(r)>8&&(o.moved=!0),r>0&&(r*=.25),o.dy=r,m(o,r)}),n.addEventListener("pointercancel",()=>{o&&(T(o,!1),o=null)}),n.addEventListener("pointerup",e=>{if(p)return;const r=performance.now();if(o){const s=o;if(o=null,s.moved)return T(s,s.dy<-s.H*.2||s.dy/(r-s.t0)<-.6);m(s,0,160*h),setTimeout(()=>N(s),160*h)}const t=r-W<350;if(W=t?0:r,c==="double-tap"&&t)return i=!0,c="hyped",d();if(c==="hyped"&&!t&&r-Y>400)return J(()=>{c="swipe-up",d()});c==="feed"&&t&&(i=!i,d(i))}),n.addEventListener("wheel",e=>{if(e.deltaY<30||p||o||!$())return;const r=R(0);m(r,0),requestAnimationFrame(()=>T(r,!0))},{passive:!0}),d(),n}const qe={title:"Screens/1. 피드",parameters:{layout:"centered"}},f={mode:{control:"inline-radio",options:["following","random"]},lift:{control:{type:"range",min:0,max:80,step:2},description:"제목·아티스트·좋아요 줄을 더 올리는 양 (0 = 지금 앱, 탭바와 간격 23)"}},C=a("feed",{},f),g=a("feed",{hyped:!0,track:"loveya",chip:"록"},f,"피드 — 좋아요함"),B=a("feed",{hyped:!0,burst:!0,track:"loveya",chip:"록",speed:1},{...f,speed:{control:{type:"range",min:.5,max:3,step:.1},description:"모션 빠르기"}},"피드 — 좋아요 누르는 순간"),S=a("feed",{context:"이번 주 특집 3/5",track:"seasons",chip:"인디"},f,"피드 — 이번 주 특집"),v=a("feed",{query:"실리카겔",track:"bigvoid",chip:"록"},f,"피드 — 검색 결과"),w=a("feed-search"),D=a("track-detail"),k=a("feed-push-popup"),u={gesture:{control:"inline-radio",options:["double-tap","hyped","swipe-up"]},handOffset:{control:{type:"range",min:-160,max:160,step:2},description:"손 중심 ↕ 아트워크 가운데 기준"},captionBelow:{control:{type:"range",min:-120,max:120,step:1},description:"캡션이 아트워크 아래로 나오는 길이"},speed:{control:{type:"range",min:.5,max:3,step:.1},description:"모션 빠르기 (1 = 기본, 2 = 두 배 빠르게)"}},x=a("feed-coach",{},u),E=a("feed-coach-hyped",{},u),K={peek:{control:{type:"range",min:0,max:120,step:2},description:"손이 쓸어 올릴 때 화면이 따라 올라가는 거리(px, 0 = 안 움직임)"}},b=a("feed-coach-swipe",{},{...u,...K}),A=a("whats-new"),L={name:"코치마크 — 직접 해 보기",render:X,args:{speed:1,hold:.3,handOffset:-18,captionBelow:25,peek:32},argTypes:{speed:u.speed,hold:{control:{type:"range",min:0,max:3,step:.1},description:"더블탭 후 하트 아이콘이 다 커진 뒤 머무는 시간(초)"},handOffset:u.handOffset,captionBelow:u.captionBelow,...K}},Oe=["Feed","Hyped","Liking","WeeklySet","SearchResult","Search","TrackDetail","PushPopup","Coach","CoachHyped","CoachSwipe","WhatsNew","CoachLive"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story('feed', {}, mode)",...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story('feed', {
  hyped: true,
  track: 'loveya',
  chip: '록'
}, mode, '피드 — 좋아요함')`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`story('feed', {
  hyped: true,
  burst: true,
  track: 'loveya',
  chip: '록',
  speed: 1
}, {
  ...mode,
  speed: {
    control: {
      type: 'range',
      min: 0.5,
      max: 3,
      step: 0.1
    },
    description: '모션 빠르기'
  }
}, '피드 — 좋아요 누르는 순간')`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story('feed', {
  context: '이번 주 특집 3/5',
  track: 'seasons',
  chip: '인디'
}, mode, '피드 — 이번 주 특집')`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story('feed', {
  query: '실리카겔',
  track: 'bigvoid',
  chip: '록'
}, mode, '피드 — 검색 결과')`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story('feed-search')",...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"story('track-detail')",...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story('feed-push-popup')",...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story('feed-coach', {}, gesture)",...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story('feed-coach-hyped', {}, gesture)",...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story('feed-coach-swipe', {}, {
  ...gesture,
  ...peek
})`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"story('whats-new')",...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '코치마크 — 직접 해 보기',
  render: live,
  args: {
    speed: 1,
    hold: 0.3,
    handOffset: -18,
    captionBelow: 25,
    peek: 32
  },
  argTypes: {
    speed: gesture.speed,
    hold: {
      control: {
        type: 'range',
        min: 0,
        max: 3,
        step: 0.1
      },
      description: '더블탭 후 하트 아이콘이 다 커진 뒤 머무는 시간(초)'
    },
    handOffset: gesture.handOffset,
    captionBelow: gesture.captionBelow,
    ...peek
  }
}`,...L.parameters?.docs?.source}}};export{x as Coach,E as CoachHyped,L as CoachLive,b as CoachSwipe,C as Feed,g as Hyped,B as Liking,k as PushPopup,w as Search,v as SearchResult,D as TrackDetail,S as WeeklySet,A as WhatsNew,Oe as __namedExportsOrder,qe as default};
