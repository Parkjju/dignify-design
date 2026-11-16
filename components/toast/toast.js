// components/toast/toast.md — 처리 결과 알림(스낵바). 위치는 화면이 정한다(탭바 위 8)
// date: 처리 일자(서버 응답값). kind: on(수신동의) | off(수신거부) | night-on | night-off | fail | need-consent
export const TOASTS = {
  on: ['알림 설정을 저장했어요', d => `Dignify의 광고성 정보 수신동의가 ${d}에 처리되었습니다.`],
  off: ['알림 설정을 저장했어요', d => `Dignify의 광고성 정보 수신거부가 ${d}에 처리되었습니다.`],
  'night-on': ['알림 설정을 저장했어요', d => `Dignify의 야간 광고성 정보 수신동의가 ${d}에 처리되었습니다.`],
  'night-off': ['알림 설정을 저장했어요', d => `Dignify의 야간 광고성 정보 수신거부가 ${d}에 처리되었습니다.`],
  fail: ['저장에 실패했어요. 다시 시도해 주세요.'],
  'need-consent': ['광고성 정보 알림을 먼저 동의해야해요.', () => '광고성 정보 알림 수신을 동의해야 야간 알림을 설정할 수 있어요.'],
}
export function Toast({ kind = 'on', date = '2026-11-12', leaving = false } = {}) {
  const [title, sub] = TOASTS[kind]
  return `<div class="ds-toast${leaving ? ' is-leaving' : ''}" role="status"><b>${title}</b>${sub ? `<span>${sub(date)}</span>` : ''}</div>`
}
