# NavBar

> 상태: 구현됨(iOS 시스템 NavigationStack)

## 언제 쓰나
푸시된 화면 상단. 제목은 inline(가운데 `typography.headline`). 탭 루트(마이페이지·Picks)는 large title 34 bold.

## Anatomy
```
(‹)          디깅 프로필          (편집)
 └ 44 원형 유리 버튼      └ 유리 캡슐 텍스트 버튼(brand)
```
- 스크롤하면 콘텐츠가 위로 흐려지며 사라진다(iOS 26 스크롤 엣지 효과).
- 시트 안에서는 왼쪽이 "취소"(텍스트, `textSecondary`).
