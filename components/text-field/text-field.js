// components/text-field/text-field.md
export function TextField({ value = '', placeholder = '', label = '', count = '', focused = false, compact = false } = {}) {
  const head = label ? `<div class="ds-field__head"><b>${label}</b>${count ? `<span>${count}</span>` : ''}</div>` : ''
  return `<label class="ds-field${compact ? ' is-compact' : ''}">${head}<span class="ds-field__box"><span class="${value ? '' : 'is-placeholder'}">${value || placeholder}</span>${focused ? '<i class="ds-field__caret"></i>' : ''}</span></label>`
}
