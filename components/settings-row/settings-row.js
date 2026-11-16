// components/settings-row/settings-row.md — variant: link | destructive | toggle | card | value(오른쪽 상태 글자 + 화살표)
export function SettingsRow({ variant = 'link', label = '추천 기준 곡', caption = '', on = true, value = '' } = {}) {
  if (variant === 'toggle') return `<div class="ds-settings-toggle"><div>${label}<span class="ds-switch${on ? ' is-on' : ''}"></span></div>${caption ? `<p>${caption}</p>` : ''}</div>`
  if (variant === 'value') return `<div class="ds-settings-row ds-settings-row--value">${label}<span>${value}<i class="ic ic-chevron-right"></i></span></div>`
  if (variant === 'card') return `<div class="ds-settings-card"><span class="ds-settings-card__icon"><i class="ic ic-chart-bar"></i></span><div><b>${label}</b><span>${caption}</span></div><i class="ic ic-chevron-right"></i></div>`
  return `<div class="ds-settings-row${variant === 'destructive' ? ' is-destructive' : ''}">${label}${variant === 'link' ? '<i class="ic ic-chevron-right"></i>' : ''}</div>`
}
