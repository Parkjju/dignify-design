// components/artist-request-form/artist-request-form.md
import { TextField } from '../text-field/text-field.js'
export function ArtistRequestForm({ value = '검정치마', sent = false } = {}) {
  if (sent) return `<div class="ds-request-form is-sent"><i class="ic ic-checkmark-circle"></i><h2>요청 완료</h2><p>추가되면 알림으로 알려드릴게요.</p></div>`
  return `<div class="ds-request-form"><h2>아티스트 요청하기</h2><p>찾는 아티스트가 없나요? 알려주시면 추가를 검토할게요.</p>${TextField({ compact: true, value, placeholder: '아티스트 이름', focused: true })}<button class="ds-request-form__send${value ? '' : ' is-disabled'}">요청 보내기</button></div>`
}
