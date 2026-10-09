// 스토리 공통: 명세 md를 Docs 설명으로, 어두운 지면 데코레이터, 커버 선택지.
export const docs = md => ({ docs: { description: { component: md.replace(/^# .*\n/, '') } } })
export const onDark = (bg = 'var(--color-pick-background)') => [story => `<div style="background:${bg};padding:24px;border-radius:12px">${story()}</div>`]
export const width = w => [story => `<div style="width:${w}px">${story()}</div>`]
export const COVERS = ['a-cannons', 'a-seasons', 'a-loveya', 'a-ohio', 'a-tomboy', 'a-bigvoid', 'a-billann', 'a-truth', 'a-farewell', 'a-friends', 'a-intro',
  'a-blame', 'a-shanty', 'a-lonely', 'a-findme', 'a-wss', 'a-comedown', 'a-cheeky', 'a-bulssi', 'a-bluff', 'a-always', 'a-fireworks']
