import{u as d,j as n,M as l}from"./blocks-Tbc0poZ3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BUJloxWN.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"가이드/앱 반영 목록"}),`
`,n.jsx(e.h1,{id:"앱-반영-목록",children:"앱 반영 목록"}),`
`,n.jsxs(e.p,{children:["시안 버전마다 ",n.jsx(e.strong,{children:"앱에 고쳐야 할 것"}),"을 빠짐없이 적는다. 맨 위가 최신 버전이다."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["기준은 ",n.jsx(e.strong,{children:"출시된 앱"}),"이다(지금 iOS 1.2.1). 아직 앱에 안 들어간 버전은 아래 버전부터 차례로 반영한다."]}),`
`,n.jsx(e.li,{children:"같은 화면을 뒤 버전이 다시 고쳤으면 뒤 버전 값이 이긴다. 그 항목에는 「→ 1.x에서 바뀜」이라고 적어 둔다."}),`
`,n.jsx(e.li,{children:"앱에 반영하면 그 버전 제목 옆 상태를 「반영됨 (iOS x.y.z)」로 바꾼다."}),`
`,n.jsxs(e.li,{children:["문구는 한국어가 정본이다. 시안은 한국어만 본다. 앱 문자열 키가 영어라서 ",n.jsx(e.strong,{children:"영어 값은 앱에 반영할 때 한국어 뜻에 맞춰 같이 고친다"})," — 따로 정해 주지 않는다."]}),`
`,n.jsx(e.li,{children:"항목 하나 = 시안 화면 id · 지금 앱(AS-IS) · 바꿀 값(TO-BE) · 앱 위치."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"feed_coachmark-12--2026-10-12--상태-반영됨-ios-130--android-130",children:"feed_coachmark 1.2 — 2026-10-12 · 상태: 반영됨 (iOS 1.3.0 · Android 1.3.0)"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"좋아요 누르면 가운데 큰 하트"})," (",n.jsx(e.code,{children:"feed"})," 「피드 — 좋아요 누르는 순간」, Components › FeedTrack ",n.jsx(e.code,{children:"burst"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: 일반 피드는 버튼 조각(버스트)만. 큰 하트는 코치마크 하입 단계에만 있다(",n.jsx(e.code,{children:"FeedCoachGesture.swift"}),")"]}),`
`,n.jsxs(e.li,{children:["TO-BE: 좋아요할 때마다 아트워크 가운데에 큰 찬 하트 160 ",n.jsx(e.code,{children:"brand"}),". ",n.jsx(e.strong,{children:"버튼 팡·하트 조각과 한 시간표"}),"(총 1.0s, 1회):",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"0~0.3s: 큰 하트 팝(0.3→1, 오버슈트) · 버튼 1→1.35→1 (0.15s 정점) · 조각이 솟음"}),`
`,n.jsx(e.li,{children:"0.3~0.6s(hold 0.3): 큰 하트 머묾 · 조각은 떨어지기 시작"}),`
`,n.jsx(e.li,{children:"0.6~1.0s: 큰 하트 1.08배로 커지며 페이드 · 조각도 이때 다 떨어져 사라짐"}),`
`,n.jsx(e.li,{children:"셋을 따로 타이머로 돌리지 말고 한 트리거에서 같이 시작한다 — 1.1의 버스트(조각 0.4s 정점·1.2s 끝)와 시간이 바뀌었다"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"버튼·더블탭 둘 다. 좋아요 취소 때는 안 뜬다"}),`
`,n.jsxs(e.li,{children:["코치마크 하입 단계의 큰 하트도 ",n.jsx(e.strong,{children:"같은 모션 하나"}),"를 쓴다 — 코치마크 쪽 하트를 따로 두지 말고 피드 좋아요 모션을 재사용"]}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"FeedView.swift"})," 좋아요 처리(",n.jsx(e.code,{children:"onToggleHype"}),"·더블탭) + ",n.jsx(e.code,{children:"FeedCoachGesture.swift"}),"의 하트를 공용으로 빼기"]}),`
`,n.jsx(e.li,{children:"동작 줄이기 설정이면 안 뜬다"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Picks·마이·추천 기준 곡 코치마크 삭제"})," (Components › CoachMark·PageDots 삭제)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: 처음 들어가면 스포트라이트 + 설명 카드 코치마크가 뜬다",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Picks: ",n.jsx(e.code,{children:"PickListView.swift"})," ",n.jsx(e.code,{children:"PicksCoach.steps"}),"(재생·반응·공유·새 픽), 플래그 ",n.jsx(e.code,{children:"seenPicksCoach"})]}),`
`,n.jsxs(e.li,{children:["마이: ",n.jsx(e.code,{children:"MyPageView.swift"})," ",n.jsx(e.code,{children:"MyPageCoach.steps"}),"(하입한 곡 따라가기·추천 기준 곡), 플래그 ",n.jsx(e.code,{children:"seenMyPageCoach"})]}),`
`,n.jsxs(e.li,{children:["추천 기준 곡: ",n.jsx(e.code,{children:"SeedPickerView.swift"})," ",n.jsx(e.code,{children:"SeedCoach.steps"}),"(곡 칸·저장), 플래그 ",n.jsx(e.code,{children:"seenSeedCoach"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Android: ",n.jsx(e.code,{children:"PickListScreen.kt"}),"·",n.jsx(e.code,{children:"MyPageScreen.kt"}),"·",n.jsx(e.code,{children:"SeedPickerScreen.kt"}),"의 ",n.jsx(e.code,{children:"CoachOverlay(...)"}),", ",n.jsx(e.code,{children:"CoachSeen"})," 플래그, ",n.jsx(e.code,{children:"feature/onboarding/CoachMarks.kt"})]}),`
`,n.jsxs(e.li,{children:["TO-BE: 셋 다 안 뜬다. 앱의 코치마크는 피드 제스처 코치마크(",n.jsx(e.code,{children:"FeedCoachGesture.swift"}),") 하나만 남는다"]}),`
`,n.jsxs(e.li,{children:["같이 지울 것: ",n.jsx(e.code,{children:".coachMarks(...)"}),"·",n.jsx(e.code,{children:"CoachMarkOverlay"})," 호출, ",n.jsx(e.code,{children:"*Coach.steps"}),", ",n.jsx(e.code,{children:".coachAnchor(...)"})," 표시, ",n.jsx(e.code,{children:"@AppStorage"})," 플래그 3개와 디버그 초기화(",n.jsx(e.code,{children:"MyPageView.swift"})," 디버그 리셋)에서 그 플래그. 쓰는 곳이 다 없어지면 ",n.jsx(e.code,{children:"CoachMarks.swift"}),"도 삭제"]}),`
`,n.jsxs(e.li,{children:["코치마크 노출 계측(",n.jsx(e.code,{children:'screen: "mypage"'}),"·",n.jsx(e.code,{children:'"seed_picker"'}),"·Picks)도 같이 사라진다 — PostHog 대시보드에서 그 이벤트를 쓰는 곳이 있으면 정리"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 구성 중 최소 노출 2초"})," (",n.jsx(e.code,{children:"onboarding-building"}),", Components › FeedBuilding)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 최소 1초, 응답이 늦으면 올 때까지"}),`
`,n.jsxs(e.li,{children:["TO-BE: ",n.jsx(e.strong,{children:"최소 2초."})," 첫 피드 요청과 2초 타이머를 같이 시작해 둘 다 끝나야 넘어간다 — 응답이 빨라도 2초, 늦으면 응답이 올 때까지"]}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"NewUserOnboardingView.swift"})," ",n.jsx(e.code,{children:"minBuildingTime"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"feed_coachmark-11--2026-10-1112--상태-반영됨-ios-130--android-130",children:"feed_coachmark 1.1 — 2026-10-11~12 · 상태: 반영됨 (iOS 1.3.0 · Android 1.3.0)"}),`
`,n.jsx(e.p,{children:"1.0 시안을 다듬은 버전이다. 1.0과 같이 반영한다."}),`
`,n.jsx(e.h3,{id:"문구",children:"문구"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"로그인 화면 부제"})," (",n.jsx(e.code,{children:"onboarding-signin"}),", ",n.jsx(e.code,{children:"onboarding-signin-gate"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 인디 음악을 발굴하고 당신만의 취향을 쌓아가세요."}),`
`,n.jsx(e.li,{children:"TO-BE: 인디 음악을 발굴하고, 취향을 쌓아가요."}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"Localizable.xcstrings"})," 해당 키"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"나만의 취향 만들기 본문"})," (",n.jsx(e.code,{children:"guest-prompt"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 로그인하면 트랙에 하입하고, 피드를 취향에 맞추고, 담은 곡을 모아볼 수 있어요."}),`
`,n.jsx(e.li,{children:"TO-BE: 로그인하면 마음에 드는 노래를 찜하고,(줄바꿈) 내 취향에 맞는 피드를 만들 수 있어요. 「찜하고,」 뒤에서 일부러 줄을 바꾼다"}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"MainTabView.swift"})," ",n.jsx(e.code,{children:"GuestSignInPromptView"}),' ("Sign in to hype tracks, …")']}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"나만의 취향 만들기 버튼"})," (",n.jsx(e.code,{children:"guest-prompt"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 로그인"}),`
`,n.jsx(e.li,{children:"TO-BE: 내 취향 찾으러 가기"}),`
`,n.jsx(e.li,{children:'앱: 같은 뷰 ("Sign in")'}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"곡 고르기 제목"})," (",n.jsx(e.code,{children:"onboarding-seed"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 어떤 소리가 끌려요?"}),`
`,n.jsx(e.li,{children:"TO-BE: 마음에 드는 노래를 3곡까지 골라주세요."}),`
`,n.jsxs(e.li,{children:["제목은 ",n.jsx(e.code,{children:"title1"}),"(24) 그대로, 「마음에 드는 노래를」 뒤에서 줄바꿈해 두 줄로(2026-10-11 확정). 그냥 두면 「골라주/세요.」로 끊긴다"]}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"SeedPoolPickerView.swift"}),' header ("Which sound pulls you in?") · 3은 ',n.jsx(e.code,{children:"Self.limit"}),"로 넣는다"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"곡 고르기 부제"})," (",n.jsx(e.code,{children:"onboarding-seed"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 눌러서 들어보고 3곡까지 골라주세요."}),`
`,n.jsx(e.li,{children:"TO-BE: 선택한 곡을 기준으로 추천해 드릴게요."}),`
`,n.jsx(e.li,{children:'앱: 같은 header ("Tap to listen, then pick up to …")'}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"곡 고르기 둘째 부제 삭제"})," (",n.jsx(e.code,{children:"onboarding-seed"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 이제 하입한 곡을 기준으로 피드가 만들어져요. (업데이트 유저에게만 보임)"}),`
`,n.jsxs(e.li,{children:["TO-BE: 없음. ",n.jsx(e.code,{children:"isUpdate"})," 분기의 Text를 지운다."]}),`
`,n.jsx(e.li,{children:'앱: 같은 header ("Your feed follows the tracks you hype now.")'}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"더블탭 코치마크 본문"})," (",n.jsx(e.code,{children:"feed-coach"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1.0 시안: 빠르게 두 번 탭해볼까요?"}),`
`,n.jsx(e.li,{children:"TO-BE: 빠르게 두 번 클릭해 볼까요?"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"화면모션",children:"화면·모션"}),`
`,n.jsxs(e.ol,{start:"8",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"로그인 후 로딩에 원형 인디케이터 추가"})," (",n.jsx(e.code,{children:"onboarding-loading"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 로고 + Dignify만"}),`
`,n.jsxs(e.li,{children:["TO-BE: 아래에 원형 인디케이터(",n.jsx(e.code,{children:"ProgressView()"}),"), 12 간격"]}),`
`,n.jsxs(e.li,{children:["앱: 둘러보기 후 로그인 → 곡 후보를 받는 동안의 화면에만. 앱 실행 로딩(",n.jsx(e.code,{children:"AppRootView.swift"})," ",n.jsx(e.code,{children:"LaunchLoadingView"}),")은 그대로 둔다(인디케이터 없음)."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"더블탭 손 모션 주기"})," (",n.jsx(e.code,{children:"feed-coach"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1.0 시안: 1초 안에 두 번 탭 → 2초 쉼 (주기 3초)"}),`
`,n.jsx(e.li,{children:"TO-BE: 1초 안에 두 번 탭 → 1초 쉼 (주기 2초)"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"코치마크 기본값 확정"})," (",n.jsx(e.code,{children:"feed-coach*"}),", 「코치마크 — 직접 해 보기」)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"speed 1.0 · hold 0.3초 · handOffset −18 · captionBelow 25"}),`
`,n.jsx(e.li,{children:"hold = 하입 아이콘이 다 커진 뒤 사라지기 전까지 머무는 시간. 1.0 시안은 1초였다."}),`
`,n.jsx(e.li,{children:"handOffset·captionBelow는 1.0과 같다."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"스와이프 단계 화면 힌트:"})," 손이 쓸어 올리는 동안 곡 화면 전체가 32만큼 따라 올라갔다가 살짝 튕기며 돌아온다(2.4초 주기, 손과 같은 박자). 유저가 그 중간에 잡으면 그 위치에서 그대로 끌기로 이어진다. 잡는 동안 손 모션도 멈추고, 놓아서 제자리로 돌아오면 손과 화면 힌트를 ",n.jsx(e.strong,{children:"같은 순간에 처음부터"})," 다시 시작한다(따로 돌리면 박자가 어긋난다). 동작 줄이기 설정이면 움직이지 않는다"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 상단 배치"})," (",n.jsx(e.code,{children:"feed"}),", Components › FeedHeader)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 오른쪽 위에 성향(sparkles/shuffle)·검색 나란히, 그 아래 오른쪽에 모드 알약. 배지는 알약 아래(+33)"}),`
`,n.jsx(e.li,{children:"TO-BE: 한 줄. 왼쪽 성향 버튼 + 바로 옆 모드 알약, 오른쪽 끝 검색. 배지는 safe+56 고정"}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"FeedView.swift"})," ",n.jsx(e.code,{children:"searchControls"}),", ",n.jsx(e.code,{children:"contextBadge"})," 세로 위치"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 하단 액션 배치"})," (",n.jsx(e.code,{children:"feed"}),", Components › FeedTrack)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: 제목·아티스트 아래 줄에 왼쪽 하입 28, 오른쪽 상세(",n.jsx(e.code,{children:"opticaldisc"}),") · 공유"]}),`
`,n.jsxs(e.li,{children:["TO-BE: 아트워크 바로 아래(12) 오른쪽에 공유 · 더보기(",n.jsx(e.code,{children:"ellipsis"}),"). 하입은 오른쪽, 아래끝을 아티스트명 아래선에 맞춤(",n.jsx(e.code,{children:"alignment: .bottom"}),"), 크기 28 그대로"]}),`
`,n.jsxs(e.li,{children:["더보기는 SF Symbol ",n.jsx(e.code,{children:"ellipsis"})," 22 regular, 흰색 82% — 공유·지금 디스크 버튼(",n.jsx(e.code,{children:"TrackActionButton"}),")과 같은 스타일, 32 탭 영역"]}),`
`,n.jsxs(e.li,{children:["더보기(•••)가 트랙 상세를 연다 — 지금 디스크 버튼이 하던 일(",n.jsx(e.code,{children:"onOpenDetail"}),"). 공유는 그대로."]}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"FeedView.swift"})," ",n.jsx(e.code,{children:"TrackCardView"}),"의 액션 HStack"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 정보 줄 올리기"})," (",n.jsx(e.code,{children:"feed"}),", 피드 화면 Controls ",n.jsx(e.code,{children:"lift"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AS-IS: 칩·제목·아티스트 아래끝이 safe+72 — 탭바와 간격 23"}),`
`,n.jsx(e.li,{children:"TO-BE: safe+92 (20 올림) — 탭바와 간격 43. 아트워크는 위아래 사이 가운데라 10 같이 올라간다"}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"FeedView.swift"})," ",n.jsx(e.code,{children:".padding(.bottom, safeAreaInsets.bottom + 72)"})," → ",n.jsx(e.code,{children:"+ 92"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"하입-아이콘--하트-2026-10-11-기획-논의",children:"하입 아이콘 → 하트 (2026-10-11, 기획 논의)"}),`
`,n.jsxs(e.p,{children:["삽 아이콘만으로는 무슨 버튼인지 분명하지 않아서 「좋아요」로 읽히는 기본 하트로 바꾼다. 코드·서버 API 이름(hype)은 그대로 두고, ",n.jsx(e.strong,{children:"아이콘(14~18)과 화면 문구(19)"})," 를 바꾼다."]}),`
`,n.jsxs(e.ol,{start:"14",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 하입 버튼"})," (",n.jsx(e.code,{children:"feed"}),", ",n.jsx(e.code,{children:"feed-hyped"}),", Components › FeedTrack)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: ",n.jsx(e.code,{children:"HypeIcon"}),"(삽) 28, 전 ",n.jsx(e.code,{children:"textTertiary"})," / 후 ",n.jsx(e.code,{children:"brand"})]}),`
`,n.jsxs(e.li,{children:["TO-BE: 전 SF ",n.jsx(e.code,{children:"heart"})," / 후 SF ",n.jsx(e.code,{children:"heart.fill"}),", 크기 28·색은 그대로"]}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"FeedView.swift"})," ",n.jsx(e.code,{children:'Image("HypeIcon")'})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"하입 버스트"})," (Components › FeedTrack › 하입 버스트) — 튀었다 떨어지는 조각을 삽 → 찬 하트로"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"코치마크 하입 단계"})," (",n.jsx(e.code,{children:"feed-coach-hyped"}),") — 가운데 팝 아이콘을 삽 → 찬 하트(160, ",n.jsx(e.code,{children:"brand"}),")로"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"공유 카드 하입 배지"})," (Components › ShareCard) — 커버 오른쪽 위 원 안 아이콘을 찬 하트로. 앱: ",n.jsx(e.code,{children:"ShareCardView.swift"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"디깅 프로필 「담음」 칸"})," (Components › LensColumns) — 캡션 아이콘을 찬 하트로. 앱: ",n.jsx(e.code,{children:"DiggingProfileView.swift"})]}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["하입한 하트 색은 브랜드 컬러(",n.jsx(e.code,{children:"color.brand"}),") 그대로 — 빨간 하트로 바꾸지 않는다 (2026-10-11 확정)"]}),`
`]}),`
`,n.jsxs(e.ol,{start:"19",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"문구도 「하입」 → 「좋아요」"})," (2026-10-12 확정) — 화면에 보이는 문구만. 기능·API 이름은 그대로. 영어 값은 앱 반영 때 like 계열로 맞춘다",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"코치마크: 마음에 드는 노래를 하입했어요! → 마음에 드는 노래에 좋아요를 눌렀어요!"}),`
`,n.jsx(e.li,{children:"피드 모드 알약: 하입한 곡 따라가는 중 → 좋아요한 곡 따라가는 중"}),`
`,n.jsx(e.li,{children:"마이 설정: 하입한 곡 따라가기 / 켜면 하입한 곡과 … → 좋아요한 곡 따라가기 / 켜면 좋아요한 곡과 …"}),`
`,n.jsx(e.li,{children:"트랙 상세: 하입한 유저 / 아직 하입한 유저가 없어요 → 좋아요한 유저 / 아직 좋아요한 유저가 없어요"}),`
`,n.jsx(e.li,{children:"디깅 프로필·새 픽: 하입한 곡 → 좋아요한 곡 · 하입 기록 전체 보기 → 좋아요 기록 전체 보기"}),`
`,n.jsx(e.li,{children:"하입 기록 화면 제목: 하입 기록 → 좋아요 기록"}),`
`,n.jsx(e.li,{children:"유형 잠김: 트랙 10개를 캐고 3개를 하입하면 공개돼요. → 트랙 10개를 캐고 3개에 좋아요를 누르면 공개돼요."}),`
`,n.jsx(e.li,{children:"추천 기준 곡: 최근에 하입한 3곡을 기준으로 → 최근에 좋아요한 3곡을 기준으로"}),`
`,n.jsxs(e.li,{children:["Picks·마이 코치마크(",n.jsx(e.code,{children:"CoachMark"}),"): 마음에 들면 하입하세요 / 하입한 곡은 … → 마음에 들면 좋아요를 눌러요 / 좋아요한 곡은 … → 1.2에서 코치마크 자체 삭제"]}),`
`,n.jsxs(e.li,{children:["앱: ",n.jsx(e.code,{children:"Localizable.xcstrings"}),"에서 한국어 값에 「하입」이 들어간 키를 전부 찾아 바꾼다(위 목록 밖에 남은 게 없는지 검색으로 확인). 지난 릴리스 노트(What's New 과거 항목)는 그 당시 기록이라 그대로 둔다"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"feed_coachmark-10--2026-10-09--상태-반영됨-ios-130--android-130",children:"feed_coachmark 1.0 — 2026-10-09 · 상태: 반영됨 (iOS 1.3.0 · Android 1.3.0)"}),`
`,n.jsx(e.p,{children:"온보딩을 튜토리얼 카드에서 피드 제스처 코치마크로 바꾼 버전이다."}),`
`,n.jsx(e.h3,{id:"흐름",children:"흐름"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"튜토리얼 카드 삭제"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: 신규 유저 = 튜토리얼 카드 → 곡 고르기 → 피드 (",n.jsx(e.code,{children:"NewUserOnboardingView.swift"}),")"]}),`
`,n.jsxs(e.li,{children:["TO-BE: ",n.jsx(e.code,{children:"TutorialView"})," 삭제. 곡 고르기 → 피드 구성 중 → 피드(코치마크)"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"첫 실행 세 갈래"})," (Flows › 첫 실행)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"로그인 없이 둘러보기: 로그인 → 피드(코치마크) → Picks·마이를 누르면 「나만의 취향 만들기」"}),`
`,n.jsx(e.li,{children:"바로 로그인: 로그인 → 곡 고르기 → 피드 구성 중 → 피드(코치마크)"}),`
`,n.jsx(e.li,{children:"둘러보기 후 로그인: 로그인 시트 → 로딩 → 곡 고르기 → 피드 구성 중 → 피드"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Picks 탭도 「나만의 취향 만들기」"})," (",n.jsx(e.code,{children:"guest-prompt"}),", tab = picks)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: 게스트에게 마이 탭만 막는다 (",n.jsx(e.code,{children:"MainTabView.swift"})," ",n.jsx(e.code,{children:"content(for:)"}),"가 ",n.jsx(e.code,{children:".myPage"}),"만 검사)"]}),`
`,n.jsx(e.li,{children:"TO-BE: Picks 탭도 같은 화면"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"게스트용 로그인 시트"})," (",n.jsx(e.code,{children:"onboarding-signin-gate"}),")",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"왼쪽 위 「취소」, 「로그인 없이 둘러보기」 없음"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"새-화면컴포넌트",children:"새 화면·컴포넌트"}),`
`,n.jsxs(e.ol,{start:"5",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 제스처 코치마크"})," (",n.jsx(e.code,{children:"feed-coach"})," → ",n.jsx(e.code,{children:"feed-coach-hyped"})," → ",n.jsx(e.code,{children:"feed-coach-swipe"}),", 명세: Components › CoachGesture)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["피드의 기존 스포트라이트 코치마크(",n.jsx(e.code,{children:"FeedView.swift"})," ",n.jsx(e.code,{children:"FeedCoach.steps"}),")를 대신한다. Picks·마이 코치마크는 그대로 → 1.2에서 삭제"]}),`
`,n.jsx(e.li,{children:"문구·더블탭 주기·hold 기본값 → 1.1에서 바뀜"}),`
`,n.jsx(e.li,{children:"팝 아이콘(삽 → 하트)·문구(하입 → 좋아요) → 1.1에서 바뀜"}),`
`,n.jsx(e.li,{children:"더블탭 → 하입 아이콘 팝(hold 후 페이드) → 화면 터치 → 위로 쓸기. 따라 해야 넘어가고 「다음」 버튼이 없다."}),`
`,n.jsxs(e.li,{children:["위치는 아트워크 기준이다(",n.jsx(e.code,{children:"coachAnchor"}),"와 같은 원리). 좌표를 적지 않는다."]}),`
`,n.jsx(e.li,{children:"쓸어 올리는 동안 코치마크가 화면과 같이 끌려가며 흐려진다(화면 1/4에서 0). 넘어가지 않으면 다시 나타난다."}),`
`,n.jsxs(e.li,{children:["손 아이콘은 ",n.jsx(e.code,{children:"ic-hand-tap"}),"(디자인 레포 아이콘)으로 확정."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"피드 구성 중"})," (",n.jsx(e.code,{children:"onboarding-building"}),", 명세: Components › FeedBuilding)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"곡 고르기를 마친 뒤 첫 피드를 받는 동안. 최소 1초, 응답이 늦으면 올 때까지. → 1.2에서 바뀜(최소 2초)"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"하입 버스트"})," (Components › FeedTrack › 하입 버스트)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"하입하면 삽 조각이 튀었다가 떨어지고 버튼이 1.35배로 튄다. 더블탭·버튼 하입 둘 다."}),`
`,n.jsx(e.li,{children:"조각 모양 삽 → 하트 → 1.1에서 바뀜"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"게스트-하입",children:"게스트 하입"}),`
`,n.jsxs(e.ol,{start:"8",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"게스트 하입"})," (2026-10-11 확정)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["AS-IS: 게스트가 하입하면 바로 로그인 시트(",n.jsx(e.code,{children:"FeedView.swift"})," ",n.jsx(e.code,{children:"requireAccount()"}),")"]}),`
`,n.jsx(e.li,{children:"TO-BE 첫 번째(코치마크 더블탭): 로그인 시트 없이 하입 처리. 곡 id를 기기(UserDefaults)에 보관하고, 로그인하면 서버에 하입으로 저장한 뒤 지운다."}),`
`,n.jsxs(e.li,{children:["저장은 ",n.jsx(e.strong,{children:"하입 기록으로만"})," 남긴다. 곡 고르기 화면에 미리 골라 두지 않고, 3곡 기준에도 넣지 않는다."]}),`
`,n.jsxs(e.li,{children:["이미 하입된 곡이면 서버가 ",n.jsx(e.code,{children:"HYPE_ALREADY_REGISTERED"}),"를 준다 — 성공으로 보고 지운다."]}),`
`,n.jsxs(e.li,{children:["TO-BE 두 번째부터(버튼·더블탭 모두): 지금처럼 로그인 시트(",n.jsx(e.code,{children:"onboarding-signin-gate"}),") → 둘러보기 후 로그인 흐름."]}),`
`]}),`
`]}),`
`]})]})}function x(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
