# TabBar

> 상태: 구현됨(iOS — 시스템 탭바 · Android — 자체 구현)

## 언제 쓰나
메인 3탭(Feed · Picks · My). 화면 아래에 떠 있는 캡슐. 시트·풀스크린(픽 재생)에서는 안 보인다.

## Anatomy
```
   ╭───────────────────────────────╮
   │ (⌂ Feed)    ▣ Picks    ◉ My  │   272 × 62, 아래 21
   ╰───────────────────────────────╯
     └ 선택 칸: 캡슐 지면 + tint
```

## Variants
| 지면 | 탭바 지면 | 아이콘·라벨 | 선택 칸 |
|---|---|---|---|
| 라이트 (마이 등) | 흰 유리 78% + 그림자 | `#1C1C1E` | 회색 16% 지면 + `color.brand` |
| 피드(미디어) | 회색 유리 62% | `#1C1C1E` | 검정 14% 지면 + `color.brand` |
| Picks(다크) | 짙은 유리 55% | white | 흰 12% 지면 + `color.pickAccent` |

## 수치
| 항목 | 값 |
|---|---|
| 아이콘 | SF Symbol 25 — `house.fill` · `square.stack.fill` · `person.crop.circle.fill` |
| 라벨 | 10 semibold. **iOS는 번역하지 않는다**(한국어 기기에서도 Feed·Picks·My) |
| tint | `color.brand` (`MainTabView` `.tint(DSColor.brand)`) |

## 플랫폼
| | 이름 | 위치 |
|---|---|---|
| iOS | `MainTabView` + `AppTab` | `App/` |
| Android | 하단 내비게이션 | 피드·픽·마이 라벨 한국어 |

## 시안
`screens/_shared.css` `.tabbar` · `.tabbar.media` · `.tabbar.dark`
