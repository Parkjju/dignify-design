import{l as k,b as t,g as i}from"./live-Bknvkivv.js";import{P as l,a as m,b as h,c as f,d as C}from"./picks-DwwDZwyF.js";import{P as y,T as r}from"./data-0w-2XlOy.js";import"./pick-card-C10KLQzv.js";import"./button-WsS0bk8m.js";import"./menu-sheet-CLnGtBRH.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-vbsY4sZA.js";import"./nav-bar-BifwbVIu.js";import"./search-bar-B9JuTYWr.js";import"./section-header-Poff_ct_.js";import"./track-row-B5dkUGq0.js";import"./text-field-DUcLJXXO.js";import"./tab-bar-BI7PIY6z.js";const L={title:"Screens/2. Picks",parameters:{layout:"centered"}},o=[{date:"2026년 10월 7일",tracks:[r.seasons,r.cheeky,r.bulssi]},{date:"2026년 10월 5일",tracks:[r.bluff,r.always,r.fireworks,r.comedown]}],p=[r.loveya,r.ohio,r.tomboy,r.bigvoid,r.billann,r.truth],u="digger_lover",_=e=>{if(e.screen==="play"){const n=e.picks[e.pick];return l({track:p[e.track%p.length],chip:"록",hyped:e.hyped,nickname:n.nickname,index:e.track+1,total:n.trackCount})}if(e.screen==="menu"){const n=e.picks[e.pick];return m({picks:e.picks,mine:n.nickname===u,nickname:n.nickname})}const c=o.flatMap(n=>n.tracks).filter(n=>e.chosen.includes(n.cover)).sort((n,s)=>e.chosen.indexOf(n.cover)-e.chosen.indexOf(s.cover));return e.screen==="compose"?h({selected:e.chosen.length,sections:o.map(n=>({...n,tracks:n.tracks.map(s=>({...s,number:e.chosen.indexOf(s.cover)+1,playing:e.playing===s.cover}))}))}):e.screen==="title"?f({title:"",fallback:`${c[0].artist}${c.length>1?` 외 ${c.length-1}명`:""}`,tracks:c.map((n,s)=>({...n,number:s+1}))}):C({picks:e.picks})},d=e=>o.flatMap(c=>c.tracks)[e],a={name:"Picks",args:{picks:y},render:k({init:e=>({screen:"list",picks:e.picks,pick:0,track:0,hyped:!1,chosen:[],playing:""}),view:_,taps:[[".ds-feed-header__close",e=>e.screen==="play"?t(e):void 0],[".ds-feed-track__hype",e=>e.screen==="play"?{hyped:!e.hyped}:void 0],[".ds-feed-track",e=>e.screen==="play"?{track:e.track+1,hyped:!1}:void 0],[".ds-menu-sheet__row, .ds-menu-sheet__cancel, .dim",e=>e.screen==="menu"?t(e):void 0],[".ds-pick-card__more",(e,{i:c})=>i(e,"menu",{pick:c})],[".ds-pick-card__react:not(.is-static)",(e,{i:c})=>({picks:e.picks.map((n,s)=>s!==c?n:{...n,reacted:!n.reacted,reactions:n.reactions+(n.reacted?-1:1)})})],[".ds-pick-card__share",()=>({})],[".ds-pick-card",(e,{i:c})=>i(e,"play",{pick:c,track:0,hyped:!1})],[".ds-button--fab",e=>i(e,"compose",{chosen:[],playing:""})],[".ds-nav__secondary",e=>t(e)],[".ds-track-row__select",(e,{i:c})=>{if(e.screen!=="compose")return;const n=d(c).cover;return{chosen:e.chosen.includes(n)?e.chosen.filter(s=>s!==n):[...e.chosen,n]}}],[".ds-track-row",(e,{i:c})=>e.screen==="compose"?{playing:e.playing===d(c).cover?"":d(c).cover}:{}],[".ds-button--small:not(.is-disabled)",e=>i(e,"title")],[".ds-nav .glass-btn",e=>e.screen==="title"?t(e):void 0],[".ds-button--primary",e=>{if(e.screen!=="title")return;const c=o.flatMap(s=>s.tracks).filter(s=>e.chosen.includes(s.cover)),n={nickname:u,time:"방금",title:`${c[0].artist}${c.length>1?` 외 ${c.length-1}명`:""}`,covers:c.map(s=>s.cover),trackCount:c.length,reactions:0,mine:!0};return{screen:"list",stack:[],picks:[n,...e.picks]}}]]})},j=["Picks"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Picks',
  args: {
    picks: PICKS
  },
  render: live({
    init: a => ({
      screen: 'list',
      picks: a.picks,
      pick: 0,
      track: 0,
      hyped: false,
      chosen: [],
      playing: ''
    }),
    view,
    taps: [
    // 픽 재생
    ['.ds-feed-header__close', s => s.screen === 'play' ? back(s) : undefined], ['.ds-feed-track__hype', s => s.screen === 'play' ? {
      hyped: !s.hyped
    } : undefined], ['.ds-feed-track', s => s.screen === 'play' ? {
      track: s.track + 1,
      hyped: false
    } : undefined],
    // 메뉴 시트 — 어느 줄이든 닫힌다(신고·차단·수정·삭제는 시안 범위 밖)
    ['.ds-menu-sheet__row, .ds-menu-sheet__cancel, .dim', s => s.screen === 'menu' ? back(s) : undefined],
    // 목록
    ['.ds-pick-card__more', (s, {
      i
    }) => go(s, 'menu', {
      pick: i
    })], ['.ds-pick-card__react:not(.is-static)', (s, {
      i
    }) => ({
      picks: s.picks.map((p, j) => j !== i ? p : {
        ...p,
        reacted: !p.reacted,
        reactions: p.reactions + (p.reacted ? -1 : 1)
      })
    })], ['.ds-pick-card__share', () => ({})], ['.ds-pick-card', (s, {
      i
    }) => go(s, 'play', {
      pick: i,
      track: 0,
      hyped: false
    })], ['.ds-button--fab', s => go(s, 'compose', {
      chosen: [],
      playing: ''
    })],
    // 새 픽 — 곡 고르기
    ['.ds-nav__secondary', s => back(s)], ['.ds-track-row__select', (s, {
      i
    }) => {
      if (s.screen !== 'compose') return undefined;
      const c = rowTrack(i).cover;
      return {
        chosen: s.chosen.includes(c) ? s.chosen.filter(x => x !== c) : [...s.chosen, c]
      };
    }], ['.ds-track-row', (s, {
      i
    }) => s.screen === 'compose' ? {
      playing: s.playing === rowTrack(i).cover ? '' : rowTrack(i).cover
    } : {}], ['.ds-button--small:not(.is-disabled)', s => go(s, 'title')],
    // 제목 → 올리기: 맨 위에 내 픽으로
    ['.ds-nav .glass-btn', s => s.screen === 'title' ? back(s) : undefined], ['.ds-button--primary', s => {
      if (s.screen !== 'title') return undefined;
      const chosen = POOL.flatMap(d => d.tracks).filter(t => s.chosen.includes(t.cover));
      const mine = {
        nickname: ME,
        time: '방금',
        title: \`\${chosen[0].artist}\${chosen.length > 1 ? \` 외 \${chosen.length - 1}명\` : ''}\`,
        covers: chosen.map(t => t.cover),
        trackCount: chosen.length,
        reactions: 0,
        mine: true
      };
      return {
        screen: 'list',
        stack: [],
        picks: [mine, ...s.picks]
      };
    }]]
  })
}`,...a.parameters?.docs?.source}}};export{a as Picks,j as __namedExportsOrder,L as default};
