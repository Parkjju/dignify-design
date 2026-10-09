// components/crate-cell/crate-cell.md — mode: default | edit | select
export function CrateCell({ cover = 'a-farewell', title = 'Farewell to Arms!', artist = '잔나비', mode = 'default', selected = false } = {}) {
  const badge = mode === 'edit' ? '<i class="ds-crate-cell__remove"><i class="ic ic-minus-circle"></i></i>'
    : mode === 'select' ? `<i class="ds-crate-cell__pick${selected ? ' is-on' : ''}">${selected ? '<i class="ic ic-checkmark"></i>' : ''}</i>` : ''
  return `<div class="ds-crate-cell"><i class="art ${cover}"></i>${badge}<b>${title}</b><span>${artist}</span></div>`
}
export function CrateDayRow({ date = '2026년 10월 7일', items = [], mode = 'default', selected = [] } = {}) {
  return `<div class="ds-crate-day"><h4>${date}</h4><div class="ds-crate-day__cells">${
    items.map(it => CrateCell({ ...it, mode, selected: selected.includes(it.cover) })).join('')}</div></div>`
}
