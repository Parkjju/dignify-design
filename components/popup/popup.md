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

## 플랫폼
| iOS | `PushOptInPopup` (`Features/Feed/PushOptInPopup.swift`) |
|---|---|
