// components/stat-pair/stat-pair.md
export function StatPair({ headline = '듣는 것도 담는 것도 록.', dug = 50, kept = 36 } = {}) {
  return `<div class="ds-stats">${headline ? `<p class="ds-stats__headline">${headline}</p>` : ''}<div class="ds-stats__pair">
  <div><b>${dug}</b><span>디깅한 트랙 <i class="ic ic-info-circle"></i></span></div><div><b>${kept}</b><span>담은 트랙</span></div></div></div>`
}
