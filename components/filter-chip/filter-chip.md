# FilterChip (밝은 지면 필터 칩)

> 상태: 제안 (seed_picker_opened 1.0, 2026-10-16)

## 언제 쓰나
밝은 지면에서 목록을 한 가지 기준으로 거를 때. 지금은 마이 「추천 기준 곡」 장르 필터 하나. 어두운 지면(피드·픽 재생)의 표시용 알약은 PillOnDark.

## Anatomy
```
(전체) ( 록 ) (R&B/소울) (힙합/랩) …→   ← 한 줄 가로 스크롤, 좌우 20
```

## States
| 상태 | 지면 | 글자 |
|---|---|---|
| 기본 | `color.surface` | `color.textPrimary` |
| 고름 | `color.textPrimary` | `color.textOnDark` |

하나만 고른다(라디오). 「전체」가 기본값이고 맨 앞에 고정.

**가로 스크롤**(스크롤 막대 없음). 좌우 여백 20은 스크롤 안쪽 여백이라 끝까지 밀면 마지막 칩 뒤에도 20이 남는다. 칩을 골라도 스크롤 위치는 그대로 — 화면 밖 칩을 고르면 그 칩이 보이게만 민다(iOS `ScrollViewReader`·`scrollTo(anchor: nil)`).

## 수치
| 항목 | 토큰 |
|---|---|
| 높이 | 34 (탭 영역은 위아래로 44까지 넓힌다) |
| 좌우 여백 | `spacing.x3_5` |
| 칩 간격 | `spacing.x2` |
| 라운드 | `radius.full` |
| 글꼴 | `typography.callout` |

## 플랫폼
| | 이름 | 위치 |
|---|---|---|
| iOS | (신규) | `Features/MyPage/SeedPickerView.swift` |
| Android | (신규) | `feature/mypage/SeedPickerScreen.kt` |

## 하지 말 것
- 고른 칩을 `brand`로 칠하지 않는다. 이 화면에서 brand는 「고른 곡」(체크·트레이 n/3·저장)에 쓰여서, 칩까지 brand면 무엇을 골랐는지가 섞인다.
