function i({items:d=[],limit:a=3,numbered:n=!0,hint:l=""}={}){const t=[...d].sort((e,s)=>e.number-s.number),r=t.length>=a,c=e=>{const s=t[e];return s?`<span class="ds-seed-tray__slot"><i class="art ${s.cover}"></i>${n?`<i class="ds-seed-tray__no">${s.number}</i>`:""}<i class="ds-seed-tray__x"><i class="ic ic-xmark"></i></i></span>`:'<span class="ds-seed-tray__slot is-empty"></span>'};return`<div class="ds-seed-tray${r?" is-full":""}">
  <div class="ds-seed-tray__label"><b>선택한 곡 <em>${t.length}/${a}</em></b><span>${l||(r?"바꾸려면 빼 주세요":"누르면 그 곡으로 가요")}</span></div>
  <div class="ds-seed-tray__slots">${Array.from({length:a},(e,s)=>c(s)).join("")}</div>
</div>`}export{i as S};
