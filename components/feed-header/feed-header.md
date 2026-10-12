# FeedHeader

> 상태: 구현됨(iOS — FeedView.searchControls · contextBadge)

피드 위쪽 오버레이. 한 줄(safe+8, 좌우 16): 왼쪽 성향 버튼(`sparkles` 따라가는 중 / `shuffle` 무작위) + 바로 옆 모드 알약(`PillOnDark` mode), 오른쪽 끝 검색 버튼(20 semibold white, 탭 영역 40). 그 아래 가운데 배지(`PillOnDark` badge, safe+56): "이번 주 특집 3/5", "@닉네임의 픽 3/12". 검색 결과를 보는 중이면 모드 알약 대신 쿼리 알약(brand).

1.1(2026-10-11) 배치다. 이전: 성향·검색이 오른쪽 위에 나란히, 모드 알약은 그 아래 오른쪽 정렬, 배지는 알약이 있으면 +33.

픽 재생에서는 오른쪽 버튼·모드 알약 없이 왼쪽 위 닫기(44 원, 검정 35%, `xmark` 17)만.
