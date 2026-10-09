// components/pill-on-dark/pill-on-dark.md
export function PillOnDark({ variant = 'chip', label = '비슷한 곡: Blame' } = {}) {
  const trail = { mode: '<i class="ic ic-swap"></i>', query: '<i class="ic ic-xmark"></i>' }[variant] || ''
  return `<span class="ds-pill ds-pill--${variant}">${label}${trail}</span>`
}
