function t({title:s="이번 주 특집, 여기까지예요",message:p="방금 보신 곡들은 저희가 직접 판 거예요. 매주 새로 파고 있는데, 다음 편 올라오면 알려드릴까요?",accept:a="알림 받기",decline:n="나중에"}={}){return`<div class="ds-popup">
  <span class="ds-popup__mark"><i class="brand-mark"></i></span>
  <h2>${s}</h2><p>${p}</p>
  <button class="ds-button ds-button--primary">${a}</button>
  <span class="ds-popup__decline">${n}</span>
</div>`}export{t as P};
