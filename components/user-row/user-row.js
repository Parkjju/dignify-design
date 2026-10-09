// components/user-row/user-row.md
export function UserRow({ nickname = 'noisy_neighbor', swiped = false } = {}) {
  return `<div class="ds-user${swiped ? ' is-swiped' : ''}"><span>@${nickname}</span>${swiped ? '<b>차단 해제</b>' : ''}</div>`
}
