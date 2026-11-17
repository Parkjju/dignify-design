import{s as r}from"./_story-D-tG-CXm.js";import"./registry-CZAsr1aF.js";import"./tab-bar-BI7PIY6z.js";import"./feed-track-C1s8HvLq.js";import"./pill-on-dark-AFKXiiFh.js";import"./feed-header-C1iKZhb9.js";import"./search-bar-B9JuTYWr.js";import"./recent-searches-DcMiK4AA.js";import"./keyboard-C8TAjGT_.js";import"./track-detail-BoXY4nYS.js";import"./button-WsS0bk8m.js";import"./popup-C-FxAWsy.js";import"./coach-gesture-Dq0F-jUF.js";import"./release-notes-CceGxtLd.js";import"./pick-card-C10KLQzv.js";import"./menu-sheet-CLnGtBRH.js";import"./nav-bar-BUPyutce.js";import"./section-header-Poff_ct_.js";import"./track-row-CL319CUY.js";import"./text-field-DUcLJXXO.js";import"./settings-row-B05oNaJP.js";import"./segmented-D7ZHsLpe.js";import"./type-hero-BJMtIFIO.js";import"./stat-pair-HIKxk1E3.js";import"./lens-columns-CaUKUx6_.js";import"./my-pick-row-743uoX8l.js";import"./crate-cell-ChYFYZbk.js";import"./link-row-CsaWuRq8.js";import"./request-row-DPksExhh.js";import"./artist-request-form-BWYZfkOU.js";import"./user-row-DefBl9Ex.js";import"./seed-tile-WcSoN9D9.js";import"./feed-building-D3I5_bGi.js";import"./share-card-BszQgYcY.js";const T={title:"Screens/3. 마이",parameters:{layout:"centered"}},e=r("my-page"),s=r("digging-profile",{},{range:{control:"inline-radio",options:[0,1],labels:{0:"이번 주",1:"전체"}}}),t=r("digging-profile",{scroll:1180},{},"디깅 프로필 — 좋아요한 곡"),o=r("digging-profile",{locked:!0,stats:{headline:"제일 많이 듣는 건 록, 담는 건 얼터너티브.",dug:5,kept:2}},{},"디깅 프로필 — 잠김"),i=r("my-picks"),a=r("hype-history"),u=r("hype-history",{editing:!0},{},"좋아요 기록 — 편집"),p=r("seed-picker"),c=r("artist-requests"),m=r("artist-requests",{sheet:!0},{},"아티스트 요청 — 시트"),n=r("artist-requests",{sheet:!0,sent:!0},{},"아티스트 요청 — 보냄"),d=r("blocked-users"),V=["MyPage","DiggingProfile","DiggingProfileCrate","DiggingProfileLocked","MyPicks","HypeHistory","HypeHistoryEdit","SeedPicker","ArtistRequests","ArtistRequestSheet","ArtistRequestSent","BlockedUsers"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"story('my-page')",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story('digging-profile', {}, {
  range: {
    control: 'inline-radio',
    options: [0, 1],
    labels: {
      0: '이번 주',
      1: '전체'
    }
  }
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story('digging-profile', {
  scroll: 1180
}, {}, '디깅 프로필 — 좋아요한 곡')`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story('digging-profile', {
  locked: true,
  stats: {
    headline: '제일 많이 듣는 건 록, 담는 건 얼터너티브.',
    dug: 5,
    kept: 2
  }
}, {}, '디깅 프로필 — 잠김')`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"story('my-picks')",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"story('hype-history')",...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story('hype-history', {
  editing: true
}, {}, '좋아요 기록 — 편집')`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story('seed-picker')",...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"story('artist-requests')",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story('artist-requests', {
  sheet: true
}, {}, '아티스트 요청 — 시트')`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story('artist-requests', {
  sheet: true,
  sent: true
}, {}, '아티스트 요청 — 보냄')`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"story('blocked-users')",...d.parameters?.docs?.source}}};export{n as ArtistRequestSent,m as ArtistRequestSheet,c as ArtistRequests,d as BlockedUsers,s as DiggingProfile,t as DiggingProfileCrate,o as DiggingProfileLocked,a as HypeHistory,u as HypeHistoryEdit,e as MyPage,i as MyPicks,p as SeedPicker,V as __namedExportsOrder,T as default};
