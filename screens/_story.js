// 화면 스토리 공통 — registry의 기본 args를 그대로 Controls에 연결한다.
import { SCREENS } from './registry.js'
import { T } from './data.js'

const trackKey = v => Object.keys(T).find(k => T[k] === v) ?? v
const RANGES = { scroll: { min: 0, max: 1400, step: 10 }, page: { min: 0, max: 6, step: 1 }, step: { min: 1, max: 2, step: 1 }, selected: { min: 0, max: 3, step: 1 } }

export function story(id, overrides = {}, argTypes = {}, name) {
  const [label, render, defaults] = SCREENS[id]
  const args = { ...defaults, ...overrides }
  const types = {}
  if ('track' in args) { args.track = trackKey(args.track); types.track = { control: 'select', options: Object.keys(T), mapping: T, description: '커버·제목·아티스트 (screens/data.js 의 T)' } }
  for (const [k, r] of Object.entries(RANGES)) if (k in args && typeof args[k] === 'number') types[k] = { control: { type: 'range', ...r } }
  return { name: name ?? label, render, args, argTypes: { ...types, ...argTypes } }
}
