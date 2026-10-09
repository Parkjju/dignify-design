# SettingsRow

> 상태: 구현됨(iOS)

## 언제 쓰나
마이페이지 목록. 그룹 사이는 구분선(좌우 20, 상하 8).

## Variants
| variant | 구성 | 높이 |
|---|---|---|
| link | 15 regular + `chevron.right` 13 semibold `color.border` | 48 |
| destructive | 15 `color.destructive`, 화살표 없음(계정 삭제) | 48 |
| toggle | 15 + 스위치(tint brand), 아래 설명 `typography.caption` `textTertiary` | 상하 12 |
| card | 아이콘 40(brand, radius 10) + 제목 `bodyMedium` + 부제 `caption` + 화살표, 지면 `surface` radius 14 | 안쪽 12 |

## 같은 계열
- 상세 목록(아티스트 요청·차단한 유저)은 시스템 `List(.plain)` — 구분선이 행 아래로 깔리고, 밀어서 삭제·차단 해제.
