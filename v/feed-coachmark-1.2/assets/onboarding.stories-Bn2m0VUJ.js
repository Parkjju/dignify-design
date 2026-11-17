import{s as o}from"./_story-D-tG-CXm.js";import"./registry-CZAsr1aF.js";import"./tab-bar-BI7PIY6z.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-C1iKZhb9.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-C-FxAWsy.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./pick-card-C10KLQzv.js";import"./menu-sheet-CLnGtBRH.js";import"./nav-bar-BUPyutce.js";import"./section-header-Poff_ct_.js";import"./track-row-CL319CUY.js";import"./text-field-DUcLJXXO.js";import"./settings-row-B05oNaJP.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./crate-cell-ChYFYZbk.js";import"./link-row-CsaWuRq8.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./user-row-DefBl9Ex.js";import"./seed-tile-WcSoN9D9.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";const K={title:"Screens/4. 온보딩",parameters:{layout:"centered"}},r=o("onboarding-signin"),t=o("onboarding-signin-gate"),e=o("guest-prompt",{},{tab:{control:"inline-radio",options:["picks","my"]}}),i=o("onboarding-loading"),n=o("onboarding-seed",{},{titleFont:{control:"inline-radio",options:["title1","title2","headline"],description:"제목 타이포 토큰 — title1 24 · title2 18 · headline 17"},titleBreak:{control:"boolean",description:'"노래를" 뒤에서 줄바꿈'}}),s=o("onboarding-building"),M=["SignIn","SignInGate","GuestPrompt","Loading","Seed","Building"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"story('onboarding-signin')",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"story('onboarding-signin-gate')",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story('guest-prompt', {}, {
  tab: {
    control: 'inline-radio',
    options: ['picks', 'my']
  }
})`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"story('onboarding-loading')",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story('onboarding-seed', {}, {
  titleFont: {
    control: 'inline-radio',
    options: ['title1', 'title2', 'headline'],
    description: '제목 타이포 토큰 — title1 24 · title2 18 · headline 17'
  },
  titleBreak: {
    control: 'boolean',
    description: '"노래를" 뒤에서 줄바꿈'
  }
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"story('onboarding-building')",...s.parameters?.docs?.source}}};export{s as Building,e as GuestPrompt,i as Loading,n as Seed,r as SignIn,t as SignInGate,M as __namedExportsOrder,K as default};
