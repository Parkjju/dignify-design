function n({artist:s="혁오",cover:e="a-ohio",legal:t=!0}={}){return`<div class="ds-consent-sheet">
  <div class="ds-consent-sheet__body">
    <div class="ds-consent-sheet__head"><h2><em>${s} 신곡</em><br>소식을 받아보세요!</h2><p>소식을 받으려면 <b>기기 설정 &gt; 알림</b>을 켜주세요.</p></div>
    <div class="ds-consent-sheet__preview"><div class="ds-consent-sheet__phone"><span class="ds-consent-sheet__notch"></span>
      <div class="ds-consent-sheet__noti"><i class="art ${e}"></i><div><b>(광고) 좋아하실 아티스트 신곡 들어볼까요?</b><span>신곡과 어울리는 노래들도 함께 준비했어요💜</span></div></div>
    </div></div>
  </div>
  <div class="ds-consent-sheet__footer">
    ${t?`<p class="ds-consent-sheet__legal">'알림 받기'를 누르면 광고성 정보 수신에 동의해요.</p>`:""}
    <button class="ds-button ds-button--primary ds-consent-sheet__accept">알림 받기</button>
    <span class="ds-consent-sheet__later">일주일 동안 안 보기</span>
  </div>
</div>`}export{n as C};
