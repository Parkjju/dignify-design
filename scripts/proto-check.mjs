// 프로토타입을 눌러 가며 확인한다(CLAUDE.md 5번). storybook-static을 6007에 띄운 뒤:
//   ARGS='coach:!true' node scripts/proto-check.mjs <스토리 id> /tmp/out '<steps JSON>'  → /tmp/out-<이름>.png
// step: ["click", 선택자, i?] | ["tap", 선택자, i?](pointerdown·up — 피드 프로토타입용) | ["dbl", 선택자] | ["swipe"](위로 끌기) | ["wait", ms] | ["shot", 이름]
// 빌드를 새로 하면 6007 서버도 다시 띄울 것(지워진 폴더를 계속 본다). 프로필은 매번 지운다 — 예전 빌드 캐시가 남으면 모듈을 못 받는다
import { spawn } from 'node:child_process'
import { rmSync } from 'node:fs'
rmSync('/tmp/proto-check-profile', { recursive: true, force: true })
const [id, out, stepsJson] = process.argv.slice(2)
const steps = JSON.parse(stepsJson)
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ['--headless=new', '--remote-debugging-port=9333', '--window-size=460,900', '--hide-scrollbars', '--user-data-dir=/tmp/proto-check-profile', 'about:blank'], { stdio: 'ignore' })
const sleep = ms => new Promise(r => setTimeout(r, ms))
let ws
for (let n = 0; n < 50 && !ws; n++) {
  await sleep(200)
  try { const t = (await (await fetch('http://127.0.0.1:9333/json')).json()).find(x => x.type === 'page'); if (t) ws = new WebSocket(t.webSocketDebuggerUrl) } catch {}
}
await new Promise(r => ws.addEventListener('open', r))
let seq = 0; const pend = new Map()
ws.addEventListener('message', m => { const d = JSON.parse(m.data); pend.get(d.id)?.(d); pend.delete(d.id) })
const cmd = (method, params = {}) => new Promise(r => { const i = ++seq; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })) })
const js = async expr => { const r = await cmd('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); return r.result?.result?.value ?? r.result?.exceptionDetails?.exception?.description }
await cmd('Page.enable')
await cmd('Page.navigate', { url: `http://localhost:6007/iframe.html?id=${encodeURIComponent(id)}&viewMode=story${process.env.ARGS ? "&args=" + process.env.ARGS : ""}` })
await sleep(4000)   // 빈 프로필이라 첫 로드가 느리다
const fire = (sel, i, type) => js(`(() => { const e = document.querySelectorAll(${JSON.stringify(sel)})[${i}]; if (!e) return 'NOT FOUND ${sel.replace(/'/g, '')}[${i}]';
  const r = e.getBoundingClientRect(), o = { bubbles: true, clientX: r.x + r.width / 2, clientY: r.y + r.height / 2 };
  ${type === 'click' ? 'e.click()' : "e.dispatchEvent(new PointerEvent('pointerdown', o)); e.dispatchEvent(new PointerEvent('pointerup', o))"}; return 'ok' })()`)
for (const [op, a, b = 0] of steps) {
  let r = 'ok'
  if (op === 'click' || op === 'tap') r = await fire(a, b, op)
  if (op === 'dbl') { r = await fire(a, 0, 'tap'); await sleep(80); r = await fire(a, 0, 'tap') }
  if (op === 'swipe') r = await js(`(() => { const e = document.querySelector('.sb-live'); const p = (t, y) => e.dispatchEvent(new PointerEvent(t, { bubbles: true, clientX: 200, clientY: y, pointerId: 1 }));
    p('pointerdown', 600); p('pointermove', 450); p('pointermove', 200); p('pointerup', 150); return 'ok' })()`)
  if (op === 'wait') await sleep(a)
  if (op === 'shot') { const s = await cmd('Page.captureScreenshot', { format: 'png' }); (await import('node:fs')).writeFileSync(`${out}-${a}.png`, Buffer.from(s.result.data, 'base64')) }
  if (r !== 'ok') console.log(op, a, b, '→', r)
  await sleep(op === 'wait' ? 0 : 350)
}
console.log('done', id)
ws.close(); chrome.kill()
