// components/button/button.md
const APPLE = '<svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" aria-hidden="true"><path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.1zM11.6 3c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z"/></svg>'
// variant: primary | small | block | fab | dark | outline-block | outline | destructive | apple
export function Button({ variant = 'primary', label = '확인', icon = '', disabled = false, busy = false } = {}) {
  const cls = ['ds-button', `ds-button--${variant}`, disabled && 'is-disabled'].filter(Boolean).join(' ')
  const lead = variant === 'apple' ? APPLE : icon ? `<i class="ic ic-${icon}"></i>` : ''
  return `<button class="${cls}" ${disabled ? 'disabled' : ''}>${busy ? '<span class="ds-button__spinner"></span>' : lead + label}</button>`
}
