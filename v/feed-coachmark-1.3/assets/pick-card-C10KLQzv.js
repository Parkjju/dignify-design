const _=s=>s.map((c,a)=>{const d=s.length>1?a/(s.length-1):0;return`<i class="art ${c}" style="left:${a*40}px;transform:rotate(${d*4}deg);z-index:${s.length-a}"></i>`}).reverse().join("");function $({nickname:s="digger_lover",verified:c=!1,time:a="12분 전",title:d="모두가 사랑하는 밴드",covers:i=["a-loveya","a-ohio","a-tomboy"],trackCount:l=12,reactions:e=3,reacted:p=!1,mine:n=!1,plays:t=0}={}){const r=l-Math.min(i.length,3);return`<article class="ds-pick-card">
  <div class="ds-pick-card__who"><b>@${s}</b>${c?'<i class="ic ic-seal ds-pick-card__seal"></i>':""}<span class="ds-pick-card__dot">·</span>${a}<span class="ds-pick-card__more"><i class="ic ic-ellipsis"></i></span></div>
  <h3 class="ds-pick-card__title">${d}</h3>
  <div class="ds-pick-card__media"><i class="art ${i[0]} ds-pick-card__blur"></i>
    <div class="ds-pick-card__stack" style="width:${150+40*(Math.min(i.length,3)-1)}px">${_(i.slice(0,3))}${r>0?`<b>+${r}</b>`:""}</div></div>
  <div class="ds-pick-card__bar">
    <span class="ds-pick-card__react${p?" is-mine":""}${n?" is-static":""}">🔥${e?`<b>${e}</b>`:""}</span>
    <span class="ds-pick-card__meta"><i class="ic ic-music-note"></i>${l}곡</span>
    ${t>=5?`<span class="ds-pick-card__meta"><i class="ic ic-play"></i>재생 ${t}회</span>`:""}
    <span class="ds-pick-card__share"><i class="ic ic-share"></i></span>
  </div>
</article>`}export{$ as P};
