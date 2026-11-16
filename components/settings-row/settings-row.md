# SettingsRow

> 상태: 구현됨(iOS)

## 언제 쓰나
마이페이지·마이 › 알림 목록. 그룹 사이는 구분선(좌우 20, 상하 12 — 푸시알림 기획 2026-11-12, 이전 8).

## Variants
| variant | 구성 | 높이 |
|---|---|---|
| link | 15 regular + `chevron.right` 13 semibold `color.border` | 50 (이전 48, 푸시알림 기획) |
| destructive | 15 `color.destructive`, 화살표 없음(계정 삭제) | 50 |
| value | 15 + 오른쪽 상태 글자 15 `textTertiary` + 화살표(마이 › 알림 「기기 알림 권한 · 켜짐/꺼짐/설정 전」) | 50 |
| toggle | 15 + 스위치(tint brand), 아래 설명 `typography.caption` `textTertiary` | 상하 12 |
| card | 아이콘 40(brand, radius 10) + 제목 `bodyMedium` + 부제 `caption` + 화살표, 지면 `surface` radius 14 | 안쪽 12 |

## 같은 계열
- 상세 목록(아티스트 요청·차단한 유저)은 시스템 `List(.plain)` — 구분선이 행 아래로 깔리고, 밀어서 삭제·차단 해제.
