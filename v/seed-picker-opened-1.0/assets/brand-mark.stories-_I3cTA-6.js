import{d as n}from"./_story-BijmNlD_.js";function o({size:r=64}={}){return`<span class="ds-brand-mark" style="width:${r}px;height:${r}px;border-radius:${r*.25}px;padding:${r*.18}px"><i class="brand-mark"></i></span>`}const t=`# BrandMark

> 상태: 구현됨(iOS·Android)

## 언제 쓰나
온보딩, What's New, 빈 상태 화면의 로고. 앱 아이콘을 대신하지는 않는다.

## 수치
| 항목 | 값 |
|---|---|
| 기본 크기 | 64 |
| 지면 | \`color.brandLight\`, 라운드 = size × 0.25 |
| 로고 여백 | size × 0.18 |

## 플랫폼
| | 이름 | 애셋 |
|---|---|---|
| iOS | \`DSBrandMark(size:)\` | \`Assets.xcassets/BrandMark\` |
| Android | \`DSBrandMark(size)\` | \`R.drawable.brand_mark\` (iOS와 같은 파일) |

## 하지 말 것
- 로고 파일을 한쪽 앱에서만 바꾸지 않는다.
`,c={title:"Components/Content/BrandMark",tags:["autodocs"],parameters:n(t),render:o,argTypes:{size:{control:{type:"range",min:22,max:128,step:2}}},args:{size:64}},a={},s={args:{size:44}},e={args:{size:22}},p=["Default","Popup","Footer"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 44
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 22
  }
}`,...e.parameters?.docs?.source}}};export{a as Default,e as Footer,s as Popup,p as __namedExportsOrder,c as default};
