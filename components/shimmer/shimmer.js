// components/shimmer/shimmer.md — 어두운 지면용
export function Shimmer({ width = 200, height = 200, radius = 24 } = {}) {
  return `<div class="ds-shimmer" style="width:${width}px;height:${height}px;border-radius:${radius}px"></div>`
}
