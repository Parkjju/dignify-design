// components/tutorial-page/tutorial-page.md
// 문구는 Localizable.xcstrings 한국어 값, 아이콘은 TutorialPage.all 의 SF Symbol 근사
export const TUTORIAL = [
  ['hand-tap', '더블 탭으로 하입', '마음에 드는 곡이 있나요? 카드를 더블 탭하면 바로 하입할 수 있어요.'],
  ['hype', '하입 버튼을 눌러도 돼요', '하입 버튼을 누르면 마음에 드는 곡을 저장할 수 있어요.'],
  ['disc', '트랙 정보 보기', '디스크 아이콘을 누르면 상세 정보와 감상할 수 있는 곳을 볼 수 있어요.'],
  ['hand-tap', '마이페이지에서 길게 누르기', '마이페이지에서 트랙을 길게 누르면 상세 정보를 보거나 삭제할 수 있어요.'],
  ['play', '마이페이지에서 바로 재생', '마이페이지에서 트랙을 누르면 미리듣기를 바로 재생할 수 있어요.'],
  ['stack', '첫 픽 만들기', '픽 탭에서 좋아하는 곡을 묶어 올릴 수 있어요. 다른 사람이 듣고 🔥로 반응해요.'],
  ['person', '찾는 아티스트가 없나요?', '검색 후 요청 버튼을 누르거나, 마이페이지의 아티스트 요청에서 추가할 수 있어요.'],
]
export function TutorialPage({ page = 0 } = {}) {
  const [icon, title, body] = TUTORIAL[page] || TUTORIAL[0]
  return `<div class="ds-tutorial"><span class="ds-tutorial__circle"><i class="ic ic-${icon}"></i></span><div><h1>${title}</h1><p>${body}</p></div></div>`
}
