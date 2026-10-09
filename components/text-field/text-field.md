# TextField

> 상태: 구현됨(iOS)

## 언제 쓰나
한 줄 입력 — 새 픽 제목, 아티스트 요청. 검색은 `SearchBar`를 쓴다.

## 수치
| 항목 | 새 픽 제목 | 아티스트 요청 |
|---|---|---|
| 높이 | 48 | 46 |
| 좌우 여백 | `spacing.x4` | `spacing.x3-5` |
| 라운드 | `radius.medium` | `radius.small` |
| 지면 | `color.surface` | `color.surface` |
| 글꼴 | 15 | `typography.body` |
| 커서 | `color.brand` | `color.brand` |

라벨 행(선택): 왼쪽 `typography.label` `textSecondary`, 오른쪽 글자 수 12 `textTertiary`(한도 도달 시 `destructive`).
