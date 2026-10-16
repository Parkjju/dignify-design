# Popup (알림 권유)

> 상태: 구현됨(iOS)

## 언제 쓰나
시스템 알림 권한을 묻기 **직전**의 우리 쪽 설득 화면. 이번 주 특집을 다 본 직후, 픽을 올린 직후에만.

## Anatomy
```
      ┌ 흰 카드, radius.large, 좌우 32 ┐
      │          [BrandMark 44]        │
      │        title2 제목              │
      │   body 설명(textSecondary)      │
      │   [ Primary 버튼 56 ]           │
      │          나중에                  │ ← body textTertiary
      └────────────────────────────────┘
  배경 scrimStrong, 바깥 탭 = 나중에
```

## 문구
| 상황 | 제목 | 설명 |
|---|---|---|
| 이번 주 특집 끝 | 이번 주 특집, 여기까지예요 | 방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요? |
| 픽 올림 | 픽을 올렸어요 | 올린 픽에 🔥가 달리면 바로 알려드릴게요. |

## 확인 팝업 (seed_picker_opened 1.0)
`mark: false, decline: ''` — 브랜드마크·「나중에」 없이 제목·설명·확인 버튼 하나. 비율을 따로 둔다(`.ds-popup--notice`): 폭 300, 안쪽 위 `spacing.x6`·좌우·아래 `spacing.x5`, 제목 `typography.headline`, 설명 `typography.body` `textSecondary`(제목 아래 `spacing.x1_5`), 설명–버튼 `spacing.x5`, 버튼 높이 48·15 semibold. 막힌 동작의 이유를 알릴 때(추천 기준 곡 4번째 선택 → 「선택한 곡 중 1개를 해제해 주세요 / 3개까지 선택할 수 있어요」). 바깥 탭도 닫힘.

## 띄우기·닫기 모션 (2026-10-16)
딤과 카드를 **따로** 움직인다. 그냥 나타나면(지금 Android) 깜빡이고, 통째로 페이드만 하면(지금 iOS `.transition(.opacity)`) 카드가 뜨는 순간이 안 읽힌다. OS 시스템 대화상자의 느낌을 따른다.

| | 등장 | 닫힘 |
|---|---|---|
| iOS | 딤 0.25s 페이드 · 카드 scale 1.2 → 1 + 페이드 0.3s, 감속(튕김 없음) | 딤·카드 같이 0.2s 페이드, 카드 크기 그대로 |
| Android | 딤 0.2s 페이드 · 카드 scale 0.9 → 1 + 페이드 0.2s, 감속 | 딤·카드 0.15s 페이드, 카드 1 → 0.9, 가속 |

- 동작 줄이기 설정이면 크기 변화 없이 페이드만.
- iOS: 딤은 `.transition(.opacity)`, 카드는 `.transition(.asymmetric(insertion: .scale(scale: 1.2).combined(with: .opacity), removal: .opacity))` + `withAnimation(.spring(duration: 0.3, bounce: 0))`. 딤과 카드를 한 `.transition`으로 묶지 않는다.
- Android: 딤 `AnimatedVisibility(fadeIn(tween(200)), fadeOut(tween(150)))`, 카드 `fadeIn(tween(200, easing = LinearOutSlowInEasing)) + scaleIn(initialScale = 0.9f)` / `fadeOut(tween(150, easing = FastOutLinearInEasing)) + scaleOut(targetScale = 0.9f)`.
- 시안: Screens › 3. 마이(추천 기준 곡 4번째) · 1. 피드(이번 주 특집 끝) 프로토타입 Controls `os`로 두 OS를 바꿔 본다.

## 플랫폼
| iOS | `PushOptInPopup` (`Features/Feed/PushOptInPopup.swift`) |
|---|---|
