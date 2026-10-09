# Button

> 상태: 구현됨(iOS·Android) — Outline·Destructive는 iOS만

변형: `primary` · `small` · `block` · `fab` · `dark` · `outline-block` · `outline` · `destructive` · `apple`

## 언제 쓰나
- **Primary**: 화면 하단 확정 버튼. 한 화면에 하나. 온보딩·팝업·What's New에서 쓴다.
- **Outline**: 보조 액션(재시도, 더 보기). Primary 옆에 둘 때 위계를 낮추는 용도.
- **Destructive**: 삭제·차단·로그아웃. 지면 없이 텍스트만 쓴다(확인 다이얼로그 안에서 쓰는 게 기본).

## 화면별 변형
| variant | 쓰는 곳 | 수치 |
|---|---|---|
| `small` | 새 픽 하단 바 "다음" | 높이 40, 좌우 20, `radius.medium`, 14 semibold |
| `block` | 디깅 프로필 "내 취향 공유" | 상하 15, radius 14, 16 semibold, 아이콘 |
| `fab` | Picks "새 픽" | 캡슐 48, 좌우 20, 15 semibold, 그림자 brand 35% |
| `dark` / `outline-block` | 트랙 상세 Apple Music / YouTube Music | 높이 48, `radius.medium`, 14 semibold |
| `apple` | 로그인 | Sign in with Apple(.continue · .black), 높이 56 |

## Anatomy
```
Primary   ┌────────────────────────────┐  full width, 56
          │           Label            │
          └────────────────────────────┘
Outline       ( Label )                     capsule, 40
Destructive     Label                       텍스트만
```

## Variants · States
| variant | 지면 | 텍스트 | 테두리 | pressed |
|---|---|---|---|---|
| primary | `color.brand` | white | — | scale 0.97, opacity 0.9 |
| primary · disabled | `color.borderLight` | `color.textTertiary` | — | — |
| primary · busy | `color.brand` | 스피너(white, 20) | — | — |
| outline | 투명 | `color.textPrimary` | `color.border` 1 | opacity 0.65 |
| destructive | 투명 | `color.destructive` | — | opacity 0.55 |

pressed 애니메이션은 easeOut 0.15s.

## 수치
| 항목 | primary | outline | destructive |
|---|---|---|---|
| 높이 | 56 | 40 | — |
| 좌우 여백 | — (full width) | `spacing.x5` | — |
| 라운드 | `radius.medium` | `radius.full` | — |
| 글꼴 | 16 semibold ※ | `typography.callout` | `typography.body` |

※ iOS는 16 semibold, Android는 `typography.headline`(17 semibold)로 갈라져 있다. 다음 손볼 때 `headline`으로 맞춘다.

## 플랫폼
| | 이름 | 위치 |
|---|---|---|
| iOS | `DSPrimaryButtonStyle` · `DSOutlineButtonStyle` · `DSDestructiveButtonStyle` | `Core/DesignSystem/DSButtonStyle.swift` |
| Android | `PrimaryButton(label, enabled, busy)` | `core/designsystem/DesignSystem.kt` |

## 하지 말 것
- Primary를 한 화면에 둘 이상 두지 않는다. 두 번째는 Outline.
- Material3 `Button`·SwiftUI `.borderedProminent`로 대신하지 않는다. 테마 색이 브랜드와 어긋난다.
