// components/menu-sheet/menu-sheet.md — rows: [라벨, 위험 여부]
export function MenuSheet({ rows = [['신고', false], ['@wavelover 차단', true]] } = {}) {
  return `<div class="ds-menu-sheet"><i class="ds-menu-sheet__grabber"></i>${
    rows.map(([l, d]) => `<div class="ds-menu-sheet__row${d ? ' is-destructive' : ''}">${l}</div>`).join('<i class="ds-menu-sheet__div"></i>')
  }<div class="ds-menu-sheet__cancel">취소</div></div>`
}
