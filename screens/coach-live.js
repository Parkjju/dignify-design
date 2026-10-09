// 직접 해 보는 코치마크 — 시안이 아니라 동작 확인용 프로토타입(Storybook 전용).
// 더블탭 → 하입(버스트) → 아무 곳 탭 → 캡션 사라짐 → 위로 쓸기 → 다음 곡. 끝난 뒤엔 피드처럼 계속 넘기고 더블탭으로 하입.
// 처음부터 다시: Controls 값을 바꾸거나 스토리를 다시 연다.
import { FeedCoachScreen, FeedScreen } from './feed.js'
import { T } from './data.js'

const TRACKS = [T.billann, T.seasons, T.loveya, T.bigvoid, T.wss]

export function CoachLive({ speed = 1, handOffset = -18, captionBelow = 25, hold = 1 } = {}) {
  const el = document.createElement('div')
  el.className = 'sb-live'
  let step = 'double-tap', i = 0, hyped = false, since = 0, lastUp = 0, downY = 0, busy = false
  const k = 1 / speed
  const draw = (burst = false) => {
    const track = TRACKS[i % TRACKS.length]
    el.innerHTML = step === 'feed'
      ? FeedScreen({ track, chip: '', hyped, burst, speed })
      : FeedCoachScreen({ track, gesture: step, hyped, handOffset, captionBelow, speed, hold, once: true })
    since = performance.now()
  }
  const leave = (next) => { busy = true; el.querySelector('.ds-coach-gesture')?.classList.add('is-leaving'); setTimeout(() => { busy = false; next() }, 200 * k) }
  const slide = () => {
    const old = el.querySelector('.device > div:has(> .ds-feed-track)')?.cloneNode(true)
    i++; hyped = false; draw()
    if (!old) return
    const layer = el.querySelector('.device > div:has(> .ds-feed-track)')
    old.classList.add('sb-live-out'); layer.classList.add('sb-live-in'); layer.before(old)
    setTimeout(() => old.remove(), 400)
  }
  el.addEventListener('pointerdown', e => { downY = e.clientY })
  el.addEventListener('pointerup', e => {
    if (busy) return
    const now = performance.now()
    if (downY - e.clientY > 50) {   // 위로 쓸기
      if (step === 'swipe-up') return leave(() => { step = 'feed'; slide() })
      if (step === 'feed') return slide()
      return
    }
    const dbl = now - lastUp < 350
    lastUp = dbl ? 0 : now
    if (step === 'double-tap' && dbl) { hyped = true; step = 'hyped'; return draw() }
    if (step === 'hyped' && !dbl && now - since > 400) return leave(() => { step = 'swipe-up'; draw() })
    if (step === 'feed' && dbl) { hyped = !hyped; draw(hyped) }
  })
  el.addEventListener('wheel', e => { if (e.deltaY > 30 && !busy) { if (step === 'swipe-up') leave(() => { step = 'feed'; slide() }); else if (step === 'feed') slide() } }, { passive: true })
  draw()
  return el
}

