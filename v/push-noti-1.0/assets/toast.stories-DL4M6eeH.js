import{T as r}from"./toast-EU6A1_2o.js";import{d as t}from"./_story-BijmNlD_.js";const i=`# Toast (처리 결과 알림)

> 상태: 제안 (푸시알림 기획 1.0, 2026-11-12)

## 언제 쓰나
설정을 바꾼 **결과**를 잠깐 알린다. 3초 뒤 페이드 아웃, 누르는 동작 없음. 지금 앱의 광고성 수신 결과 통지(\`MainTabView\` 확인 팝업 \`DSNoticePopup\`)를 대신한다. 막힌 이유를 알리고 확인을 받아야 하면 확인형 팝업(Popup \`ds-popup--notice\`)을 쓴다.

피드 장르 밖 안내(「장르 밖 트랙도 보여줄게요」, 위쪽 캡슐)는 따로다 — 그건 그대로 둔다.

## Anatomy
\`\`\`
┌ toastSurface(#151719 85%) + 블러, radius.medium ────────┐
│ 알림 설정을 저장했어요                    ← callout 흰색   │
│ Dignify의 광고성 정보 수신동의가 2026-11-12에 처리되었습니다. ← caption textOnDarkSecondary │
└─────────────────────────────────────────────────────────┘
  화면 좌우 18, 탭바 위 8. 피드(어두운 지면)·라이트 지면 같은 모양
\`\`\`

## 문구
| kind | 제목 | 설명 |
|---|---|---|
| on | 알림 설정을 저장했어요 | Dignify의 광고성 정보 수신동의가 {YYYY-MM-DD}에 처리되었습니다. |
| off | 알림 설정을 저장했어요 | Dignify의 광고성 정보 수신거부가 {YYYY-MM-DD}에 처리되었습니다. |
| night-on / night-off | 알림 설정을 저장했어요 | Dignify의 야간 광고성 정보 수신동의 / 수신거부가 {YYYY-MM-DD}에 처리되었습니다. |
| fail | 저장에 실패했어요. 다시 시도해 주세요. | — |
| need-consent | 광고성 정보 알림을 먼저 동의해야해요. | 광고성 정보 알림 수신을 동의해야 야간 알림을 설정할 수 있어요. |

- 날짜 = 서버가 처리한 날짜(응답값). 기기 날짜가 아니다
- 「Dignify의」(전송자)는 Figma 문구에 없지만 수신동의 처리 결과 통지 요건이라 넣었다(2026-11-16 결정, 기획 확인 필요)

## 수치
| 항목 | 값 |
|---|---|
| 폭 | 화면 − 36 (좌우 18) |
| 안쪽 | 위아래 \`spacing.x3\`, 좌우 \`spacing.x4\` |
| 줄 사이 | \`spacing.x1_5\` |
| 라운드 | \`radius.medium\` |
| 지면 | \`color.toastSurface\` + 배경 블러 20 |
| 위치 | 탭바 위 8 (기기 아래에서 91) |
| 모션 | 등장 0.2s 페이드 + 6 올라옴, 3초 뒤 0.3s 페이드 아웃. 동작 줄이기면 페이드만 |

## 플랫폼
| | 이름 | 위치 |
|---|---|---|
| iOS | (신규) | \`Core/DesignSystem/\` — \`PickListView.showToast\`를 공용으로 |
| Android | (신규) | \`core/designsystem/\` |
`,p={title:"Components/Overlays/Toast",tags:["autodocs"],parameters:t(i),render:r,decorators:[a=>`<div style="width:393px;padding:24px 0;display:flex;justify-content:center;background:#555">${a()}</div>`],argTypes:{kind:{control:"inline-radio",options:["on","off","night-on","night-off","fail","need-consent"]}},args:{kind:"on",date:"2026-11-12"}},n={},e={args:{kind:"off"}},s={args:{kind:"fail"}},o={args:{kind:"need-consent"}},m=["OptIn","OptOut","Failed","NeedConsent"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'off'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'fail'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'need-consent'
  }
}`,...o.parameters?.docs?.source}}};export{s as Failed,o as NeedConsent,n as OptIn,e as OptOut,m as __namedExportsOrder,p as default};
