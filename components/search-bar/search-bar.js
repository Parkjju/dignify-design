// components/search-bar/search-bar.md
export function SearchBar({ text = '', placeholder = '아티스트, 트랙 검색', focused = false } = {}) {
  return `<div class="ds-search-bar">
  <i class="ic ic-search"></i>
  <span class="ds-search-bar__field${text ? '' : ' is-placeholder'}">${text || placeholder}${focused ? '<i class="ds-search-bar__caret"></i>' : ''}</span>
  ${text ? '<i class="ic ic-xmark-circle"></i>' : ''}
</div>`
}
