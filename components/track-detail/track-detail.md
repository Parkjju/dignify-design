# TrackDetail

> 상태: 구현됨(iOS — TrackDetailView, 콘텐츠 높이 단일 detent 시트)

피드 카드의 디스크 버튼. 시트 안쪽 위 24 · 좌우 20 · 아래 20.
- 머리: 커버 88 radius 18 · 제목 20 bold · 아티스트 15 `textSecondary` · 앨범 13 `textTertiary` · 태그(장르 · 발매일) 11 `textSecondary`, `borderLight` 1 캡슐.
- 구분선(상하 20).
- 하입한 유저(높이 149 고정): 11 semibold `textTertiary` 제목, 행 "@닉네임 … 날짜"(14 / 13 `textTertiary`), 간격 16. 없으면 "아직 하입한 유저가 없어요".
- 스토어 버튼(위 24): Apple Music(`Button` dark) · YouTube Music(`Button` outline-block), 간격 10.
