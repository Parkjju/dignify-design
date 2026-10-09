# SearchBar

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
피드·픽 작성·시드 고르기의 검색 입력. 세 곳이 같은 컴포넌트를 쓴다.

## Anatomy
```
┌───────────────────────────────────┐
│ 🔍  placeholder              ⓧ    │  40
└───────────────────────────────────┘
 icon  field                   clear(입력 있을 때만)
```

## 수치
| 항목 | 토큰 |
|---|---|
| 높이 | 40 |
| 좌우 여백 | `spacing.x3_5` |
| 아이콘–필드 간격 | `spacing.x2` |
| 라운드 | `radius.medium` |
| 지면 / 테두리 | `color.surface` / `color.borderLight` 1 |
| 입력 글꼴 | 14 regular (`typography.callout`보다 한 단계 가볍다) |
| 아이콘 | 15 semibold, `color.textTertiary` |
| placeholder | `color.textTertiary` |
| 커서 | `color.brand` |

## 동작
- return(검색)을 누르면 **키보드를 내리고 포커스를 푼다.** 결과를 가리지 않게 하려는 것이다. 호출부가 아니라 컴포넌트 안에서 처리한다.
- 검색창이 있는 지면은 빈 곳을 탭하면 키보드가 내려간다(Android `Modifier.dismissKeyboardOnTap()`). **피드는 예외다.** 탭이 재생/일시정지이고 더블탭이 하입이라 겹친다.
- 피드의 검은 배경 위에서도 쓰므로 지면은 반드시 불투명한 `color.surface`로 깐다.

## 플랫폼
| | 이름 | 위치 |
|---|---|---|
| iOS | `DSSearchBar` | `Core/DesignSystem/DSSearchBar.swift` |
| Android | `DSSearchBar` | `core/designsystem/DesignSystem.kt` |

## 하지 말 것
- Material3 `OutlinedTextField`를 쓰지 않는다. 밝은 지면을 전제한 색이라 피드에서 글씨가 묻힌다.
