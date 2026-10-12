// components/section-header/section-header.md
export function SectionHeader({ variant = 'title', title = '좋아요한 곡', action = '' } = {}) {
  return `<div class="ds-section ds-section--${variant}"><h3>${title}</h3>${action ? `<a>${action}</a>` : ''}</div>`
}
