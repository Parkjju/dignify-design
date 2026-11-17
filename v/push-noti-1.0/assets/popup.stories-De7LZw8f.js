import{a as t}from"./popup-BZ63RXv_.js";import{d as o,o as i}from"./_story-BijmNlD_.js";const C="# Popup (알림 권유)\n\n> 상태: 구현됨(iOS)\n\n## 언제 쓰나\n시스템 알림 권한을 묻기 **직전**의 우리 쪽 설득 화면. 이번 주 특집을 다 본 직후, 픽을 올린 직후에만.\n\n## Anatomy\n```\n      ┌ 흰 카드, radius.large, 좌우 32 ┐\n      │          [BrandMark 44]        │\n      │        title2 제목              │\n      │   body 설명(textSecondary)      │\n      │   [ Primary 버튼 56 ]           │\n      │          나중에                  │ ← body textTertiary\n      └────────────────────────────────┘\n  배경 color.dim(35%), 바깥 탭 = 나중에\n```\n\n## 문구\n| 상황 | 제목 | 설명 |\n|---|---|---|\n| 이번 주 특집 끝 | 이번 주 특집, 여기까지예요 | 방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요? |\n| 픽 올림 | 픽을 올렸어요 | 올린 픽에 🔥가 달리면 바로 알려드릴게요. |\n\n## 확인 팝업 (seed_picker_opened 1.0)\n`mark: false, decline: ''` — 브랜드마크·「나중에」 없이 제목·설명·확인 버튼 하나. 비율을 따로 둔다(`.ds-popup--notice`): 폭 300, 안쪽 위 `spacing.x6`·좌우·아래 `spacing.x5`, 제목 `typography.headline`, 설명 `typography.body` `textSecondary`(제목 아래 `spacing.x1_5`), 설명–버튼 `spacing.x5`, 버튼 높이 48·15 semibold. 막힌 동작의 이유를 알릴 때(추천 기준 곡 4번째 선택 → 「선택한 곡 중 1개를 해제해 주세요 / 3개까지 선택할 수 있어요」). 바깥 탭도 닫힘.\n\n## 광고성 동의형 (푸시알림 기획 2026-11-12)\n`row: true` — 브랜드마크 없이 제목·설명, 아래 「나중에 | 알림 받기」 가로 두 칸. 광고성 정보 수신 동의를 받는 팝업 전부(첫 실행 P02 · 야간 P14).\n\n```\n  ┌ 흰 카드 radius.large, 화면 좌우 20(폭 353), 안쪽 20 ┐\n  │  title2 제목 — {아티스트}만 brand(<em>)         │\n  │  bodySmall 설명 textSecondary (제목 아래 6)     │\n  │                                    ↕ 14         │\n  │  [ 나중에 ]  10  [ 알림 받기 ]   ← 두 칸 같은 폭, 높이 48 │\n  └─────────────────────────────────────────────────┘\n  딤 color.dim(35%)\n```\n\n| 항목 | 값 |\n|---|---|\n| 카드 | 폭 = 화면 − `spacing.x5`×2, 안쪽 `spacing.x5`, `radius.large`, 사이 `spacing.x3_5` |\n| 제목 | `typography.title2`, 줄 높이 1.4, 가운데. 강조는 `color.brand` |\n| 설명 | `typography.bodySmall` `textSecondary`, 줄 높이 1.66, 제목 아래 `spacing.x1_5` |\n| 버튼 줄 | 높이 48, 사이 `spacing.x2_5`, 두 칸 같은 폭. 왼쪽 「나중에」·「아니요」 `body` `textTertiary` 글자만, 오른쪽 primary `radius.medium` 15 semibold |\n| 바깥 탭 | **닫지 않는다** — 동의는 명시적 선택만 받는다 |\n\n| 쓰는 곳 | 제목 | 설명 | 왼쪽 |\n|---|---|---|---|\n| 첫 실행(P02) | 좋아하는 *{아티스트}*의 신곡,⏎바로 알려드릴까요? | '알림 받기'를 누르면 광고성 정보 수신에 동의해요. | 나중에 |\n| 야간(P14) | 밤에도 아티스트 소식을 알려드릴까요? | '알림 받기'를 누르면 야간(오전 8:00 ~ 오후9:00)⏎광고성 정보 수신에 동의해요. | 아니요 |\n\n## 딤 (2026-11-12)\n팝업 딤은 `color.dim`(검정 35%) — 시트 딤과 같은 값. 이전 `scrimStrong`(55%)는 아트워크 위 배지용으로만 남는다.\n\n## 띄우기·닫기 모션 (2026-10-16)\n딤과 카드를 **따로** 움직인다. 그냥 나타나면(지금 Android) 깜빡이고, 통째로 페이드만 하면(지금 iOS `.transition(.opacity)`) 카드가 뜨는 순간이 안 읽힌다. OS 시스템 대화상자의 느낌을 따른다.\n\n| | 등장 | 닫힘 |\n|---|---|---|\n| iOS | 딤 0.25s 페이드 · 카드 scale 1.2 → 1 + 페이드 0.3s, 감속(튕김 없음) | 딤·카드 같이 0.2s 페이드, 카드 크기 그대로 |\n| Android | 딤 0.2s 페이드 · 카드 scale 0.9 → 1 + 페이드 0.2s, 감속 | 딤·카드 0.15s 페이드, 카드 1 → 0.9, 가속 |\n\n- 동작 줄이기 설정이면 크기 변화 없이 페이드만.\n- iOS: 딤은 `.transition(.opacity)`, 카드는 `.transition(.asymmetric(insertion: .scale(scale: 1.2).combined(with: .opacity), removal: .opacity))` + `withAnimation(.spring(duration: 0.3, bounce: 0))`. 딤과 카드를 한 `.transition`으로 묶지 않는다.\n- Android: 딤 `AnimatedVisibility(fadeIn(tween(200)), fadeOut(tween(150)))`, 카드 `fadeIn(tween(200, easing = LinearOutSlowInEasing)) + scaleIn(initialScale = 0.9f)` / `fadeOut(tween(150, easing = FastOutLinearInEasing)) + scaleOut(targetScale = 0.9f)`.\n- 시안: Screens › 3. 마이(추천 기준 곡 4번째) · 1. 피드(이번 주 특집 끝) 프로토타입 Controls `os`로 두 OS를 바꿔 본다.\n\n## 플랫폼\n| iOS | `PushOptInPopup` (`Features/Feed/PushOptInPopup.swift`) |\n|---|---|\n",p={title:"Components/Overlays/Popup",tags:["autodocs"],parameters:o(C),decorators:i("rgba(0,0,0,.35)"),render:t,args:{}},e={},n={args:{title:"픽을 올렸어요",message:"올린 픽에 🔥가 달리면 바로 알려드릴게요."}},u={args:{mark:!1,decline:"",accept:"확인",title:"선택한 곡 중 1개를 해제해 주세요",message:"3개까지 선택할 수 있어요"}},r={args:{row:!0,title:"좋아하는 <em>혁오</em>의 신곡,<br>바로 알려드릴까요?",message:"'알림 받기'를 누르면 광고성 정보 수신에 동의해요."},decorators:[a=>`<div style="width:393px">${a()}</div>`]},s={args:{row:!0,decline:"아니요",title:"밤에도 아티스트 소식을 알려드릴까요?",message:"'알림 받기'를 누르면 야간(오전 8:00 ~ 오후9:00)<br>광고성 정보 수신에 동의해요."},decorators:[a=>`<div style="width:393px">${a()}</div>`]},m=["WeeklySetDone","PickPosted","Notice","Consent","ConsentNight"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: '픽을 올렸어요',
    message: '올린 픽에 🔥가 달리면 바로 알려드릴게요.'
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mark: false,
    decline: '',
    accept: '확인',
    title: '선택한 곡 중 1개를 해제해 주세요',
    message: '3개까지 선택할 수 있어요'
  }
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    row: true,
    title: '좋아하는 <em>혁오</em>의 신곡,<br>바로 알려드릴까요?',
    message: "'알림 받기'를 누르면 광고성 정보 수신에 동의해요."
  },
  decorators: [story => \`<div style="width:393px">\${story()}</div>\`]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    row: true,
    decline: '아니요',
    title: '밤에도 아티스트 소식을 알려드릴까요?',
    message: "'알림 받기'를 누르면 야간(오전 8:00 ~ 오후9:00)<br>광고성 정보 수신에 동의해요."
  },
  decorators: [story => \`<div style="width:393px">\${story()}</div>\`]
}`,...s.parameters?.docs?.source}}};export{r as Consent,s as ConsentNight,u as Notice,n as PickPosted,e as WeeklySetDone,m as __namedExportsOrder,p as default};
