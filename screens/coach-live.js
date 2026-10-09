// 직접 해 보는 코치마크 — 시안이 아니라 동작 확인용 프로토타입(Storybook 전용).
// 더블탭 → 하입(버스트) → 아무 곳 탭 → 캡션 사라짐 → 위로 끌기 → 다음 곡.
// 끌 때 화면이 손가락을 따라오고(다음 곡이 아래에서 같이 올라옴) 코치마크는 끈 만큼 흐려진다. 20% 넘게 끌거나 빠르게 튕기면 넘어가고, 아니면 제자리로. 끝난 뒤엔 피드처럼 계속 넘기고 더블탭으로 하입.
// 처음부터 다시: Controls 값을 바꾸거나 스토리를 다시 연다.
import { FeedCoachScreen, FeedScreen } from './feed.js'
import { T } from './data.js'

const TRACKS = [T.billann, T.seasons, T.loveya, T.bigvoid, T.wss]

export function CoachLive({ speed = 1, handOffset = -18, captionBelow = 25, hold = 1 } = {}) {
  const el = document.createElement('div')
  el.className = 'sb-live'
  let step = 'double-tap', i = 0, hyped = false, since = 0, lastUp = 0, busy = false, drag = null
  const k = 1 / speed
  const draw = (burst = false) => {
    const track = TRACKS[i % TRACKS.length]
    el.innerHTML = step === 'feed'
      ? FeedScreen({ track, chip: '', hyped, burst, speed })
      : FeedCoachScreen({ track, gesture: step, hyped, handOffset, captionBelow, speed, hold, once: true })
    since = performance.now()
  }

  const LAYER = '.device > div:has(> .ds-feed-track)'
  const leave = (next) => { busy = true; el.querySelector('.ds-coach-gesture')?.classList.add('is-leaving'); setTimeout(() => { busy = false; next() }, 200 * k) }

  // 끌기: 지금 곡 레이어와 다음 곡 레이어를 손가락 위치에 맞춰 같이 옮긴다
  const canDrag = () => step === 'swipe-up' || step === 'feed'
  const startDrag = y => {
    const cur = el.querySelector(LAYER), tmp = document.createElement('div')
    tmp.innerHTML = FeedScreen({ track: TRACKS[(i + 1) % TRACKS.length], chip: '' })
    const next = tmp.querySelector(LAYER)
    cur.after(next)
    const coach = cur.querySelector('.ds-coach-gesture')
    if (coach) coach.style.transition = 'none'
    return { y0: y, t0: performance.now(), dy: 0, moved: false, cur, next, coach, H: cur.offsetHeight }
  }
  const place = (d, dy, ms = 0) => {
    const t = ms ? `transform ${ms}ms cubic-bezier(.2,.8,.2,1), opacity ${ms}ms` : 'none'
    d.cur.style.transition = d.next.style.transition = t
    d.cur.style.transform = `translateY(${dy}px)`
    d.next.style.transform = `translateY(calc(100% + ${dy}px))`
    if (d.coach) { d.coach.style.transition = t; d.coach.style.opacity = Math.max(0, 1 + dy / (d.H * 0.25)) }   // 화면 1/4 끌면 다 사라짐
  }
  const settle = (d, go) => {
    const ms = 320 * k
    busy = true
    place(d, go ? -d.H : 0, ms)
    setTimeout(() => {
      busy = false
      if (go) { step = 'feed'; i++; hyped = false; draw() }
      else { d.next.remove(); d.cur.style.transform = d.cur.style.transition = ''; if (d.coach) d.coach.style.transition = '' }
    }, ms)
  }

  el.addEventListener('pointerdown', e => {
    if (busy || !canDrag()) return
    drag = startDrag(e.clientY)
    try { el.setPointerCapture(e.pointerId) } catch {}   // 화면 밖으로 끌어도 계속 받기
    place(drag, 0)
  })
  el.addEventListener('pointermove', e => {
    if (!drag) return
    let dy = e.clientY - drag.y0
    if (Math.abs(dy) > 8) drag.moved = true
    if (dy > 0) dy *= 0.25   // 아래로는 고무줄처럼 조금만
    drag.dy = dy
    place(drag, dy)
  })
  el.addEventListener('pointercancel', () => { if (drag) { settle(drag, false); drag = null } })
  el.addEventListener('pointerup', e => {
    if (busy) return
    const now = performance.now()
    if (drag) {
      const d = drag; drag = null
      if (d.moved) return settle(d, d.dy < -d.H * 0.2 || d.dy / (now - d.t0) < -0.6)
      d.next.remove(); d.cur.style.transform = ''; if (d.coach) { d.coach.style.transition = ''; d.coach.style.opacity = '' }
    }
    const dbl = now - lastUp < 350
    lastUp = dbl ? 0 : now
    if (step === 'double-tap' && dbl) { hyped = true; step = 'hyped'; return draw() }
    if (step === 'hyped' && !dbl && now - since > 400) return leave(() => { step = 'swipe-up'; draw() })
    if (step === 'feed' && dbl) { hyped = !hyped; draw(hyped) }
  })
  // 트랙패드·마우스 휠: 끝까지 끈 것처럼 넘긴다
  el.addEventListener('wheel', e => {
    if (e.deltaY < 30 || busy || drag || !canDrag()) return
    const d = startDrag(0); place(d, 0); requestAnimationFrame(() => settle(d, true))
  }, { passive: true })
  draw()
  return el
}

