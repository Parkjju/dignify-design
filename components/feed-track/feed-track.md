# FeedTrack (피드 트랙 카드)

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
피드·픽 재생의 한 장. 지면 규칙은 `patterns/feed-media-surface.md`.

## Anatomy
```
         ┌ 아트워크 (화면 − 48), radius.large, 그림자 ┐
         └──────────────────────────────────────────┘
                       (⇪) (•••) ← 공유 · 더보기(트랙 상세) 22 iconOnDark, 아트워크 아래 12
 (비슷한 곡: Blame)
 Cannons             [삽 28] ← 18 bold white · 하입은 제목 줄 오른쪽, 세로 가운데
 Phil Wickham                ← 14 textOnDarkSecondary
```
1.1(2026-10-11)에서 바뀐 배치다. 이전: 제목 아래 줄에 왼쪽 하입, 오른쪽 상세(◎)·공유. 하입 크기는 28 그대로.

## States
| | 하입 아이콘 |
|---|---|
| 하입 전 | `color.textTertiary` |
| 하입 후 | `color.brand` |
| 하입하는 순간(`burst`) | 버튼이 1.35배로 팡 → 삽 조각 8개가 위로 튀었다가 아래로 우수수 떨어지며 사라짐. 버튼·더블탭 둘 다 |

버스트 길이 ≈ 1.2초(조각이 다 떨어질 때까지). `speed`로 빠르기 조절(1 = 기본, 2 = 두 배 빠르게).

## 플랫폼
| iOS | `TrackCardView` (`Features/Feed/FeedView.swift`) |
|---|---|
