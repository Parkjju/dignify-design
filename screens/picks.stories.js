// Picks — 프로토타입 하나로 직접 해 본다(screens/live.js).
// 목록: 카드 = 픽 재생(탭 = 다음 곡, ✕ = 닫기), 🔥 = 반응, ••• = 메뉴(내 픽이면 제목 수정·삭제), 새 픽 = 곡 고르기 → 다음 → 제목 → 올리기
import { live, go, back } from './live.js'
import { PicksScreen, PickPlayScreen, PickMenuScreen, PickComposeScreen, PickComposeTitleScreen } from './picks.js'
import { T, PICKS } from './data.js'
export default { title: 'Screens/2. Picks', parameters: { layout: 'centered' } }

const POOL = [
  { date: '2026년 10월 7일', tracks: [T.seasons, T.cheeky, T.bulssi] },
  { date: '2026년 10월 5일', tracks: [T.bluff, T.always, T.fireworks, T.comedown] },
]
const PLAY = [T.loveya, T.ohio, T.tomboy, T.bigvoid, T.billann, T.truth]
const ME = 'digger_lover'

const view = s => {
  if (s.screen === 'play') {
    const p = s.picks[s.pick]
    return PickPlayScreen({ track: PLAY[s.track % PLAY.length], chip: '록', hyped: s.hyped, nickname: p.nickname, index: s.track + 1, total: p.trackCount })
  }
  if (s.screen === 'menu') { const p = s.picks[s.pick]; return PickMenuScreen({ picks: s.picks, mine: p.nickname === ME, nickname: p.nickname }) }
  const chosen = POOL.flatMap(d => d.tracks).filter(t => s.chosen.includes(t.cover)).sort((a, b) => s.chosen.indexOf(a.cover) - s.chosen.indexOf(b.cover))
  if (s.screen === 'compose') return PickComposeScreen({ selected: s.chosen.length, sections: POOL.map(d => ({ ...d,
    tracks: d.tracks.map(t => ({ ...t, number: s.chosen.indexOf(t.cover) + 1, playing: s.playing === t.cover })) })) })
  if (s.screen === 'title') return PickComposeTitleScreen({ title: '', fallback: `${chosen[0].artist}${chosen.length > 1 ? ` 외 ${chosen.length - 1}명` : ''}`, tracks: chosen.map((t, i) => ({ ...t, number: i + 1 })) })
  return PicksScreen({ picks: s.picks })
}

const rowTrack = i => POOL.flatMap(d => d.tracks)[i]
export const Picks = { name: 'Picks', args: { picks: PICKS },
  render: live({
    init: a => ({ screen: 'list', picks: a.picks, pick: 0, track: 0, hyped: false, chosen: [], playing: '' }),
    view,
    taps: [
      // 픽 재생
      ['.ds-feed-header__close', s => s.screen === 'play' ? back(s) : undefined],
      ['.ds-feed-track__hype', s => s.screen === 'play' ? { hyped: !s.hyped } : undefined],
      ['.ds-feed-track', s => s.screen === 'play' ? { track: s.track + 1, hyped: false } : undefined],
      // 메뉴 시트 — 어느 줄이든 닫힌다(신고·차단·수정·삭제는 시안 범위 밖)
      ['.ds-menu-sheet__row, .ds-menu-sheet__cancel, .dim', s => s.screen === 'menu' ? back(s) : undefined],
      // 목록
      ['.ds-pick-card__more', (s, { i }) => go(s, 'menu', { pick: i })],
      ['.ds-pick-card__react:not(.is-static)', (s, { i }) => ({ picks: s.picks.map((p, j) => j !== i ? p : { ...p, reacted: !p.reacted, reactions: p.reactions + (p.reacted ? -1 : 1) }) })],
      ['.ds-pick-card__share', () => ({})],
      ['.ds-pick-card', (s, { i }) => go(s, 'play', { pick: i, track: 0, hyped: false })],
      ['.ds-button--fab', s => go(s, 'compose', { chosen: [], playing: '' })],
      // 새 픽 — 곡 고르기
      ['.ds-nav__secondary', s => back(s)],
      ['.ds-track-row__select', (s, { i }) => {
        if (s.screen !== 'compose') return undefined
        const c = rowTrack(i).cover
        return { chosen: s.chosen.includes(c) ? s.chosen.filter(x => x !== c) : [...s.chosen, c] }
      }],
      ['.ds-track-row', (s, { i }) => s.screen === 'compose' ? { playing: s.playing === rowTrack(i).cover ? '' : rowTrack(i).cover } : {}],
      ['.ds-button--small:not(.is-disabled)', s => go(s, 'title')],
      // 제목 → 올리기: 맨 위에 내 픽으로
      ['.ds-nav .glass-btn', s => s.screen === 'title' ? back(s) : undefined],
      ['.ds-button--primary', s => {
        if (s.screen !== 'title') return undefined
        const chosen = POOL.flatMap(d => d.tracks).filter(t => s.chosen.includes(t.cover))
        const mine = { nickname: ME, time: '방금', title: `${chosen[0].artist}${chosen.length > 1 ? ` 외 ${chosen.length - 1}명` : ''}`, covers: chosen.map(t => t.cover), trackCount: chosen.length, reactions: 0, mine: true }
        return { screen: 'list', stack: [], picks: [mine, ...s.picks] }
      }],
    ],
  }) }
