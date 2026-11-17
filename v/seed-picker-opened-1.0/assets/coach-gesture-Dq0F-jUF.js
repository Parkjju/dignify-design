const c={"double-tap":["마음에 드는 노래를 찾았어요!","빠르게 두 번 클릭해 볼까요?"],hyped:["마음에 드는 노래에 좋아요를 눌렀어요!","관심이 가는 노래를 더 찾으러 가볼까요?"],"swipe-up":["다음 노래로 넘어가 볼까요?","화면을 위로 쓸어 올려보세요"]};function r({gesture:s="double-tap",title:a,body:t,handOffset:e=-18,captionBelow:o=25,speed:d=1,hold:i=.3,once:p=!1}={}){const[l,n]=c[s]||c["double-tap"],h=s==="hyped"?"":`<span class="ds-coach-gesture__hand is-${s}"><i class="ds-coach-gesture__ring"></i><i class="ic ic-hand-tap"></i></span>`;return`<div class="ds-coach-gesture${p?" is-once":""}" style="--k:${1/d};--hold:${i}s">
  <div class="ds-coach-gesture__mark" style="top:calc(50% + ${e}px)">${h}</div>
  <div class="ds-coach-gesture__caption" style="bottom:${-o}px"><b>${a??l}</b><p>${t??n}</p></div>
</div>`}export{r as C};
