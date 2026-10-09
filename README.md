# dignify-design

Dignify iOS·Android가 같이 쓰는 디자인 시스템이다. 이 레포 하나에 세 가지가 있다.

1. **토큰** — 색·글꼴·라운드·여백의 정본. 여기서 두 앱 코드를 생성한다.
2. **명세** — 컴포넌트와 지면 규칙. 수치는 전부 앱 코드에서 가져왔다.
3. **시안** — 앱 화면을 그대로 옮긴 HTML. 새 화면은 여기서 복사해 그린다.

## 처음 왔다면

```bash
open screens/index.html     # 지금 앱의 모든 화면(28개)을 흐름별로 한 장에
```

브라우저에서 열리고, 칸을 누르면 그 화면 파일이 열린다. 빌드·서버·설치는 필요 없다.

## 구조

```
tokens/        정본 JSON (W3C DTCG 형식). 색·타이포·라운드·여백
components/    컴포넌트 명세 — 언제 쓰나 · 생김새 · 수치 · 플랫폼 매핑
patterns/      지면 규칙 — 피드 미디어 지면, Picks 다크, 공유 카드
screens/       HTML 시안. index.html = 갤러리, _shared.css = 기기 프레임·탭바·아이콘·커버
assets/        앱 애셋 사본 (HypeIcon, BrandMark)
generated/     자동 생성물 (ios / android / web). 직접 고치지 않는다
scripts/       build.mjs — 위 전부를 묶는 스크립트
CLAUDE.md      Claude가 시안을 만들 때 지키는 규칙
```

## 시안 만들기 (디자이너 없이)

시안은 Claude에게 말로 요청한다. 예:

> 디깅 프로필 위에 '이번 달 많이 들은 아티스트' 섹션을 추가한 시안 만들어줘

Claude는 `CLAUDE.md` 규칙대로 가장 가까운 화면을 복사해서 `screens/<이름>.html`을 만들고, 빌드한 뒤 렌더 결과를 확인해서 넘긴다. 결과는 브라우저로 열어 보고 PR로 리뷰한다.

- 토큰에 없는 새 색이나 크기가 필요하면 시안과 함께 **토큰 제안**이 따라온다.
- 명세에 없는 새 컴포넌트가 필요하면 **명세 초안**(`components/_template.md` 형식)이 따라온다.
- Figma는 쓰지 않는다. 정본이 이 레포 하나여야 값이 갈라지지 않는다.

## 시안에서 개발까지

1. **시안 PR**: `screens/` 추가·수정. 리뷰에서 화면을 확정한다.
2. **토큰·명세 PR**: 새 값이나 새 컴포넌트가 있으면 먼저 머지한다.
3. **앱 반영**: 생성물을 앱에 복사하고(아래), 명세를 보고 iOS·Android를 같이 구현한다.
4. **이슈**: 시안 파일 경로와 쓰는 컴포넌트 명세 경로를 적는다.

## 토큰 고치기

```bash
# tokens/*.json 수정 후
node scripts/build.mjs          # generated/ + screens/*.html 재생성
node scripts/build.mjs --check  # 커밋 전: 생성물이 최신인지 확인 (어긋나면 exit 1)
```

토큰과 생성물은 **같은 커밋**에 넣는다. 의존성은 없고 Node 18 이상이면 된다.

## 앱에 반영

| 앱 | 생성물 | 앱 쪽 자리 |
|---|---|---|
| iOS | `generated/ios/DSTokens.swift` | `dignify/Core/DesignSystem/` — `DSColor.swift`·`DSTypography.swift`·`DSRadius.swift`를 이 파일 하나로 교체 |
| Android | `generated/android/DSTokens.kt` | `core/designsystem/` — `DesignSystem.kt` 안의 `DSColor`·`DSTypography`·`DSRadius` object를 지우고 이 파일 추가 |

기존 값은 이름·값 그대로 다 들어 있어서(1:1 대조 완료) 교체해도 화면은 안 바뀐다. 새로 생기는 건 `DSSpacing`과 `[제안]` 토큰뿐이다. **아직 앱에는 반영하지 않았다.**

## 리뷰가 필요한 제안

현행 코드의 하드코딩 빈도를 보고 넣었다. 받아들이면 `$description`의 `[제안]`을 지운다.

| 토큰 | 근거 |
|---|---|
| `typography.label` 13 semibold | iOS 하드코딩 13pt 31회 중 semibold 12회. 날짜 헤더·섹션 라벨·배지 |
| `typography.callout` 14 medium | 14pt 24회. 칩·보조 버튼·"전체 보기" |
| `typography.captionStrong` 12 semibold | 12pt 22회 중 semibold 9회로 최다 |
| `radius.small` 12 | 하드코딩 cornerRadius 중 최다(10회) |
| `color.brandDeep` #2A2350 | 디깅 프로필 히어로·공유 카드 그라데이션, iOS 3곳 하드코딩 |
| `color.textOnDark*` · `iconOnDark` · `fillOnDark*` · `strokeOnDark` · `scrim*` | 피드·Picks의 흰색/검정 반투명. 피드 칩 15%, Picks 메타 45% 등 화면마다 반복 |
| `spacing.*` 전체 | 여백 토큰이 없었다. `.padding`·`spacing:` 하드코딩 값 대부분이 이 스케일에 들어간다(7·60·64 같은 소수 제외) |

## 알려진 불일치

- **Primary 버튼 글꼴**: iOS 16 semibold, Android 17 semibold(`components/button.md`).
- **탭바 라벨**: iOS는 Feed·Picks·My를 번역하지 않고, Android는 피드·픽·마이다(`components/tab-bar.md`).
- **Android `DSGenreChip`**: iOS에서는 1.1.0에 장르 선택과 함께 지워졌다. Android도 쓰는 곳이 없으면 지운다.
- **하입 버스트 색**(yellow·pink·mint·orange): 시스템 색 그대로, Android는 실측값 하드코딩. 이펙트 전용이라 토큰으로 안 올렸다.

## 시안이 앱과 다른 점

- 아이콘은 SF Symbols를 쓸 수 없어 비슷하게 그린 SVG다. 하입(삽)·브랜드마크는 앱 애셋 그대로.
- 앨범 커버는 iTunes에서 받아 오므로 오프라인이면 그라데이션으로 보인다.
- 탭바·시트의 iOS 26 유리 질감은 근사치다.
- 이용약관·개인정보처리방침은 Notion 페이지를 Safari로 여는 것이라 시안이 없다.
