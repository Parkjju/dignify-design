# dignify-design

Dignify iOS·Android가 같이 쓰는 디자인 시스템이다. **Storybook**에서 토큰·컴포넌트·화면을 다 본다.

- 사이트: https://parkjju.github.io/dignify-design/ — main에 머지되면 자동 배포(GitHub Actions, 2~3분)
- 로컬: `npm i && npm run dev` → http://localhost:6006

## Storybook 메뉴

| 메뉴 | 내용 | 정본 |
|---|---|---|
| **Foundations** | 색·타이포그래피·라운드·여백·아이콘·커버 | `tokens/*.json` |
| **Components** | 컴포넌트 16개. Docs 탭 = 명세, 각 스토리 = 상태별 모습, Controls = 값 바꿔 보기 | `components/<이름>/` |
| **Screens** | 지금 앱(iOS 1.2.1)의 28개 화면 + 컴포넌트로 조립한 화면 | `screens/` |

## 구조

```
tokens/                 정본 JSON (W3C DTCG). 여기서 iOS·Android 코드를 생성한다
components/<이름>/       <이름>.md 명세 · .js 마크업 · .css 스타일 · .stories.js 스토리
foundations/            Foundations 스토리 (tokens/*.json 을 읽어 그린다)
screens/
  *.html                앱 화면 시안 28개 (파일 하나로도 열린다)
  *.stories.js          Screens 메뉴. composed.stories.js = 컴포넌트 조립 화면
  device.js             iPhone 프레임 — 새 화면을 조립할 때 쓴다
  _shared.css           기기 프레임·탭바·아이콘·커버 공통 CSS
patterns/               지면 규칙 (피드 미디어 지면 · Picks 다크 · 공유 카드)
assets/                 앱 애셋 사본 (HypeIcon, BrandMark)
generated/              자동 생성물 — ios/DSTokens.swift · android/DSTokens.kt · web/ds.css
scripts/build.mjs       tokens·애셋·CSS → generated + screens/*.html
.storybook/             Storybook 설정
.github/workflows/      배포
CLAUDE.md               Claude가 시안을 만들 때 지키는 규칙
```

## 시안 만들기 (디자이너 없이)

Claude에게 말로 요청한다. 예:

> 디깅 프로필에 '이번 달 많이 들은 아티스트' 섹션을 추가한 시안 만들어줘

Claude는 `CLAUDE.md` 규칙대로 **기존 컴포넌트를 조립한 스토리**로 시안을 만들고, 빌드해서 렌더를 확인한 뒤 PR을 올린다. 머지되면 사이트에 바로 뜨니 링크만 공유하면 된다.

- 새 색·크기가 필요하면 토큰 변경이, 새 컴포넌트가 필요하면 `components/<이름>/` 한 벌(명세·마크업·스타일·스토리)이 같은 PR에 들어간다.
- Figma는 쓰지 않는다. 정본이 이 레포 하나여야 값이 갈라지지 않는다.

## 시안에서 개발까지

1. **시안 PR** — 화면 스토리 추가·수정. 리뷰에서 확정한다.
2. **토큰·컴포넌트 변경**이 있으면 같은 PR에서 함께 리뷰한다.
3. **앱 반영** — 생성물을 앱에 복사하고(아래), 컴포넌트 명세의 플랫폼 표를 보고 iOS·Android를 같이 구현한다.

## 토큰 고치기

```bash
# tokens/*.json 수정 후
npm run tokens   # generated/ + screens/*.html 재생성
npm run check    # 커밋 전: 생성물이 최신인지 (CI에서도 돈다 — 안 맞으면 배포 실패)
```

## 앱에 반영

| 앱 | 생성물 | 앱 쪽 자리 |
|---|---|---|
| iOS | `generated/ios/DSTokens.swift` | `dignify/Core/DesignSystem/` — `DSColor.swift`·`DSTypography.swift`·`DSRadius.swift`를 이 파일 하나로 교체 |
| Android | `generated/android/DSTokens.kt` | `core/designsystem/` — `DesignSystem.kt` 안의 `DSColor`·`DSTypography`·`DSRadius` object를 지우고 이 파일 추가 |

기존 값은 이름·값 그대로 다 들어 있어서(1:1 대조 완료) 교체해도 화면은 안 바뀐다. 새로 생기는 건 `DSSpacing`과 앱에 하드코딩돼 있던 값을 이름으로 묶은 토큰(타이포 3 · 라운드 1 · 색 10)이다. **아직 앱에는 반영하지 않았다.**

## 알려진 불일치

- **Primary 버튼 글꼴**: iOS 16 semibold, Android 17 semibold(`components/button/button.md`).
- **탭바 라벨**: iOS는 Feed·Picks·My를 번역하지 않고, Android는 피드·픽·마이다.
- **Android `DSGenreChip`**: iOS에서는 1.1.0에 장르 선택과 함께 지워졌다. Android도 쓰는 곳이 없으면 지운다.
- **하입 버스트 색**(yellow·pink·mint·orange): 시스템 색 그대로. 이펙트 전용이라 토큰으로 안 올렸다.

## 시안이 앱과 다른 점

- 아이콘은 SF Symbols를 쓸 수 없어 비슷하게 그린 SVG다. 하입(삽)·브랜드마크는 앱 애셋 그대로.
- 앨범 커버는 iTunes에서 받아 오므로 오프라인이면 그라데이션으로 보인다.
- 탭바·시트의 iOS 26 유리 질감은 근사치다.
- 이용약관·개인정보처리방침은 Notion 페이지를 Safari로 여는 것이라 시안이 없다.
