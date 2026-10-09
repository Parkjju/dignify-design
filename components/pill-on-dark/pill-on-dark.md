# Pill on dark (미디어 위 알약)

> 상태: 구현됨(iOS) — 피드·픽 재생 전용

## 언제 쓰나
아트워크를 깐 어두운 지면 위의 작은 정보 알약. 버튼이 아닌 것(표시)과 버튼인 것(모드 전환)을 같은 모양으로 쓴다.

## Variants
| variant | 지면 | 테두리 | 글꼴 | 쓰는 곳 |
|---|---|---|---|---|
| chip (표시) | `color.fillOnDark` | `color.strokeOnDark` | 11 semibold, white 90% | 카드 "비슷한 곡: …" / 장르 — **한 자리만**, 둘 중 하나 |
| mode (버튼) | white 20% | white 25% | 12 medium + ⇆ 9 bold | "하입한 곡 따라가는 중" / "무작위" — 탭하면 전환 |
| query (버튼) | `color.brand` | — | 12 medium + ✕ | 검색 결과 보는 중, 탭하면 전체 피드 |
| badge (표시) | `color.scrimStrong` | `color.strokeOnDark` | `typography.label` | "이번 주 특집 3/5", "@닉네임의 픽 3/12" |

## 수치
| 항목 | chip·mode·query | badge |
|---|---|---|
| 여백 | 좌우 `spacing.x2-5`, 상하 5 | 좌우 `spacing.x3-5`, 상하 7 |
| 라운드 | `radius.full` | `radius.full` |

## 하지 말 것
- 밝은 지면에 쓰지 않는다. 밝은 지면의 선택형 칩은 따로 명세한다.
- chip을 두 개 나란히 띄우지 않는다. 근거가 있는 카드와 없는 카드가 섞여 "얘만 왜 이유가 있지"가 된다.
