// 토큰 그룹(중첩 가능)을 순서 있는 목록으로 편다. build.mjs(앱 코드 생성)와 foundations(Storybook)가 같이 쓴다.
//   color.gray.900        → name gray900        · css gray-900
//   typography.text.base.medium → textBaseMedium · css text-base-medium
// 하위 토큰을 먼저 낸다 — Kotlin object는 선언 순서대로 초기화돼서, 별칭이 뒤에 오는 값을 가리키면 0이 들어간다.
const kebab = s => s.replace(/[A-Z]/g, c => '-' + c.toLowerCase()).replace('_', '-')
const cap = s => s[0].toUpperCase() + s.slice(1)

export function flatten(group, groupName) {
  const out = []
  const walk = (node, path) => {
    for (const [k, v] of Object.entries(node)) if (!k.startsWith('$') && v && typeof v === 'object') walk(v, [...path, k])
    if (path.length && '$value' in node) out.push({
      path: path.join('.'), name: path[0] + path.slice(1).map(cap).join(''), css: path.map(kebab).join('-'),
      value: node.$value, desc: node.$description,
    })
  }
  walk(group, [])
  const byPath = new Map()
  for (const e of out) {
    const m = typeof e.value === 'string' && e.value.match(/^\{(\w+)\.([\w.]+)\}$/)
    if (m) {
      const target = byPath.get(m[2])
      if (m[1] !== groupName || !target) throw new Error(`깨진 별칭(없거나 뒤에 선언됨): ${groupName}.${e.path} → ${e.value}`)
      e.alias = target
      e.value = target.value
    }
    if ([...byPath.values()].some(o => o.name === e.name)) throw new Error(`이름 겹침: ${groupName}.${e.path} → ${e.name}`)
    byPath.set(e.path, e)
  }
  return out
}
