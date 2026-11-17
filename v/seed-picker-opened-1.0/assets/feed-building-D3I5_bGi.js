function l({covers:i=["a-wss","a-billann","a-seasons"],title:s="취향에 맞춰 피드를 구성하고 있어요",body:a="고른 곡과 비슷한 소리를 찾는 중이에요"}={}){return`<div class="ds-building">
  <div class="ds-building__covers">${i.slice(0,3).map((d,n)=>`<i class="art ${d}" style="--i:${n}"></i>`).join("")}</div>
  <h1>${s}<span class="ds-building__dots"><i>.</i><i>.</i><i>.</i></span></h1><p>${a}</p>
</div>`}export{l as F};
