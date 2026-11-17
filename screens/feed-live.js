// 피드 프로토타입(Storybook 전용) — 피드 흐름을 한 화면에서 직접 해 본다.
// - 코치마크(coach): 더블탭 → 좋아요 → 아무 곳 탭 → 위로 끌기 → 다음 곡. 끝나면 그냥 피드
// - 피드: 위로 끌기 = 다음 곡, 아래로 끌기 = 이전 곡(휠도 같음), 더블탭·하트 = 좋아요, 모드 알약 = 따라가기/무작위, 검색 → 최근 검색어 탭 → 검색 결과(알약 ✕ = 해제),
//   ••• = 트랙 상세(바깥 탭 = 닫기), 새로운 기능(whatsNew) 시트
// - 앞 구간(lead): curation 이번 주 특집 n/5 → 다 보면 야간 동의 팝업 · pick 이번 주 추천 n/5 · release 좋아요한 아티스트의 신곡 n/3 → 다 보면 평소 피드
// - 광고성 동의(푸시알림 기획): consent = 첫 실행 팝업부터(알림 받기 → 수신동의 토스트, 나중에 → 닫기만), likeSheet = 좋아요하고 다음 곡으로 넘기면 신곡 알림 시트(한 번)
//   동의 팝업은 바깥(딤) 탭으로 닫히지 않는다. 결과 토스트는 3초 뒤 페이드 아웃
// - ads: 광고성 동의 상태 { ad, night(undefined = 미응답), permission: on|off|unset } — 넘기면 이 객체를 직접 고친다(광고성 알림 프로토타입이 마이 › 알림과 나눠 쓴다)
//   넘기면 조건을 본다: 좋아요 시트 = 기기 권한 설정 전, 야간 팝업 = 동의 + 권한 켜짐 + 야간 미응답. 「알림 받기」 + 권한 설정 전 = OS 권한 팝업 → 토스트
// 끌 때 화면이 손가락을 따라오고(다음 곡이 아래에서 같이 올라옴) 코치마크는 끈 만큼 흐려진다. 20% 넘게 끌거나 빠르게 튕기면 넘어가고, 아니면 제자리로.
// 처음부터 다시: Controls 값을 바꾸거나 스토리를 다시 연다. onTab: 탭바를 누르면 부른다(온보딩 프로토타입이 게스트 분기에 쓴다)
import { FeedCoachScreen, FeedScreen, FeedSearchScreen, TrackDetailScreen, FeedConsentScreen, FeedLikeSheetScreen, WhatsNewScreen } from './feed.js'
import { T } from './data.js'

const TRACKS = [T.billann, T.seasons, T.loveya, T.bigvoid, T.wss]
const LEAD = {
  curation: { label: '이번 주 특집', chip: '인디', tracks: [T.seasons, T.billann, T.wss, T.loveya, T.truth] },
  pick: { label: '이번 주 추천', chip: '록', tracks: [T.ohio, T.farewell, T.bigvoid, T.shanty, T.comedown] },
  release: { label: '좋아요한 아티스트의 신곡', chip: '록', tracks: [T.ohio, T.tomboy, T.loveya] },
}
const FOUND = { '잔나비': T.farewell, 'wave to earth': T.seasons, '혁오': T.ohio, '실리카겔': T.bigvoid }
const CHIP = { '잔나비': '록', 'wave to earth': '인디', '혁오': '록', '실리카겔': '록' }

