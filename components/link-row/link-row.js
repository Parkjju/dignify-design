// components/link-row/link-row.md
export function LinkRow({ label = '좋아요 기록 전체 보기' } = {}) {
  return `<a class="ds-link-row">${label}<i class="ic ic-chevron-right"></i></a>`
}
