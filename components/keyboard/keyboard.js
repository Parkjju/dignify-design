// components/keyboard/keyboard.md — 시안용 자리표시(시스템 키보드)
const ROWS = [['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'], ['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'], ['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']]
export function Keyboard({ returnKey = '검색' } = {}) {
  const k = r => r.map(c => `<b>${c}</b>`).join('')
  return `<div class="keyboard ds-keyboard"><div>${k(ROWS[0])}</div><div>${k(ROWS[1])}</div><div><b class="w">⇧</b>${k(ROWS[2])}<b class="w">⌫</b></div><div><b class="w">123</b><b class="sp">스페이스</b><b class="w ds-keyboard__return">${returnKey}</b></div></div>`
}
