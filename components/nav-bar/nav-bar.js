// components/nav-bar/nav-bar.md
export function NavBar({ title = '디깅 프로필', back = true, left = '', right = '', rightIcon = '' } = {}) {
  const l = back ? '<span class="glass-btn"><i class="ic ic-chevron-left"></i></span>' : left ? `<span class="glass-btn text ds-nav__secondary">${left}</span>` : ''
  return `<div class="ds-nav"><span class="ds-nav__side">${l}</span><h1>${title}</h1><span class="ds-nav__side is-right">${right ? `<span class="glass-btn text ds-nav__action">${right}</span>` : ''}${rightIcon ? `<span class="glass-btn"><i class="ic ic-${rightIcon}"></i></span>` : ''}</span></div>`
}
