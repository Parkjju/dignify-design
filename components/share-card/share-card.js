// components/share-card/share-card.md — variant: track | pick | profile
const footer = '<div class="ds-share__footer"><span><i class="ds-share__mark"><i class="brand-mark"></i></i>dignify</span><small>dig deeper</small></div>'
export function ShareCard({ variant = 'track', cover = 'a-cannons', title = 'Cannons', artist = 'Phil Wickham', genre = 'CCM', nickname = 'digger_lover',
  tracks = [['LOVE YA!', '혁오'], ['Ohio', '혁오'], ['TOMBOY', '혁오'], ['BIG VOID', '실리카겔'], ['주저하는 연인들을 위해', '잔나비']], more = 7,
  type = '충성파', flavor = '록', headline = '듣는 것도 담는 것도 록.', dug = 50, kept = 36 } = {}) {
  if (variant === 'profile') return `<div class="ds-share is-profile"><div class="ds-share__grooves">${Array.from({ length: 10 }, (_, i) => `<i style="width:${200 + i * 66}px;height:${200 + i * 66}px"></i>`).join('')}</div>
  <div class="ds-share__body" style="padding-top:56px"><span class="ds-share__label">내 디깅 유형</span><i class="ds-share__fill"></i><h1 class="ds-share__type">${type}</h1><p class="ds-share__flavor">${flavor}에 진심</p><p class="ds-share__headline">${headline}</p>
  <div class="ds-share__stats"><div><b>${dug}</b><span>디깅한 트랙</span></div><div><b>${kept}</b><span>담은 트랙</span></div></div><i class="ds-share__fill"></i>${footer}</div></div>`
  const top = variant === 'pick'
    ? `<i class="art ${cover} ds-share__cover is-pick"></i><h1 class="ds-share__title is-pick">${title}</h1><p class="ds-share__by is-pick">@${nickname}</p>
       <div class="ds-share__rows">${tracks.slice(0, 5).map(([t, a], k) => `<p><i>${k + 1}</i><b>${t}</b><span>${a}</span></p>`).join('')}${more ? `<p class="more">외 ${more}곡</p>` : ''}</div>`
    : `<div class="ds-share__cover-wrap"><i class="art ${cover} ds-share__cover"></i><span class="ds-share__hype"><i class="ic ic-hype"></i></span></div><h1 class="ds-share__title">${title}</h1><p class="ds-share__by">${artist}</p>${genre ? `<span class="ds-share__genre">${genre}</span>` : ''}`
  return `<div class="ds-share is-${variant}"><i class="art ${cover} ds-share__bg"></i><div class="ds-share__body"><span class="ds-share__label">${variant === 'pick' ? 'PICK' : 'DIGGING'}</span><i class="ds-share__fill"></i>${top}<i class="ds-share__fill"></i>${footer}</div></div>`
}