export function FeedLive({ coach = true, lead = 'none', leadStart = 1, consent = false, likeSheet = false, legal = true, ads = null, whatsNew = false, os = 'ios', speed = 1, handOffset = -18, captionBelow = 25, hold = 0.3, peek = 32, onTab } = {}) {
  const el = document.createElement('div')
  el.className = 'sb-live is-feed'
  let step = coach ? 'double-tap' : 'feed', i = 0, hyped = false, since = 0, lastUp = 0, busy = false, drag = null
  const L = LEAD[lead]
  let overlay = consent ? 'consent' : whatsNew ? 'whats-new' : '', mode = 'following', query = '', terms = ['잔나비', 'wave to earth', '혁오'], week = L ? Math.min(leadStart, L.tracks.length) : 0
  let toast = '', toastLeaving = false, liked = null, sheetDone = !likeSheet, afterSystem = ''
  // 「알림 받기」 뒤: 기기 권한이 설정 전이면 OS 권한 팝업을 먼저, 아니면 바로 토스트
  const accepted = kind => { if (ads && kind === 'on' && ads.permission === 'unset') { afterSystem = kind; overlay = 'system' } else showToast(kind) }
  const showToast = kind => {
    toast = kind; toastLeaving = false; const mine = kind + performance.now()
    showToast.id = mine
    setTimeout(() => { if (showToast.id !== mine) return; toastLeaving = true; draw(); setTimeout(() => { if (showToast.id !== mine) return; toast = ''; draw() }, 300) }, 3000)
  }
  const k = 1 / speed
  const cur = () => week ? L.tracks[week - 1] : query ? FOUND[query] : TRACKS[i % TRACKS.length]
  const nextTrack = () => week ? L.tracks[week % L.tracks.length] : TRACKS[(i + 1) % TRACKS.length]
  const hasPrev = () => step === 'feed' && (week ? week > 1 : i > 0)   // 첫 곡·코치마크 중엔 위에 곡이 없다
  const prevTrack = () => week ? L.tracks[week - 2] : TRACKS[(i - 1) % TRACKS.length]
  const chip = () => week ? L.chip : query ? CHIP[query] : mode === 'following' ? '비슷한 곡: Blame' : ''
  const draw = (burst = false) => {
    const track = cur()
    el.innerHTML = overlay === 'search' ? FeedSearchScreen({ track, text: '실리카겔', terms })
      : overlay === 'detail' ? TrackDetailScreen({ track, detail: { genre: chip() || '인디', released: '2024.05.10' } })
      : /^(consent|night)/.test(overlay) ? FeedConsentScreen({ track, os, kind: overlay.startsWith('night') ? 'night' : 'first', artist: '혁오', leaving: overlay.endsWith('-leaving') })
      : overlay === 'sheet' ? FeedLikeSheetScreen({ track, artist: liked.artist, cover: liked.cover, legal })
      : overlay === 'system' ? FeedScreen({ track, chip: chip(), mode, context: week ? `${L.label} ${week}/${L.tracks.length}` : '', system: true })
      : overlay === 'whats-new' ? WhatsNewScreen({ track })
      : step === 'feed'
      ? FeedScreen({ track, chip: chip(), hyped, burst, speed, hold, mode, query, context: week ? `${L.label} ${week}/${L.tracks.length}` : '', toast, toastLeaving })
      : FeedCoachScreen({ track, gesture: step, hyped, handOffset, captionBelow, speed, hold, peek, once: true })
    since = performance.now()
  }
  // 버튼 탭. 처리했으면 true
  const tap = t => {
    const hit = sel => t.closest(sel)
    if (hit('.tab')) { const id = ['feed', 'picks', 'my'][[...el.querySelectorAll('.tab')].indexOf(hit('.tab'))]; if (id !== 'feed') onTab?.(id); return true }
    if (overlay === 'search') {
      if (hit('.ds-recent__x')) { terms = terms.filter((_, j) => j !== [...el.querySelectorAll('.ds-recent__x')].indexOf(hit('.ds-recent__x'))); draw(); return true }
      if (hit('.ds-recent__row')) { query = hit('.ds-recent__row').querySelector('span').textContent; overlay = ''; week = 0; hyped = false; draw(); return true }
      if (hit('.ds-recent__run')) { query = '실리카겔'; overlay = ''; week = 0; hyped = false; draw(); return true }
      if (hit('.ic-xmark-circle')) { overlay = ''; draw(); return true }
      return true
    }
    if (overlay === 'detail') { if (!hit('.sheet')) { overlay = ''; draw() } return true }
    if (/-leaving$/.test(overlay)) return true
    if (overlay === 'system') {   // OS 권한 팝업 — 고르면 결과 토스트
      const allow = hit('.ds-system-alert__allow'), deny = hit('.ds-system-alert__deny')
      if (allow || deny) { ads.permission = allow ? 'on' : 'off'; overlay = ''; showToast(afterSystem); draw() }
      return true
    }
    // 광고성 동의 팝업: 버튼만 받는다(딤 탭 무시). 첫 실행 「나중에」 = 닫기만(7일 뒤 다시), 야간 「아니요」 = 야간 수신거부 토스트
    if (/^(consent|night)$/.test(overlay)) {
      const yes = hit('.ds-button'), no = hit('.ds-popup__decline')
      if (!yes && !no) return true
      const night = overlay === 'night'
      overlay += '-leaving'; draw()
      if (ads) { if (night) ads.night = !!yes; else if (yes) ads.ad = true }
      setTimeout(() => { overlay = ''; if (night) { week = 0; i++ }; if (yes || night) accepted((night ? 'night-' : '') + (yes ? 'on' : 'off')); draw() }, os === 'android' ? 150 : 200)
      return true
    }
    if (overlay === 'sheet') {
      if (hit('.ds-consent-sheet__accept')) { overlay = ''; if (ads) ads.ad = true; accepted('on'); draw() }
      else if (hit('.ds-consent-sheet__later') || !hit('.sheet')) { overlay = ''; draw() }
      return true
    }
    if (overlay === 'whats-new') { if (hit('.ds-button') || hit('.ic-xmark')) { overlay = ''; week = 0; i++; draw() } return true }
    if (step !== 'feed') return false
    if (hit('.ds-feed-header__search')) { overlay = 'search'; draw(); return true }
    if (hit('.ds-pill--query')) { query = ''; hyped = false; draw(); return true }
    if (hit('.ds-pill--mode') || hit('.ds-feed-header__btn')) { mode = mode === 'following' ? 'random' : 'following'; draw(); return true }
    if (hit('.ds-feed-track__act:last-child')) { overlay = 'detail'; draw(); return true }
    if (hit('.ds-feed-track__hype')) { hyped = !hyped; draw(hyped); return true }
    if (hit('.ds-toast')) return true
    return false
  }

  const LAYER = '.device > div:has(> .ds-feed-track)'
  const leave = (next) => { busy = true; el.querySelector('.ds-coach-gesture')?.classList.add('is-leaving'); setTimeout(() => { busy = false; next() }, 200 * k) }

  // 끌기: 지금 곡 레이어와 위·아래 곡 레이어를 손가락 위치에 맞춰 같이 옮긴다. 위로 = 다음 곡, 아래로 = 이전 곡
  const canDrag = () => !overlay && !query && (step === 'swipe-up' || step === 'feed')
  const startDrag = y => {
    const cur = el.querySelector(LAYER), tmp = document.createElement('div')
    const layer = track => { tmp.innerHTML = FeedScreen({ track, chip: '' }); return tmp.querySelector(LAYER) }
    const next = layer(nextTrack()), prev = hasPrev() ? layer(prevTrack()) : null
    cur.after(next)
    if (prev) cur.after(prev)
    const coach = cur.querySelector('.ds-coach-gesture')
    if (coach) coach.style.transition = 'none'
    // 화면 살짝 올라가는 힌트(dsg-peek) 중간에 잡으면 그 위치에서 이어 끈다 — 툭 튀지 않게
    const card = cur.querySelector('.ds-feed-track'), base = new DOMMatrix(getComputedStyle(card).transform).m42
    card.style.animation = 'none'
    const hand = cur.querySelector('.ds-coach-gesture__hand')
    if (hand) hand.style.animationPlayState = 'paused'   // 손도 그 자리에 멈춘다
    return { y0: y - base, t0: performance.now(), dy: base, moved: false, cur, next, prev, coach, card, hand, H: cur.offsetHeight }
  }
  const place = (d, dy, ms = 0) => {
    const t = ms ? `transform ${ms}ms cubic-bezier(.2,.8,.2,1), opacity ${ms}ms` : 'none'
    d.cur.style.transition = d.next.style.transition = t
    d.cur.style.transform = `translateY(${dy}px)`
    d.next.style.transform = `translateY(calc(100% + ${dy}px))`
    if (d.prev) { d.prev.style.transition = t; d.prev.style.transform = `translateY(calc(-100% + ${dy}px))` }
    if (d.coach) { d.coach.style.transition = t; d.coach.style.opacity = Math.max(0, 1 + dy / (d.H * 0.25)) }   // 화면 1/4 끌면 다 사라짐
  }
  // 놓고 제자리로 돌아오면 손과 화면 힌트를 같은 순간에 처음부터 다시 — 박자가 안 어긋나게
  const restart = d => {
    const els = [d.card, d.hand].filter(Boolean)
    els.forEach(e => { e.style.animation = 'none' })
    void d.card.offsetWidth
    els.forEach(e => { e.style.animation = e.style.animationPlayState = '' })
  }
  const back = d => { d.next.remove(); d.prev?.remove(); d.cur.style.transform = d.cur.style.transition = ''; if (d.coach) d.coach.style.transition = ''; restart(d) }
  // dir: 1 = 다음 곡, -1 = 이전 곡, 0 = 제자리
  const settle = (d, dir) => {
    const ms = 320 * k
    busy = true
    place(d, -dir * d.H, ms)
    setTimeout(() => {
      busy = false
      if (dir > 0) {
        // 좋아요한 곡을 넘긴 직후 = 신곡 알림 시트(한 번). 앞 구간 끝: 특집이면 야간 동의, 나머지는 평소 피드
        const was = cur(), hypedWas = hyped && step === 'feed'   // 코치마크 좋아요는 세지 않는다
        step = 'feed'; hyped = false
        const askNight = !ads || (ads.ad && ads.permission === 'on' && ads.night === undefined)
        if (week) { if (week === L.tracks.length) { if (lead === 'curation' && askNight) overlay = 'night'; else { week = 0; i++ } } else week++ } else i++
        if (!overlay && hypedWas && !sheetDone && (!ads || ads.permission === 'unset')) { sheetDone = true; liked = was; overlay = 'sheet' }
        draw()
      } else if (dir < 0) { hyped = false; if (week) week--; else i--; draw() }
      else back(d)
    }, ms)
  }
  // 놓았을 때 방향: 20% 넘게 끌었거나 빠르게 튕겼으면 넘어간다
  const release = (d, now) => {
    const v = d.dy / (now - d.t0)
    return d.dy < -d.H * 0.2 || v < -0.6 ? 1 : d.prev && (d.dy > d.H * 0.2 || v > 0.6) ? -1 : 0
  }

  el.addEventListener('pointerdown', e => {
    if (busy || !canDrag() || e.target.closest('.tab, .ds-feed-header, .ds-feed-track__act, .ds-feed-track__hype')) return
    drag = startDrag(e.clientY)
    try { el.setPointerCapture(e.pointerId) } catch {}   // 화면 밖으로 끌어도 계속 받기
    place(drag, drag.dy)
  })
  el.addEventListener('pointermove', e => {
    if (!drag) return
    let dy = e.clientY - drag.y0
    if (Math.abs(dy) > 8) drag.moved = true
    if (dy > 0 && !drag.prev) dy *= 0.25   // 위에 곡이 없으면(첫 곡) 아래로는 고무줄처럼 조금만
    drag.dy = dy
    place(drag, dy)
  })
  el.addEventListener('pointercancel', () => { if (drag) { settle(drag, 0); drag = null } })
  el.addEventListener('pointerup', e => {
    if (busy) return
    const now = performance.now()
    if (!drag && tap(e.target)) return
    if (drag) {
      const d = drag; drag = null
      if (d.moved) return settle(d, release(d, now))
      // 끌지 않고 뗐으면(힌트 중간에 눌렀다 뗌) 짧게 제자리로. busy를 안 걸어야 피드 더블탭이 막히지 않는다
      place(d, 0, 160 * k); setTimeout(() => back(d), 160 * k)
    }
    const dbl = now - lastUp < 350
    lastUp = dbl ? 0 : now
    if (step === 'double-tap' && dbl) { hyped = true; step = 'hyped'; return draw() }
    if (step === 'hyped' && !dbl && now - since > 400) return leave(() => { step = 'swipe-up'; draw() })
    if (step === 'feed' && dbl) { hyped = !hyped; draw(hyped) }
  })
  // 트랙패드·마우스 휠: 끝까지 끈 것처럼 넘긴다. 아래로 굴리면 다음 곡, 위로 굴리면 이전 곡
  el.addEventListener('wheel', e => {
    const dir = e.deltaY > 30 ? 1 : e.deltaY < -30 && hasPrev() ? -1 : 0
    if (!dir || busy || drag || !canDrag()) return
    const d = startDrag(0); place(d, 0); requestAnimationFrame(() => settle(d, dir))
  }, { passive: true })
  draw()
  return el
}

