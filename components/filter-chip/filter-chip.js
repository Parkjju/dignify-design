// components/filter-chip/filter-chip.md — 밝은 지면의 고르는 칩. 한 줄 가로 스크롤
export const FilterChip = ({ label = '록', selected = false } = {}) => `<span class="ds-filter-chip${selected ? ' is-on' : ''}">${label}</span>`
export const FilterChips = ({ items = ['전체', '록', 'R&B/소울'], selected = '전체' } = {}) =>
  `<div class="ds-filter-chips">${items.map(label => FilterChip({ label, selected: label === selected })).join('')}</div>`
