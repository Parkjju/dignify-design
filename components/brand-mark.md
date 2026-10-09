# BrandMark

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
온보딩, What's New, 빈 상태 화면의 로고. 앱 아이콘을 대신하지는 않는다.

## 수치
| 항목 | 값 |
|---|---|
| 기본 크기 | 64 |
| 지면 | `color.brandLight`, 라운드 = size × 0.25 |
| 로고 여백 | size × 0.18 |

## 플랫폼
| | 이름 | 애셋 |
|---|---|---|
| iOS | `DSBrandMark(size:)` | `Assets.xcassets/BrandMark` |
| Android | `DSBrandMark(size)` | `R.drawable.brand_mark` (iOS와 같은 파일) |

## 하지 말 것
- 로고 파일을 한쪽 앱에서만 바꾸지 않는다.
