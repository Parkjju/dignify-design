// components/my-pick-row/my-pick-row.md
export function MyPickRow({ cover = 'a-loveya', title = '모두가 사랑하는 밴드', count = 3 } = {}) {
  return `<a class="ds-my-pick"><i class="art ${cover}"></i><span><b>${title}</b><small>픽 ${count}개</small></span><i class="ic ic-chevron-right"></i></a>`
}
