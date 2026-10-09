// components/page-dots/page-dots.md
export function PageDots({ count = 7, index = 0, dark = false } = {}) {
  return `<div class="ds-dots${dark ? ' is-dark' : ''}">${Array.from({ length: count }, (_, i) => `<i class="${i === index ? 'is-on' : ''}"></i>`).join('')}</div>`
}
