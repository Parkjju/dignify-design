function i({text:s="",placeholder:a="아티스트, 트랙 검색",focused:c=!1}={}){return`<div class="ds-search-bar">
  <i class="ic ic-search"></i>
  <span class="ds-search-bar__field${s?"":" is-placeholder"}">${s||a}${c?'<i class="ds-search-bar__caret"></i>':""}</span>
  ${s?'<i class="ic ic-xmark-circle"></i>':""}
</div>`}export{i as S};
