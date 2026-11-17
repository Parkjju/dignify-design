function n({cover:c="a-seasons",title:i="seasons",artist:t="wave to earth",number:s=0,playing:a=!1}={}){return`<div class="ds-track-row">
  <span class="ds-track-row__thumb"><i class="art ${c}"></i><i class="ic ic-${a?"pause":"play"}${a?" is-playing":""}"></i></span>
  <span class="ds-track-row__text"><b>${i}</b><span>${t}</span></span>
  <span class="ds-track-row__select">${s?`<i class="is-on">${s}</i>`:"<i></i>"}</span>
</div>`}export{n as T};
