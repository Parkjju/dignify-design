# FeedTrack (피드 트랙 카드)

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
피드·픽 재생의 한 장. 지면 규칙은 `patterns/feed-media-surface.md`.

## Anatomy
```
         ┌ 아트워크 (화면 − 48), radius.large, 그림자 ┐
         └──────────────────────────────────────────┘
 (비슷한 곡: Blame)        ← pill-on-dark chip, 한 자리
 Cannons                   ← 18 bold white
 Phil Wickham              ← 14 textOnDarkSecondary
 [삽 28]            (◎) (⇪) ← 하입 / 상세 · 공유 22 iconOnDark
```

## States
| | 하입 아이콘 |
|---|---|
| 하입 전 | `color.textTertiary` |
| 하입 후 | `color.brand` (더블탭 시 버스트 이펙트) |

## 플랫폼
| iOS | `TrackCardView` (`Features/Feed/FeedView.swift`) |
|---|---|
