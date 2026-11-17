// components/consent-sheet/consent-sheet.md — 좋아요 시점 신곡 알림 제안(P05). 화면에서 Sheet({ kind: 'bottom', bottom: 0 }) 안에 넣는다
// legal: 광고성 정보 수신 동의 문구(기획 Figma엔 없음 — 요건이라 추가, 기획 확인 대기)
export function ConsentSheet({ artist = '혁오', cover = 'a-ohio', legal = true } = {}) {
  return `<div class="ds-consent-sheet">
  <div class="ds-consent-sheet__body">
    <div class="ds-consent-sheet__head"><h2><em>${artist} 신곡</em><br>소식을 받아보세요!</h2><p>소식을 받으려면 <b>기기 설정 &gt; 알림</b>을 켜주세요.</p></div>
    <div class="ds-consent-sheet__preview"><span class="ds-consent-sheet__phone"></span><span class="ds-consent-sheet__notch"></span>
      <span class="ds-consent-sheet__card is-back"></span><span class="ds-consent-sheet__card"></span>
      <i class="art ${cover} ds-consent-sheet__icon"></i>
      <b class="ds-consent-sheet__t1">(광고) 좋아하실 아티스트 신곡 들어볼까요? 🎧</b><span class="ds-consent-sheet__t2">신곡과 어울리는 노래들도 함께 준비했어요💗</span>
    </div>
  </div>
  <div class="ds-consent-sheet__footer">
    ${legal ? `<p class="ds-consent-sheet__legal">'알림 받기'를 누르면 광고성 정보 수신에 동의해요.</p>` : ''}
    <button class="ds-button ds-button--primary ds-consent-sheet__accept">알림 받기</button>
    <span class="ds-consent-sheet__later">일주일 동안 안 보기</span>
  </div>
</div>`
}
