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
 Cannons                     ← 18 bold white
 Phil Wickham        [♡ 28] ← 14 textOnDarkSecondary · 하입은 오른쪽, 아래끝을 아티스트명 아래선에 맞춤
```
1.1(2026-10-11)에서 바뀐 배치다. 이전: 제목 아래 줄에 왼쪽 하입, 오른쪽 상세(◎)·공유. 하입 크기는 28 그대로. 정보 줄 아래끝은 safe+72 → safe+92(20 올림, 탭바와 간격 23 → 43).

## States
| | 하입 아이콘 (1.1부터 하트) |
|---|---|
| 하입 전 | 빈 하트 `ic-heart` (SF `heart`), `color.textTertiary` |
| 하입 후 | 찬 하트 `ic-heart-fill` (SF `heart.fill`), `color.brand` |
| 좋아요 누르는 순간(`burst`) | ① 아트워크 가운데 큰 찬 하트 160 `color.brand`: 팝 0.45s(오버슈트) → `hold`(기본 0.3s) 머묾 → 1.08배로 커지며 페이드 0.4s, 1회 ② 버튼이 1.35배로 팡 → 하트 조각 8개가 튀었다가 떨어짐. 버튼·더블탭 둘 다, 좋아요 취소 때는 없음. 코치마크 하입 단계도 이 모션을 쓴다 |

버스트 길이 ≈ 1.2초(조각이 다 떨어질 때까지). `speed`로 빠르기 조절(1 = 기본, 2 = 두 배 빠르게).

## 플랫폼
| iOS | `TrackCardView` (`Features/Feed/FeedView.swift`) |
|---|---|
