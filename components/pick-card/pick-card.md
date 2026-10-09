# PickCard

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
Picks 탭 목록, 내가 만든 픽 목록, 새 픽 미리보기. 지면이 라이트여도 카드는 항상 다크다.

## Anatomy
```
┌ pickSurface, radius.large, 안쪽 14 ─────────────┐
│ @nickname ✓ · 12분 전                    ···   │  15 semibold / 13 white 45%
│ 픽 제목                                         │  17 bold
│ ┌ 220, radius 18 ───────────────────────────┐ │
│ │ 첫 커버 blur 28 + scrim                    │ │
│ │     [+9][  ][  ]  커버 150 ×3, 40씩, 0→4°   │ │
│ └───────────────────────────────────────────┘ │
│ (🔥 3)  ♪ 12곡  ▶ 재생 27회              (⇪)   │
└────────────────────────────────────────────────┘
```

## 수치
| 항목 | 토큰 / 값 |
|---|---|
| 카드 간격 | `spacing.x3-5`, 좌우 `spacing.x4` |
| 인증 배지 | `checkmark.seal.fill` 13, `color.pickAccent` |
| 남은 곡 수 | 앞 커버 위 검정 50% + 26 bold |
| 반응 버튼 | 높이 36, `color.fillOnDarkSubtle`, 🔥 15 + 숫자 14 semibold(0이면 숫자 없음). 내가 눌렀으면 brand 18% + brand 숫자 |
| 곡 수 · 재생 횟수 | 13 medium, `color.textOnDarkTertiary`. 재생 횟수는 5회 이상일 때만, 표시 전용(알약 없음) |
| 공유 | 원 36, `color.fillOnDarkSubtle` |

## 동작
- 미디어 탭 = 픽 재생(줌 전환 → `screens/pick-play.html`).
- `···` = 메뉴 시트(`components/menu-sheet/menu-sheet.md`).
- 내 픽엔 반응을 누를 수 없다(표시만).

## 플랫폼
| | 이름 |
|---|---|
| iOS | `PickCard` · `PickThumbnailStack` (`Features/Picks/PickListView.swift`) |
