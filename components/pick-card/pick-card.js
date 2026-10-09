// components/pick-card/pick-card.md
// PickThumbnailStack: 앞 커버가 왼쪽, 뒤로 갈수록 40씩 밀리고 0→4° 기울어진다.
const stack = cs => cs.map((c, i) => {
  const t = cs.length > 1 ? i / (cs.length - 1) : 0
  return `<i class="art ${c}" style="left:${i * 40}px;transform:rotate(${t * 4}deg);z-index:${cs.length - i}"></i>`
}).reverse().join('')

export function PickCard({ nickname = 'digger_lover', verified = false, time = '12분 전', title = '모두가 사랑하는 밴드',
  covers = ['a-loveya', 'a-ohio', 'a-tomboy'], trackCount = 12, reactions = 3, reacted = false, mine = false, plays = 0 } = {}) {
  const extra = trackCount - Math.min(covers.length, 3)
  return `<article class="ds-pick-card">
  <div class="ds-pick-card__who"><b>@${nickname}</b>${verified ? '<i class="ic ic-seal ds-pick-card__seal"></i>' : ''}<span class="ds-pick-card__dot">·</span>${time}<span class="ds-pick-card__more"><i class="ic ic-ellipsis"></i></span></div>
  <h3 class="ds-pick-card__title">${title}</h3>
  <div class="ds-pick-card__media"><i class="art ${covers[0]} ds-pick-card__blur"></i>
    <div class="ds-pick-card__stack" style="width:${150 + 40 * (Math.min(covers.length, 3) - 1)}px">${stack(covers.slice(0, 3))}${extra > 0 ? `<b>+${extra}</b>` : ''}</div></div>
  <div class="ds-pick-card__bar">
    <span class="ds-pick-card__react${reacted ? ' is-mine' : ''}${mine ? ' is-static' : ''}">🔥${reactions ? `<b>${reactions}</b>` : ''}</span>
    <span class="ds-pick-card__meta"><i class="ic ic-music-note"></i>${trackCount}곡</span>
    ${plays >= 5 ? `<span class="ds-pick-card__meta"><i class="ic ic-play"></i>재생 ${plays}회</span>` : ''}
    <span class="ds-pick-card__share"><i class="ic ic-share"></i></span>
  </div>
</article>`
}
