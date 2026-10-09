# 공유 카드

인스타 스토리 등으로 내보내는 이미지(픽 공유·Digging Profile 공유·트랙 공유).

## 배경
- 트랙·픽: 아트워크 blur 40 + 검정 50%(픽 55%). 아트워크가 없을 때만 `color.brand` → `color.brandDeep`.
- 디깅 유형: 세 겹. 대각 `#1A1340` → `brand` → `#140F30`, 위에 방사형 글로우 2개(보라 `#8B7BFF` 55% 좌상단 · 핑크 `#FF5C9B` 32% 우하단), 아래로 검정 28%, 가운데 레코드 홈 10겹(white 5.5%, 200부터 66씩).
  - 이 색들은 공유 카드 전용이라 토큰으로 올리지 않았다. 앱 화면에서도 쓰게 되면 `color.json`으로 올린다.

## 공통
- 논리 크기 360×640, `ImageRenderer` scale 3 → 1080×1920 PNG(스토리 비율).
- 맨 위 라벨(DIGGING / PICK / 내 디깅 유형) 13 bold, 자간 5, white 90%.
- 맨 아래 푸터: BrandMark 22 + "dignify" 20 bold, 그 아래 "dig deeper" 13 medium white 65%.
- 시안: `screens/share-card-track.html` · `share-card-pick.html` · `share-card-profile.html`

## 하지 말 것
- 앱 화면에 이 그라데이션을 쓰지 않는다. 앱 밖으로 나가는 이미지 전용이다.
