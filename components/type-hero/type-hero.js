// components/type-hero/type-hero.md
export function TypeHero({ locked = false, name = '충성파', genre = '록', blurb = '자기 취향을 알고, 거기에 충실해요.' } = {}) {
  return locked
    ? `<div class="ds-type-hero"><i class="ic ic-lock"></i><b>더 디깅하면 유형이 열려요</b><p>트랙 10개를 캐고 3개를 하입하면 공개돼요.</p></div>`
    : `<div class="ds-type-hero"><small>내 유형</small><h2>${name}</h2><span>${genre}에 진심</span><p>${blurb}</p></div>`
}
