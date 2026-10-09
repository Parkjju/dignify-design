// components/lens-columns/lens-columns.md
const col = (kind, items) => `<div class="ds-lens__col is-${kind}"><span class="ds-lens__cap">${kind === 'explore' ? '<i class="ic ic-headphones"></i>탐색' : '<i class="ic ic-hype"></i>담음'}</span>${
  items.length ? items.slice(0, 5).map(([n, c]) => `<p>${n}<span>${c}</span></p>`).join('') : '<p class="is-empty">—</p>'}</div>`
export function LensColumns({ title = '주요 장르', explore = [['록', 39], ['R&B/소울', 3], ['얼터너티브', 2], ['일렉트로닉', 2], ['힙합/랩', 1]],
  keep = [['록', 25], ['R&B/소울', 4], ['컨트리', 3], ['얼터너티브', 2], ['CCM', 2]] } = {}) {
  return `<section class="ds-lens"><h3>${title}</h3><div class="ds-lens__cols">${col('explore', explore)}${col('keep', keep)}</div></section>`
}
