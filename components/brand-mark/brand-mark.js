// components/brand-mark/brand-mark.md — 지면 brandLight, 라운드 size×0.25, 로고 여백 size×0.18
export function BrandMark({ size = 64 } = {}) {
  return `<span class="ds-brand-mark" style="width:${size}px;height:${size}px;border-radius:${size * .25}px;padding:${size * .18}px"><i class="brand-mark"></i></span>`
}
