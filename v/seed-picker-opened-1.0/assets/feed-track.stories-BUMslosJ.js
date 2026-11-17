import{F as t}from"./feed-track-C1s8HvLq.js";import{d as s,C as n}from"./_story-BijmNlD_.js";import"./pill-on-dark-AFKXiiFh.js";const o="# FeedTrack (피드 트랙 카드)\n\n> 상태: 구현됨(iOS·Android)\n\n## 언제 쓰나\n피드·픽 재생의 한 장. 지면 규칙은 `patterns/feed-media-surface.md`.\n\n## Anatomy\n```\n         ┌ 아트워크 (화면 − 48), radius.large, 그림자 ┐\n         └──────────────────────────────────────────┘\n                       (⇪) (•••) ← 공유 · 더보기(트랙 상세) 22 iconOnDark, 아트워크 아래 12\n (비슷한 곡: Blame)\n Cannons                     ← 18 bold white\n Phil Wickham        [♡ 28] ← 14 textOnDarkSecondary · 하입은 오른쪽, 아래끝을 아티스트명 아래선에 맞춤\n```\n1.1(2026-10-11)에서 바뀐 배치다. 이전: 제목 아래 줄에 왼쪽 하입, 오른쪽 상세(◎)·공유. 하입 크기는 28 그대로. 정보 줄 아래끝은 safe+72 → safe+92(20 올림, 탭바와 간격 23 → 43).\n\n## States\n| | 하입 아이콘 (1.1부터 하트) |\n|---|---|\n| 하입 전 | 빈 하트 `ic-heart` (SF `heart`), `color.textTertiary` |\n| 하입 후 | 찬 하트 `ic-heart-fill` (SF `heart.fill`), `color.brand` |\n| 좋아요 누르는 순간(`burst`) | **한 시간표로 같이 움직인다.** 0~0.3s: 가운데 큰 찬 하트(160 `color.brand`) 팝(오버슈트) · 버튼 1.35배 팡(0.15s 정점) · 하트 조각 8개가 솟음 → `hold`(기본 0.3s): 큰 하트 머묾, 조각은 떨어지기 시작 → 0.4s: 큰 하트가 1.08배로 커지며 페이드, 조각도 같은 순간 다 떨어져 사라짐. 1회, 총 1.0s. 버튼·더블탭 둘 다, 좋아요 취소 때는 없음. 코치마크 하입 단계도 이 모션을 쓴다 |\n\n버스트 길이 ≈ 1.2초(조각이 다 떨어질 때까지). `speed`로 빠르기 조절(1 = 기본, 2 = 두 배 빠르게).\n\n## 플랫폼\n| iOS | `TrackCardView` (`Features/Feed/FeedView.swift`) |\n|---|---|\n",u={title:"Components/Content/FeedTrack",tags:["autodocs"],parameters:s(o),render:t,argTypes:{cover:{control:"select",options:n},width:{table:{disable:!0}},height:{table:{disable:!0}},top:{table:{disable:!0}},bottom:{table:{disable:!0}}},args:{cover:"a-cannons",title:"Cannons",artist:"Phil Wickham",chip:"비슷한 곡: Blame",hyped:!1}},e={},c={speed:{control:{type:"range",min:.5,max:3,step:.1},description:"버스트 빠르기 (1 = 기본)"}},r={args:{hyped:!0,burst:!0,speed:1},argTypes:c,name:"좋아요 버스트"},a={args:{hyped:!0,cover:"a-loveya",title:"LOVE YA!",artist:"혁오",chip:"록"}},l=["Default","Burst","Hyped"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    hyped: true,
    burst: true,
    speed: 1
  },
  argTypes: speed,
  name: '좋아요 버스트'
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    hyped: true,
    cover: 'a-loveya',
    title: 'LOVE YA!',
    artist: '혁오',
    chip: '록'
  }
}`,...a.parameters?.docs?.source}}};export{r as Burst,e as Default,a as Hyped,l as __namedExportsOrder,u as default};
