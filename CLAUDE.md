# dignify-design — 에이전트 규칙

Dignify(음악 디깅 앱, iOS·Android)의 디자인 시스템 레포다. Storybook(`npm run dev`, 배포 https://parkjju.github.io/dignify-design/)이 토큰·컴포넌트·화면·흐름을 다 보여 준다. 사용자용 수정 안내는 `guide.mdx`(사이트 「가이드 › 시안 수정하기」) — 절차를 바꾸면 거기도 같이 고친다. 팀에 디자이너가 없으니 **시안의 품질 = 앱과 얼마나 똑같이 생겼나**다.

## 시안을 만들 때 (필수 순서)

1. **앱 코드부터 읽는다.** 기존 화면을 고치는 시안이면 `../dignify-iOS/dignify/dignify/Features/`의 해당 View에서 수치·문구를 읽는다. 문구는 `Localizable.xcstrings`의 한국어 값을 쓴다. 기억이나 상식으로 채우지 않는다.
2. `patterns/`에서 지면 규칙을, `components/<이름>/<이름>.md`에서 쓰는 컴포넌트 명세를 **전부 읽는다.**
3. **화면은 컴포넌트를 조립한 함수다.** 연결 구조는 토큰 → 컴포넌트 → 화면 → 흐름이고, 화면에 HTML·CSS를 직접 그리지 않는다.
   - 화면 함수: `screens/<흐름>.js` (feed · picks · my · onboarding). `Device({ surface, tab, children, overlay })`로 감싸고, 스크롤은 `Scroll`, 내비는 `NavLayer`, 시트는 `Sheet`(전부 `screens/device.js`).
   - 화면이 받는 값(곡, 상태, 목록, `scroll`)은 **전부 인자로** 둔다 → 그대로 Controls가 된다.
   - 새 화면은 `screens/registry.js`의 `SCREENS`에 `[이름, 함수, 기본 args]` 한 줄 → 스토리(`story('<id>')`)와 플로우(`{ screen: '<id>' }`)에서 바로 쓴다.
   - 스토리: `screens/<흐름>.stories.js`에 `export const X = story('<id>', { 덮어쓸 args }, { argTypes }, '이름')`.
   - 흐름: `flows/flows.stories.js`에 `steps` 배열 하나. 사용자가 Controls에서 만든 `steps` JSON을 주면 그대로 붙여 저장한다.
   - 사용자가 `steps`에 없는 화면 id(빨간 점선 칸)를 넣었다면 그게 새로 만들 화면 목록이다.
4. **컴포넌트 함수가 있으면 반드시 그걸 쓴다.** 없으면 `components/<이름>/`에 한 벌을 먼저 만든다: `<이름>.md`(`components/_template.md` 형식) · `<이름>.js`(마크업 함수) · `<이름>.css`(`.ds-<이름>` 접두) · `<이름>.stories.js`(`title: 'Components/<Inputs|Navigation|Content|Overlays>/<이름>'`, 상태별 스토리 + Controls).
5. 빌드하고 **렌더해서 직접 확인한 뒤** 넘긴다. 확인 안 한 시안은 넘기지 않는다.
   ```bash
   npm run build && (cd storybook-static && python3 -m http.server 6007 &)
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --virtual-time-budget=6000 \
     --window-size=900,950 --screenshot=/tmp/s.png "http://localhost:6007/iframe.html?id=<스토리 id>&viewMode=story"
   ```
   스토리 id는 `storybook-static/index.json`에 있다.

### 쓸 수 있는 것
- 컴포넌트: `components/*/` 의 함수들 (Storybook Components 메뉴에서 이름·인자 확인)
- 공통 CSS(`screens/_shared.css`): `.device`·`.status`·`.island`·`.home` · `.nav`·`.glass-btn`·`.large-title` · `.dim`·`.sheet`·`.sheet.floating`·`.grabber` · `.keyboard` · `.toast` · `.tabbar`
- 아이콘: `<i class="ic ic-이름">`(크기 = font-size, 색 = color). 목록은 Foundations › 아이콘. 하입은 `ic-hype`, 로고는 `<i class="brand-mark">`
- 커버: `<i class="art a-cannons">` 등. 목록은 Foundations › 앨범 커버

### 값 규칙
- **토큰이 있는 값은 반드시 토큰으로 쓴다.** `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, `font: var(--typography-*)`.
- **토큰이 없는 값**은 앱 코드의 실측값을 그대로 쓴다. 여러 화면에 반복되면 토큰 추가를 같은 PR에 넣는다.
- **새 값을 지어내지 않는다.** 앱에 없는 색이나 크기가 필요하면 토큰 추가로 낸다.

### 앱 사실
- 화면 393×852(iPhone 15/16 Pro). 앱은 **라이트 고정**. 예외는 피드(아트워크 미디어 지면)와 Picks(다크).
- 카피는 한국어가 주력. iOS 탭바 라벨만 영어(Feed·Picks·My) 그대로.
- 시안은 Storybook/HTML만. Figma로 그리지 않는다.

## 토큰을 고칠 때

- `tokens/*.json`만 고친다. `generated/`와 `screens/*.html`의 `ds` 블록은 `npm run tokens`로만 바뀐다.
- 커밋 전에 `npm run check`가 통과해야 한다(CI도 같은 검사로 막는다).
- 색 값은 `"#RRGGBB"` 또는 `{ "hex": "#RRGGBB", "alpha": 0.45 }`.
- 토큰 이름을 바꾸거나 지우면 두 앱 코드가 깨진다. 이름 변경은 별칭(`"$value": "{group.old}"`)으로 한 릴리스 동안 남겨 둔다.
- 새 토큰은 `$description`에 용도를 적는다.

## 디자인 스킬 (2026-10-09 설치, `~/.claude/skills/`)

**우선순위: 이 CLAUDE.md > 앱 코드 실측값 > 스킬.** 스킬은 품질을 올리는 도구지, 디자인 시스템을 다시 정하는 도구가 아니다. 스킬 지침이 아래와 부딪히면 이 파일을 따른다.

| 스킬 | 이 레포에서 쓰는 때 | 쓰지 않는 부분 |
|---|---|---|
| `emil-design-eng` | 애니메이션·눌림 피드백·전환을 정하거나 리뷰할 때. 리뷰는 Before/After/Why 표 | — |
| `web-design-guidelines` | 시안·컴포넌트 HTML/CSS 접근성·상태·성능 리뷰 (`file:line`) | 영문 웹 카피 규칙(Title Case·곧은 따옴표 등) — 카피는 앱 한국어 문구가 정본 |
| `ui-ux-pro-max` | 터치 타깃·대비·내비·폼 같은 UX 규칙 확인, `--stack swiftui` / `jetpack-compose` 구현 가이드 | `--design-system`으로 팔레트·폰트·스타일 새로 뽑기, `--persist`로 `design-system/` 폴더 생성 |
| `hallmark` | `hallmark audit <파일>` — 수정 없이 안티패턴 목록만 | 기본(빌드)·`redesign` 흐름 전체: 테마 로테이션, OKLCH 재작성, 루트 `tokens.css`·`.hallmark/` 생성, 기기 프레임 금지 규칙(우리 시안은 기기 프레임이 맞다) |
| `frontend-design` | 앱 밖 마케팅 지면(랜딩·카드뉴스)을 새로 만들 때 | 앱 화면 시안 — 앱은 이미 정한 시스템을 따른다. "남과 다르게"가 아니라 "앱과 똑같이"가 기준 |

- 새 컴포넌트를 만들면 `emil-design-eng`로 모션을, `web-design-guidelines`로 상태·접근성을 한 번씩 리뷰하고 결과를 PR에 붙인다.
- 스킬이 새 색·크기를 제안하면 바로 쓰지 말고 토큰 추가로 올린다(값 규칙과 같다).

## 주의

- `.mdx` 문서에 마크다운 표(`| a | b |`)를 쓰지 않는다. remark-gfm이 없어 글자 그대로 나온다 — 표는 JSX `<table>`로. 컴포넌트 명세 `.md`(Docs 설명)의 표는 정상이다.
- CSS 주석 안에 `*/`가 들어가는 경로(`components/*/*.css` 같은 글로브)를 쓰지 않는다. 주석이 일찍 닫혀 바로 뒤 `:root` 규칙이 통째로 무시된다(실제로 한 번 터졌다).

## 커밋

토큰, 컴포넌트·명세, 시안은 커밋을 분리한다. main 푸시 = 배포다.
