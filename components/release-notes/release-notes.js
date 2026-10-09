// components/release-notes/release-notes.md
export function ReleaseNotes({ releases = [['1.2.1', ["이번 주 특집 표시가 '하입한 곡 따라가는 중' 버튼과 겹치지 않아요."]],
  ['1.2.0', ['앱을 나가거나 화면을 꺼도 노래가 계속 나와요.', '잠금화면, 이어폰, 차에서 다음 곡으로 넘길 수 있어요.', '화면을 꺼두면 한 곡이 끝날 때 알아서 다음 곡으로 넘어가요.', '잠금화면에서 바로 하입할 수 있어요.']]] } = {}) {
  return `<div class="ds-release">${releases.map(([v, notes]) => `<div><small>버전 ${v}</small>${notes.map(n => `<p>${n}</p>`).join('')}</div>`).join('')}</div>`
}
