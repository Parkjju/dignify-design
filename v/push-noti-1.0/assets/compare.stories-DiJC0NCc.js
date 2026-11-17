import{s as C}from"./iframe-C22vbsNX.js";import"./preload-helper-PPVm8Dsz.js";const A={title:"가이드/버전 비교",parameters:{layout:"fullscreen"}},j=`
.vc { min-height: 100vh; background: #F3F4F6; font: 13px/1.4 -apple-system, "Apple SD Gothic Neo", sans-serif; color: #111827; }
.vc-bar { position: sticky; top: 0; z-index: 2; display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; padding: 10px 16px; background: #fff; border-bottom: 1px solid #E5E7EB; }
.vc-bar label { display: flex; gap: 6px; align-items: center; color: #6B7280; }
.vc-bar select, .vc-bar input[type=text] { font: inherit; padding: 4px 6px; border: 1px solid #D1D5DB; border-radius: 6px; background: #fff; color: #111827; max-width: 280px; }
.vc-row { display: flex; gap: 24px; justify-content: center; padding: 16px; overflow-x: auto; }
.vc-col { display: flex; flex-direction: column; gap: 8px; align-items: center; }
.vc-col h3 { font-size: 13px; font-weight: 600; }
.vc-col h3 small { font-weight: 400; color: #6B7280; margin-left: 6px; }
.vc-miss { color: #EF4444; font-size: 12px; }
.vc-frame { border: 0; background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.08); }`,n=(a,r)=>{try{return localStorage.getItem("vc:"+a)??r}catch{return r}},z=(a,r)=>{try{localStorage.setItem("vc:"+a,r)}catch{}},x=a=>a==="current"?"":`v/${a}/`,B={},y=a=>B[a]||=fetch(x(a)+"index.json").then(r=>r.ok?r.json():{entries:{}}).then(r=>r.entries||{}).catch(()=>({})),c={name:"버전 비교",render:()=>{const a=document.createElement("div");return a.className="vc",a.innerHTML=`<style>${j}</style><div class="vc-bar">불러오는 중…</div><div class="vc-row"></div>`,D(a),a}};async function D(a){const r=await fetch("v/versions.json").then(e=>e.ok?e.json():[]).catch(()=>[]),l=[{name:"current",label:"현재 (main)"},...r.map(e=>({name:e.name,label:`${e.name}${e.date?" · "+e.date:""}`}))],m=e=>l.some(t=>t.name===e),d=await y("current"),u=Object.values(d).filter(e=>e.type==="story"&&/^(Screens|Flows|Components)\//.test(e.title)),o={story:n("story","screens-3-마이--my"),args:n("args",""),left:n("left",r[1]?.name||r[0]?.name||"current"),right:n("right","current"),measure:n("measure","off")==="on",guide:n("guide","off")==="on",zoom:+n("zoom","0.8")};m(o.left)||(o.left=r[0]?.name||"current"),m(o.right)||(o.right="current"),d[o.story]||(o.story=u[0]?.id);const f={};u.forEach(e=>{const t=e.title.split("/")[0];(f[t]||=[]).push(e)});const $=Object.entries(f).map(([e,t])=>`<optgroup label="${e}">${t.map(s=>`<option value="${s.id}">${s.title.split("/").slice(1).join(" / ")} — ${s.name}</option>`).join("")}</optgroup>`).join(""),g=e=>`<select data-k="${e}">${l.map(t=>`<option value="${t.name}">${t.label}</option>`).join("")}</select>`,b=a.querySelector(".vc-bar");b.innerHTML=`<label>화면 <select data-k="story">${$}</select></label>
    <label>왼쪽 ${g("left")}</label><label>오른쪽 ${g("right")}</label>
    <label title="스토리 Controls 값 — 예: start:alerts;permission:unset">args <input type="text" data-k="args" placeholder="start:alerts" size="18"></label>
    <label><input type="checkbox" data-k="measure"> 재기</label><label><input type="checkbox" data-k="guide"> 가이드</label>
    <label>배율 <input type="range" data-k="zoom" min="0.5" max="1" step="0.05"></label>
    ${r.length?"":'<span class="vc-miss">배포된 버전 스냅샷이 없다 — 로컬이거나 아직 태그(snap/…)가 없다</span>'}`;for(const e of b.querySelectorAll("[data-k]")){const t=e.dataset.k;e.type==="checkbox"?e.checked=o[t]:e.value=o[t],e.addEventListener(e.type==="text"?"change":"input",()=>{if(o[t]=e.type==="checkbox"?e.checked:e.type==="range"?+e.value:e.value,z(t,e.type==="checkbox"?e.checked?"on":"off":String(o[t])),t==="measure"||t==="guide")return i().forEach(p);if(t==="zoom")return i().forEach(s=>{s.style.zoom=o.zoom});v()})}const h=a.querySelector(".vc-row"),i=()=>[...h.querySelectorAll("iframe")],p=e=>{try{e.contentDocument?.body&&C(e.contentDocument,{on:o.measure,guide:o.guide,lock:!0})}catch{}},v=async()=>{const e=await Promise.all(["left","right"].map(async t=>{const s=o[t],k=(await y(s))[o.story],w=l.find(E=>E.name===s)?.label||s,S=`${x(s)}iframe.html?id=${encodeURIComponent(o.story)}&viewMode=story${o.args?"&args="+encodeURIComponent(o.args).replace(/%3A/g,":").replace(/%3B/g,";"):""}`;return`<div class="vc-col"><h3>${t==="left"?"왼쪽":"오른쪽"}<small>${w}</small></h3>
        ${k?`<iframe class="vc-frame" src="${S}" width="460" height="920" style="zoom:${o.zoom}"></iframe>`:'<p class="vc-miss">이 버전에는 없는 화면이다(새로 생겼거나 이름이 바뀜)</p>'}</div>`}));h.innerHTML=e.join(""),i().forEach(t=>t.addEventListener("load",()=>{p(t),setTimeout(()=>p(t),800)}))};v()}const F=["Compare"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '버전 비교',
  render: () => {
    const el = document.createElement('div');
    el.className = 'vc';
    el.innerHTML = \`<style>\${CSS}</style><div class="vc-bar">불러오는 중…</div><div class="vc-row"></div>\`;
    start(el);
    return el;
  }
}`,...c.parameters?.docs?.source}}};export{c as Compare,F as __namedExportsOrder,A as default};
