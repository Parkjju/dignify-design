import{B as s}from"./button-WsS0bk8m.js";function o({cover:i="a-cannons",title:d="Cannons",artist:l="Phil Wickham",album:n="Cannons",genre:e="CCM",released:t="2007.06.19",hypers:a=[["digger_lover","2026. 09. 24."],["wavelover","2026. 09. 18."],["crate_kid","2026. 09. 02."]]}={}){return`<div class="ds-detail">
  <div class="ds-detail__head"><i class="art ${i}"></i><div><h2>${d}</h2><p class="by">${l}</p><p class="album">${n}</p><div class="tags"><span>${e}</span><span>${t}</span></div></div></div>
  <div class="ds-detail__div"></div>
  <div class="ds-detail__hypers"><h3>좋아요한 유저</h3>${a.length?a.map(([c,p])=>`<p>@${c}<span>${p}</span></p>`).join(""):'<p class="is-empty">아직 좋아요한 유저가 없어요</p>'}</div>
  <div class="ds-detail__stores">${s({variant:"dark",label:"Apple Music에서 듣기",icon:"music-note"})}${s({variant:"outline-block",label:"YouTube Music에서 찾기",icon:"play"})}</div>
</div>`}export{o as T};
