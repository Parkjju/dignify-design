// 기존 HTML 시안을 Storybook 캔버스에 띄운다. 경로가 상대라 로컬·GitHub Pages 둘 다 된다.
export const frame = file => () => `<iframe src="screens/${file}.html" style="width:440px;height:900px;border:0;display:block" title="${file}"></iframe>`
