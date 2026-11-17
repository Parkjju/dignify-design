function p({cover:l="a-seasons",title:n="seasons",artist:o="wave to earth",genre:a="",number:s=0,playing:i=!1,check:c=!1,play:r=!0,disabled:e=!1}={}){const t=c?s>0:s;return`<div class="ds-track-row${e&&!t?" is-disabled":""}">
  <span class="ds-track-row__thumb"><i class="art ${l}"></i>${r?`<i class="ic ic-${i?"pause":"play"}${i?" is-playing":""}"></i>`:""}</span>
  <span class="ds-track-row__text"><b>${n}</b><span>${o}${a?` · ${a}`:""}</span></span>
  <span class="ds-track-row__select">${t?`<i class="is-on">${c?'<i class="ic ic-checkmark"></i>':s}</i>`:"<i></i>"}</span>
</div>`}export{p as T};
