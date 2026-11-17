import{P as $}from"./pill-on-dark-AFKXiiFh.js";const k=[[-58,70,-200,14],[-34,96,160,18],[-10,84,-120,12],[14,104,220,20],[36,78,-160,14],[58,92,140,16],[-46,52,260,12],[46,58,-240,12]].map(([s,i,e,a],c)=>`<i class="ic ic-heart-fill ds-feed-track__bit" style="--x:${s}px;--up:${-i}px;--r:${e}deg;font-size:${a}px"></i>`).join("");function o({cover:s="a-cannons",title:i="Cannons",artist:e="Phil Wickham",chip:a="비슷한 곡: Blame",hyped:c=!1,burst:d=!1,speed:l=1,hold:r=.3,overlay:_="",width:t=393,height:f=640,top:n=24,bottom:p=24}={}){return`<div class="ds-feed-track" style="width:${t}px;height:${f}px;--k:${1/l};--hold:${r}s">
  <i class="art ${s} ds-feed-track__bg"></i><div class="ds-feed-track__scrim"></div>
  <div class="ds-feed-track__body" style="top:${n}px;bottom:${p}px">
    <div class="ds-feed-track__center">
      <div class="ds-feed-track__stage"><i class="art ${s} ds-feed-track__cover" style="width:${t-48}px;height:${t-48}px"></i>${d?'<i class="ic ic-heart-fill ds-feed-track__big"></i>':""}${_}</div>
      <div class="ds-feed-track__actions"><span class="ds-feed-track__act"><i class="ic ic-share"></i></span><span class="ds-feed-track__act"><i class="ic ic-ellipsis"></i></span></div>
    </div>
    <div class="ds-feed-track__meta">
      <div class="ds-feed-track__info">
        <div>${a?$({variant:"chip",label:a}):""}<p class="ds-feed-track__title">${i}</p><p class="ds-feed-track__artist">${e}</p></div>
        <span class="ds-feed-track__hype${c?" is-on":""}${d?" is-burst":""}" style="--k:${1/l}"><i class="ic ${c?"ic-heart-fill":"ic-heart"}"></i>${d?k:""}</span>
      </div>
    </div>
  </div>
</div>`}export{o as F};
