# dignify-design — 에이전트 규칙

Dignify(음악 디깅 앱, iOS·Android)의 디자인 시스템 레포다. 할 일은 셋이다. 시안 만들기, 토큰 고치기, 명세 쓰기. 팀에 디자이너가 없으니 **시안의 품질 = 앱과 얼마나 똑같이 생겼나**다.

## 시안을 만들 때 (필수 순서)

1. **앱 코드부터 읽는다.** 기존 화면을 고치는 시안이면 `../dignify-iOS/dignify/dignify/Features/`의 해당 View에서 수치·문구를 읽는다. 문구는 `Localizable.xcstrings`의 한국어 값을 쓴다. 기억이나 상식으로 채우지 않는다.
2. `patterns/`에서 지면 규칙을 확인한다. 피드면 `feed-media-surface.md`, Picks면 `picks-dark-surface.md`.
3. 쓰는 컴포넌트의 `components/<name>.md`를 **전부 읽는다.**
4. `screens/`에서 가장 가까운 화면을 **복사**해 수정한다. 처음부터 새로 짜지 않는다. 각 파일 맨 위 주석에 기준 Swift 파일이 있다.
5. 갤러리 `screens/index.html`의 `SCREENS`에 한 줄 추가한다.
6. `node scripts/build.mjs`로 빌드하고, **헤드리스 Chrome으로 렌더해서 직접 확인한 뒤** 넘긴다. 확인 안 한 시안은 넘기지 않는다.
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
     --virtual-time-budget=4000 --window-size=500,900 --screenshot=/tmp/s.png "file://$PWD/screens/<이름>.html"
   ```

### 파일 골격
```html
<style id="ds"></style>   <!-- build.mjs가 토큰 + 애셋 + _shared.css 를 채운다. 직접 쓰지 않는다 -->
<div class="device">       <!-- 어두운 지면이면 class="device dark" -->
  <div class="island"></div>
  <div class="status"><b>10:28</b><span><i class="ic ic-signal"></i><i class="ic ic-wifi"></i><i class="battery">97</i></span></div>
  …
  <nav class="tabbar">…</nav>   <!-- 피드 위 .media, Picks 위 .dark -->
  <div class="home"></div>
</div>
```
외부 CSS·이미지를 `<link>`나 상대 경로로 걸지 않는다. 뷰어나 단독 공유에서 끊긴다.

### `_shared.css`에 있는 것
- 기기: `.device` `.island` `.status` `.home` · 내비: `.nav` `.glass-btn` `.large-title` · 시트: `.dim` `.sheet` `.sheet.floating` `.grabber` · `.keyboard` · `.toast`
- 아이콘: `<i class="ic ic-이름">`(크기 = font-size, 색 = color). 이름은 `_shared.css` 아래쪽 목록. 하입은 `ic-hype`(앱 애셋), 로고는 `<i class="brand-mark">`
- 커버: `<i class="art a-cannons">` 등 iTunes 실제 커버. 목록은 `_shared.css` 맨 아래

### 값 규칙
- **토큰이 있는 값은 반드시 토큰으로 쓴다.** `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, `font: var(--typography-*)`.
- **토큰이 없는 값**(11pt, white 90% 등 앱 하드코딩)은 앱 코드의 실측값을 그대로 쓴다. 여러 화면에 반복되면 토큰 제안으로 따로 적는다.
- **새 값을 지어내지 않는다.** 앱에 없는 색이나 크기가 필요하면 토큰 제안으로 낸다.
- **명세에 없는 컴포넌트가 필요하면** 시안과 함께 `components/_template.md` 형식의 명세 초안을 낸다.

### 앱 사실
- 화면 393×852(iPhone 15/16 Pro). 앱은 **라이트 고정**. 예외는 피드(아트워크 미디어 지면)와 Picks(다크).
- 카피는 한국어가 주력. iOS 탭바 라벨만 영어(Feed·Picks·My) 그대로.
- 시안은 **HTML만**. Figma로 그리지 않는다.

## 토큰을 고칠 때

- `tokens/*.json`만 고친다. `generated/`와 `screens/*.html`의 `ds` 블록은 `node scripts/build.mjs`로만 바뀐다.
- 커밋 전에 `node scripts/build.mjs --check`가 통과해야 한다.
- 색 값은 `"#RRGGBB"` 또는 `{ "hex": "#RRGGBB", "alpha": 0.45 }`.
- 토큰 이름을 바꾸거나 지우면 두 앱 코드가 깨진다. 이름 변경은 별칭(`"$value": "{group.old}"`)으로 한 릴리스 동안 남겨 둔다.
- 새 토큰은 `$description`에 용도를 적는다. 합의 전이면 앞에 `[제안]`.

## 커밋

토큰, 명세 문서, 시안은 커밋을 분리한다.
