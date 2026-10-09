// components/button/button.md
export function Button({ variant = 'primary', label = '확인', disabled = false, busy = false } = {}) {
  const cls = ['ds-button', `ds-button--${variant}`, disabled && 'is-disabled'].filter(Boolean).join(' ')
  return `<button class="${cls}" ${disabled ? 'disabled' : ''}>${busy ? '<span class="ds-button__spinner"></span>' : label}</button>`
}
