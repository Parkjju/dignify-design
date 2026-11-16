// components/system-alert/system-alert.md — OS 알림 권한 팝업(우리 것이 아니다 — 흐름 확인용 자리표시)
export function SystemAlert({ app = 'Dignify' } = {}) {
  return `<div class="ds-system-alert-layer"><div class="ds-system-alert" role="alertdialog">
  <div class="ds-system-alert__text"><b>'${app}'에서 알림을 보내고자 합니다</b><p>경고, 사운드 및 아이콘 배지가 알림에 포함될 수 있습니다. 설정에서 이를 구성할 수 있습니다.</p></div>
  <div class="ds-system-alert__row"><span class="ds-system-alert__deny">허용 안 함</span><span class="ds-system-alert__allow">허용</span></div>
</div></div>`
}
