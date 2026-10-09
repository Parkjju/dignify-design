# dignify-design

Dignify iOS·Android가 같이 쓰는 디자인 시스템이다. 토큰 JSON 하나에서 두 앱의 코드를 생성하고, 시안 작업과 개발 착수도 이 레포를 기준으로 맞춘다.

```
tokens/        정본. 색·타이포·라운드·여백 (W3C DTCG 형식 JSON)
components/    컴포넌트 명세 — anatomy·variant·수치·플랫폼 매핑
patterns/      컴포넌트를 조합한 지면 규칙 (Picks 다크, 공유 카드)
examples/      HTML 시안 예제. 새 시안은 여기서 복사해 시작한다
generated/     자동 생성물 (ios / android / web). 직접 고치지 않는다
scripts/       build.mjs — tokens → generated
CLAUDE.md      에이전트가 시안을 만들 때 지키는 규칙
```

## 토큰 고치기

```bash
# 1. tokens/*.json 수정
node scripts/build.mjs          # 2. generated/ 재생성
node scripts/build.mjs --check  # 커밋 전: 생성물이 최신인지 확인
```

토큰과 생성물은 **같은 커밋**에 넣는다. 의존성은 없고 Node 18 이상이면 된다.

## 앱에 반영

| 앱 | 생성물 | 앱 쪽 자리 |
|---|---|---|
| iOS | `generated/ios/DSTokens.swift` | `dignify/Core/DesignSystem/` — `DSColor.swift`·`DSTypography.swift`·`DSRadius.swift`를 이 파일 하나로 교체 |
| Android | `generated/android/DSTokens.kt` | `core/designsystem/` — `DesignSystem.kt` 안의 `DSColor`·`DSTypography`·`DSRadius` object를 지우고 이 파일 추가 |
| HTML 시안 | `generated/web/tokens.css` | `examples/`에서 상대경로로 참조 |

기존 값은 모두 그대로 들어 있어서(이름·값 1:1 대조 완료) 교체해도 화면은 바뀌지 않는다. 새로 생긴 것은 `DSSpacing`과 `[제안]` 표시가 붙은 토큰뿐이다.

## 시안에서 개발까지

1. **새 값이 필요하면 토큰 PR부터 낸다.** 시안에 토큰에 없는 색이나 크기가 들어가면, 시안을 확정하기 전에 `tokens/` PR을 먼저 머지한다.
2. **새 컴포넌트는 명세부터 쓴다.** `components/_template.md`를 복사해 명세를 쓰고 리뷰한다. 구현은 명세가 머지된 뒤 iOS와 Android가 함께 한다.
3. **시안은 토큰과 컴포넌트 이름으로만 말한다.** "#6B7280 13pt" 대신 `color.textSecondary`, `typography.label`로 적는다.
4. **시안 도구는 둘 중 하나를 쓴다.**
   - HTML: Claude에게 "examples/ 기준으로 OO 화면 시안"을 요청한다. 비용이 들지 않고, 결과물을 레포에 커밋해 리뷰할 수 있다.
   - Figma: Figma MCP로 그린다. 토큰은 Figma Variables로 옮겨 둔다(값 정본은 계속 이 레포다).
5. **개발 착수**: 이슈에 시안 링크와 함께 사용하는 컴포넌트 명세 경로를 적는다. 명세에 없는 부분은 착수 전에 명세를 먼저 보강한다.

## 리뷰가 필요한 제안

현행 코드의 하드코딩 빈도를 보고 넣은 것들이다. 받아들이면 `[제안]` 표시를 지운다.

| 토큰 | 근거 |
|---|---|
| `typography.label` 13 semibold | iOS에서 가장 많이 하드코딩된 조합. 13pt `.system(size:)` 31회 중 semibold 12회 |
| `typography.callout` 14 medium | 14pt 24회. 칩·보조 버튼에 쓰임 |
| `typography.captionStrong` 12 semibold | 12pt 22회 중 semibold 9회로 최다 |
| `radius.small` 12 | 하드코딩된 cornerRadius 중 최다(10회) |
| `color.brandDeep` #2A2350 | 공유 카드 그라데이션, iOS 3곳에 하드코딩 |
| `spacing.*` 전체 | 기존에 여백 토큰이 없었다. `.padding`·`spacing:` 하드코딩 값 대부분이 이 스케일에 들어간다(7·60·64 같은 소수 제외) |

## 알려진 불일치

- **Primary 버튼 글꼴:** iOS는 16 semibold, Android는 17 semibold다. `button.md`에 적어 두었다.
- **Android `DSGenreChip`:** iOS에서는 1.1.0에 장르 선택과 함께 지워졌다. Android에서도 쓰는 곳이 없으면 지운다.
- **하입 버스트 색 (yellow·pink·mint·orange):** 시스템 색 그대로이고 Android는 실측값을 하드코딩했다. 이펙트 전용이라 토큰으로 올리지 않았다.
