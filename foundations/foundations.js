// Foundations 스토리용 렌더러 — tokens/*.json 을 그대로 읽어 그린다(토큰을 고치면 자동 반영).
const kebab = s => s.replace(/[A-Z]/g, c => '-' + c.toLowerCase()).replace('_', '-')
const entries = g => Object.entries(g).filter(([k]) => !k.startsWith('$'))
const row = (sample, name, value, code, desc = '') => `<div class="fd-row">${sample}<div class="fd-name">${name}<small>${value}</small><code>${code}</code></div><div class="fd-desc">${desc}</div></div>`
const table = rows => `<style>
  .fd { width: 820px; font-family: -apple-system, sans-serif; }
  .fd-row { display: grid; grid-template-columns: 170px 230px 1fr; gap: 16px; align-items: center; padding: 12px 0; border-top: 1px solid #eee; }
  .fd-name { font: 600 13px ui-monospace, Menlo, monospace; } .fd-name small, .fd-name code { display: block; font-weight: 400; color: #9CA3AF; margin-top: 3px; font-size: 11px; }
  .fd-desc { font-size: 13px; color: #6B7280; line-height: 1.5; }
  .fd-swatch { width: 60px; height: 40px; border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0,0,0,.08); position: relative; overflow: hidden;
    background: repeating-conic-gradient(#ddd 0 25%, #fff 0 50%) 0 0 / 10px 10px; }
  .fd-swatch.dark { background: #141420; } .fd-swatch i { position: absolute; inset: 0; }
</style><div class="fd">${rows.join('')}</div>`

export const colors = g => table(entries(g).map(([n, t]) => {
  const v = typeof t.$value === 'string' ? t.$value : `${t.$value.hex} · ${Math.round(t.$value.alpha * 100)}%`
  return row(`<div class="fd-swatch${/OnDark/.test(n) ? ' dark' : ''}"><i style="background:var(--color-${kebab(n)})"></i></div>`, n, v, `DSColor.${n} · var(--color-${kebab(n)})`, t.$description)
}))
export const typography = g => table(entries(g).map(([n, t]) => row(
  `<div style="font:var(--typography-${kebab(n)});white-space:nowrap;overflow:hidden">가나다 Abc 123</div>`, n,
  typeof t.$value === 'string' ? t.$value : `${t.$value.fontSize}pt · ${t.$value.fontWeight}`, `DSTypography.${n} · font: var(--typography-${kebab(n)})`, t.$description)))
export const radius = g => table(entries(g).map(([n, t]) => row(
  `<div style="width:60px;height:40px;background:var(--color-brand-light);border:1.5px solid var(--color-brand);border-radius:var(--radius-${kebab(n)})"></div>`, n, `${t.$value}pt`, `DSRadius.${n} · var(--radius-${kebab(n)})`, t.$description)))
export const spacing = g => table(entries(g).map(([n, t]) => row(
  `<div style="height:14px;border-radius:2px;background:var(--color-brand);width:var(--spacing-${kebab(n)})"></div>`, n, `${t.$value}pt`, `DSSpacing.${n} · var(--spacing-${kebab(n)})`)))

// 아이콘·커버는 screens/_shared.css 의 클래스 목록에서 뽑는다.
export const icons = css => `<div style="display:grid;grid-template-columns:repeat(6,120px);gap:16px;font-family:-apple-system,sans-serif">${
  ['hype', ...[...css.matchAll(/^\.ic-([a-z-]+) \{ --i: url/gm)].map(m => m[1])].map(n =>
    `<div style="text-align:center"><i class="ic ic-${n}" style="font-size:28px;color:#111827"></i><div style="font:11px ui-monospace,monospace;color:#6B7280;margin-top:8px">ic-${n}</div></div>`).join('')}</div>`
export const covers = css => `<div style="display:grid;grid-template-columns:repeat(6,120px);gap:16px;font-family:-apple-system,sans-serif">${
  [...css.matchAll(/^\.a-([a-z0-9]+) \{.*\/\* (.*) \*\/$/gm)].map(m =>
    `<div><i class="art a-${m[1]}" style="width:120px;height:120px;border-radius:16px"></i><div style="font:11px ui-monospace,monospace;color:#6B7280;margin-top:6px">a-${m[1]}</div><div style="font-size:11px;color:#9CA3AF">${m[2]}</div></div>`).join('')}</div>`
