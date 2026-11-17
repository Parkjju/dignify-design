function t({title:p="이번 주 특집, 여기까지예요",message:a="방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요?",accept:o="알림 받기",decline:s="나중에",mark:d=!0,row:n=!1}={}){return n?`<div class="ds-popup ds-popup--consent">
  <div class="ds-popup__text"><h2>${p}</h2><p>${a}</p></div>
  <div class="ds-popup__row"><span class="ds-popup__decline">${s}</span><button class="ds-button ds-button--primary">${o}</button></div>
</div>`:`<div class="ds-popup${!d&&!s?" ds-popup--notice":""}">
  ${d?'<span class="ds-popup__mark"><i class="brand-mark"></i></span>':""}
  <h2>${p}</h2><p>${a}</p>
  <button class="ds-button ds-button--primary">${o}</button>
  ${s?`<span class="ds-popup__decline">${s}</span>`:""}
</div>`}const u=({os:p="ios",leaving:a=!1,z:o=92,...s}={})=>`<div class="dim ds-popup-layer is-${p}${a?" is-leaving":""}" style="z-index:${o}">${t(s)}</div>`;export{u as P,t as a};
