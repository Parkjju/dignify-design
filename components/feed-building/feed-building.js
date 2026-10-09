// components/feed-building/feed-building.md — 추천 기준 곡을 고른 뒤 첫 피드를 받는 동안
export function FeedBuilding({ covers = ['a-wss', 'a-billann', 'a-seasons'], title = '취향에 맞춰 피드를 구성하고 있어요', body = '고른 곡과 비슷한 소리를 찾는 중이에요' } = {}) {
  return `<div class="ds-building">
  <div class="ds-building__covers">${covers.slice(0, 3).map((c, i) => `<i class="art ${c}" style="--i:${i}"></i>`).join('')}</div>
  <h1>${title}<span class="ds-building__dots"><i>.</i><i>.</i><i>.</i></span></h1><p>${body}</p>
</div>`
}
