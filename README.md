# dignify-design

Dignify iOS·Android가 같이 쓰는 디자인 시스템이다. **Storybook**에서 토큰 → 컴포넌트 → 화면 → 흐름을 다 본다.

- 사이트: https://parkjju.github.io/dignify-design/ — main에 머지되면 자동 배포(GitHub Actions, 2~3분)
- 로컬: `npm i && npm run dev` → http://localhost:6006
- **시안을 고치는 방법은 사이트의 「가이드 › 시안 수정하기」에 있다.**

## Storybook 메뉴

| 메뉴 | 내용 | 정본 |
|---|---|---|
| **가이드** | 시안 수정하기 — Controls · 흐름 설계 · Claude에게 요청 · 직접 고치기 | `guide.mdx` |
| **Foundations** | 색·타이포그래피·라운드·여백·아이콘·커버 | `tokens/*.json` |
| **Components** | 35개 — Inputs · Navigation · Content · Overlays. Docs 탭 = 명세, Controls = 상태 바꿔 보기 | `components/<이름>/` |
| **Screens** | 앱(iOS 1.2.1) 화면 34개. 전부 컴포넌트로 조립돼 있고, 화면마다 Controls로 내용·상태를 바꾼다 | `screens/<흐름>.js` |
| **Flows** | 사용자 흐름 8개 + 전체 화면. Controls의 `steps`로 순서·화면·값을 바꾼다 | `flows/flows.stories.js` |

## 구조

```
tokens/                 정본 JSON (W3C DTCG). 여기서 iOS·Android 코드를 생성한다
components/<이름>/       <이름>.md 명세 · .js 마크업 함수 · .css 스타일 · .stories.js 스토리
screens/
  feed.js · picks.js · my.js · onboarding.js   흐름별 화면 함수 (컴포넌트 조립)
  registry.js           화면 목록 + 기본값 — 스토리와 플로우가 같이 쓴다
  data.js               샘플 곡·픽·하입 데이터
  device.js             iPhone 프레임 · 스크롤 · 내비 · 시트 헬퍼
  *.stories.js          Screens 메뉴
  _shared.css           기기 프레임·탭바·아이콘·커버 공통 CSS
flows/                  플로우 보드 + 흐름 정의
foundations/            Foundations 스토리 (tokens/*.json 을 읽어 그린다)
patterns/               지면 규칙 (피드 미디어 지면 · Picks 다크 · 공유 카드)
assets/                 앱 애셋 사본 (HypeIcon, BrandMark)
generated/              자동 생성물 — ios/DSTokens.swift · android/DSTokens.kt · web/ds.css
scripts/build.mjs       tokens·애셋·CSS → generated
guide.mdx · intro.mdx   Storybook 문서 페이지
CLAUDE.md               Claude가 시안을 만들 때 지키는 규칙
```

연결 구조: **토큰 → 컴포넌트 → 화면 → 흐름.** 아래 층을 고치면 위 층이 전부 따라 바뀐다.

## 시안에서 개발까지

1. **흐름·배치 설계** — Flows·Screens의 Controls로 직접 만져 보고, 정한 것을 Claude에게 넘긴다(가이드 참고).
2. **시안 PR** — Claude가 화면 함수·흐름·필요하면 컴포넌트와 토큰까지 고쳐 PR을 올린다. 머지되면 사이트에 반영된다.
3. **앱 반영** — 생성물을 앱에 복사하고(아래), 컴포넌트 명세의 플랫폼 표를 보고 iOS·Android를 같이 구현한다.

Figma는 쓰지 않는다. 정본이 이 레포 하나여야 값이 갈라지지 않는다.

## 토큰 고치기

```bash
# tokens/*.json 수정 후
npm run tokens   # generated/ 재생성
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
