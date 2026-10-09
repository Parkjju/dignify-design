// components/recent-searches/recent-searches.md
export function RecentSearches({ terms = ['잔나비', 'wave to earth', '혁오'], typed = '' } = {}) {
  return `<div class="ds-recent">${terms.length ? '<h4>최근 검색</h4>' : ''}${terms.map(t => `<div class="ds-recent__row"><i class="ic ic-clock"></i><span>${t}</span><i class="ds-recent__x"><i class="ic ic-xmark"></i></i></div>`).join('')}${
    typed ? `<div class="ds-recent__run"><i class="ic ic-search"></i>"${typed}" 검색</div>` : ''}</div>`
}
