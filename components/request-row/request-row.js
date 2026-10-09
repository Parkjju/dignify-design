// components/request-row/request-row.md — status: pending | added | canceled
const LABEL = { pending: '대기 중', added: '추가됨', canceled: '취소됨' }
export function RequestRow({ artist = '실리카겔', status = 'added', date = '2026년 10월 3일', reason = '' } = {}) {
  return `<div class="ds-request"><div class="ds-request__top"><b>${artist}</b><span class="ds-request__badge is-${status}">${LABEL[status]}</span></div>${reason ? `<p>${reason}</p>` : ''}<small>${date}</small></div>`
}
