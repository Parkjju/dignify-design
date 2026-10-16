// 프로토타입을 눌러 가며 확인한다(CLAUDE.md 5번). npm run build 뒤에:
//   ARGS='coach:!true' node scripts/proto-check.mjs <스토리 id> /tmp/out '<steps JSON>'  → /tmp/out-<이름>.png
// step: ["click", 선택자, i?] | ["tap", 선택자, i?](pointerdown·up — 피드 프로토타입용) | ["dbl", 선택자] | ["swipe", "down"?](위로 끌기, down이면 아래로) | ["wheel", 선택자, deltaY] | ["drag", 선택자, 가로 px](마우스 끌기) | ["js", 식] | ["slow", 배속] | ["wait", ms] | ["shot", 이름] | ["shotnow", 이름] · ["clicknow", 선택자](기다리지 않고 바로)
// storybook-static을 이 스크립트가 직접 띄운다(6008). python http.server는 모듈 요청이 몰리면 연결을 끊어(ERR_CONNECTION_RESET)
// 「모듈을 가져오지 못함」이 가끔 났다. 프로필도 매번 지운다
import { spawn } from 'node:child_process'
import { rmSync, readFile } from 'node:fs'
import { createServer } from 'node:http'
import { join, extname } from 'node:path'
const ROOT = join(import.meta.dirname, '..', 'storybook-static')
const TYPE = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' }
const server = createServer((req, res) => readFile(join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname)), (err, buf) => {
  if (err) { res.writeHead(404); return res.end() }
  res.writeHead(200, { 'content-type': TYPE[extname(req.url.split('?')[0])] ?? 'application/octet-stream', 'cache-control': 'no-store' }); res.end(buf)
})).listen(6008)
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
ws.addEventListener('message', m => { const d = JSON.parse(m.data); pend.get(d.id)?.(d); pend.delete(d.id)
  // 받지 못한 요청은 찍는다 — 「모듈을 가져오지 못함」의 진짜 원인
  if (d.method === 'Network.loadingFailed' && !d.params.canceled) console.log('요청 실패:', reqs.get(d.params.requestId), d.params.errorText)
  if (d.method === 'Network.requestWillBeSent') reqs.set(d.params.requestId, d.params.request.url) })
const reqs = new Map()
const cmd = (method, params = {}) => new Promise(r => { const i = ++seq; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })) })
const js = async expr => { const r = await cmd('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); return r.result?.result?.value ?? r.result?.exceptionDetails?.exception?.description }
await cmd('Page.enable'); await cmd('Network.enable'); await cmd('Animation.enable')
await cmd('Page.navigate', { url: `http://localhost:6008/iframe.html?id=${encodeURIComponent(id)}&viewMode=story${process.env.ARGS ? "&args=" + process.env.ARGS : ""}` })
await sleep(4000)   // 빈 프로필이라 첫 로드가 느리다
const fire = (sel, i, type) => js(`(() => { const e = document.querySelectorAll(${JSON.stringify(sel)})[${i}]; if (!e) return 'NOT FOUND ${sel.replace(/'/g, '')}[${i}]';
  const r = e.getBoundingClientRect(), o = { bubbles: true, clientX: r.x + r.width / 2, clientY: r.y + r.height / 2 };
  ${type === 'click' ? 'e.click()' : "e.dispatchEvent(new PointerEvent('pointerdown', o)); e.dispatchEvent(new PointerEvent('pointerup', o))"}; return 'ok' })()`)
for (const [op, a, b = 0] of steps) {
  let r = 'ok'
  if (op === 'clicknow') { r = await fire(a, b, 'click'); if (r !== 'ok') console.log(op, a, r); continue }   // 기다리지 않음 — 닫힘 모션 캡처용
  if (op === 'click' || op === 'tap') r = await fire(a, b, op)
  if (op === 'dbl') { r = await fire(a, 0, 'tap'); await sleep(80); r = await fire(a, 0, 'tap') }
  if (op === 'swipe') r = await js(`(() => { const e = document.querySelector('.sb-live'); const p = (t, y) => e.dispatchEvent(new PointerEvent(t, { bubbles: true, clientX: 200, clientY: y, pointerId: 1 }));
    const ys = ${a === 'down' ? '[150, 300, 550, 600]' : '[600, 450, 200, 150]'};
    p('pointerdown', ys[0]); p('pointermove', ys[1]); p('pointermove', ys[2]); p('pointerup', ys[3]); return 'ok' })()`)
  if (op === 'hscroll') r = await js(`(() => { const e = document.querySelector(${JSON.stringify(a)}); if (!e) return 'NOT FOUND'; e.scrollLeft = ${b}; return 'ok' })()`)
  if (op === 'wheel') r = await js(`(() => { const e = document.querySelector(${JSON.stringify(a)}); e.dispatchEvent(new WheelEvent('wheel', { bubbles: true, cancelable: true, deltaY: ${b} })); return 'ok' })()`)
  if (op === 'drag') r = await js(`(() => { const e = document.querySelector(${JSON.stringify(a)}), r = e.getBoundingClientRect(), y = r.y + r.height / 2, x0 = r.x + r.width - 40;
    const p = (t, x) => e.dispatchEvent(new PointerEvent(t, { bubbles: true, clientX: x, clientY: y, pointerId: 2 })); p('pointerdown', x0); p('pointermove', x0 - 60); p('pointermove', x0 - ${b}); p('pointerup', x0 - ${b});
    e.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: x0 - ${b}, clientY: y })); return 'ok' })()`)
  if (op === 'js') { console.log('js:', await js(a)); continue }   // 값 확인용(크기·투명도 등)
  if (op === 'slow') await cmd('Animation.setPlaybackRate', { playbackRate: a })   // 모션 중간 프레임 캡처용: 0.1 = 10배 느리게
  if (op === 'shotnow') { const s = await cmd('Page.captureScreenshot', { format: 'png' }); (await import('node:fs')).writeFileSync(`${out}-${a}.png`, Buffer.from(s.result.data, 'base64')); continue }
  if (op === 'wait') await sleep(a)
  if (op === 'shot') { const s = await cmd('Page.captureScreenshot', { format: 'png' }); (await import('node:fs')).writeFileSync(`${out}-${a}.png`, Buffer.from(s.result.data, 'base64')) }
  if (r !== 'ok') console.log(op, a, b, '→', r)
  await sleep(op === 'wait' ? 0 : 350)
}
console.log('done', id)
ws.close(); chrome.kill(); server.close(); process.exit(0)
