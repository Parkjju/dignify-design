# 피드 미디어 지면

피드(와 픽 재생)는 앱의 라이트 고정 규칙 밖에 있다. **지면이 곧 아트워크다.**

## 레이어 (아래 → 위)
| 층 | 값 |
|---|---|
| 배경 | 같은 아트워크를 화면 가득, 1.1배 + blur 28 |
| 그라데이션 | 투명 0% → 검정 40% 35% → 검정 85% 75% (위 → 아래) |
| 카드 | 아트워크 폭 = 화면 − 48, `radius.large`, 그림자 검정 50% / 24 / y16. 위 safe+64 · 아래 safe+72 사이에서 세로 가운데 |
| 정보 | 좌우 20. 알약(`components/pill-on-dark/pill-on-dark.md`) → 제목 18 bold white → 아티스트 14 `textOnDarkSecondary` → 액션 행 |
| 액션 | 왼쪽 하입(HypeIcon 28, 전 `textTertiary` / 후 `brand`), 오른쪽 상세(`opticaldisc`) · 공유 22, `iconOnDark` |
| 상단 우측 | 성향(sparkles/shuffle) · 검색 20 semibold white, 40 탭 영역 |
| 탭바 | `components/tab-bar/tab-bar.md` media variant |

## 제스처
탭 = 재생/일시정지(멈추면 가운데 ▶ 56 white 85%), 더블탭 = 하입(버스트 이펙트), 세로 스와이프 = 다음/이전 곡.

## 하지 말 것
- 텍스트를 아트워크 위에 직접 얹지 않는다. 항상 그라데이션이 깔린 아래쪽에만.
- 피드에 "빈 곳 탭하면 키보드 내림"을 걸지 않는다. 탭이 재생이고 더블탭이 하입이다.
