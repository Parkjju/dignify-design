import{d as o,o as t}from"./_story-BijmNlD_.js";function i({width:e=200,height:n=200,radius:s=24}={}){return`<div class="ds-shimmer" style="width:${e}px;height:${n}px;border-radius:${s}px"></div>`}const a=`# Shimmer

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
아트워크가 도착하기 전의 자리 표시. 레이아웃이 튀지 않게 최종 크기와 라운드를 그대로 잡는다.

## 수치
| 항목 | 값 |
|---|---|
| 바탕 | white 14% |
| 하이라이트 | white 30% 선형 그라데이션, 폭 60% |
| 주기 | 1.2s linear, 반복 |

어두운 지면(피드·Picks) 기준이다. 밝은 지면에 쓰려면 바탕을 \`color.surface\`로 바꾼 variant를 먼저 명세한다.

## 플랫폼
| | 이름 |
|---|---|
| iOS | \`DSShimmerView\` |
| Android | \`DSShimmer\` |
`,m={title:"Components/Content/Shimmer",tags:["autodocs"],parameters:o(a),decorators:t("#000"),render:i,args:{width:200,height:200,radius:24}},r={},c=["Artwork"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};export{r as Artwork,c as __namedExportsOrder,m as default};
