# EmptyState (빈 목록)

> 상태: 제안 (seed_picker_opened 1.0, 2026-10-16)

## 언제 쓰나
목록 화면에 보여 줄 게 하나도 없을 때, 빈 화면 대신 **왜 비었는지 + 다음에 할 일**을 준다. 지금은 마이 「추천 기준 곡」(좋아요한 곡 0개).

## Anatomy
```
        ( ! )          ← 원 56 brandLight, 「!」 brand
  아직 좋아요한 곡이 없어요   ← title2
 피드에서 마음에 드는 곡을 골라주세요 ← body textSecondary
     [ 곡 찾으러 가기 ]    ← Button small
```
화면 세로 가운데(내비·탭바 사이).

## 수치
| 항목 | 토큰 |
|---|---|
| 아이콘 원 | 56, `color.brandLight` / 「!」 `typography.title1` `color.brand` (iOS `exclamationmark` bold) |
| 간격 | 아이콘→제목 `spacing.x4`, 제목→설명 `spacing.x1_5`, 설명→버튼 `spacing.x6` |
| 좌우 | `spacing.x8` |
| 버튼 | Button `small` |

## 플랫폼
| | 이름 | 위치 |
|---|---|---|
| iOS | (신규) | `Features/MyPage/SeedPickerView.swift` 빈 목록 분기 |
| Android | (신규) | `feature/mypage/SeedPickerScreen.kt` |

## 하지 말 것
- 불러오기 실패를 이걸로 보여 주지 않는다. 실패는 「불러오지 못했어요」 + 다시 시도.
