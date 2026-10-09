// components/segmented/segmented.md
export function Segmented({ options = ['이번 주', '전체'], selected = 1 } = {}) {
  return `<div class="ds-seg" role="tablist">${options.map((o, i) => `<span role="tab" aria-selected="${i === selected}" class="${i === selected ? 'is-on' : ''}">${o}</span>`).join('')}</div>`
}
