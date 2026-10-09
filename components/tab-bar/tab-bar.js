// components/tab-bar/tab-bar.md — iOS 라벨은 번역하지 않는다
const TABS = [['feed', 'house', 'Feed'], ['picks', 'stack', 'Picks'], ['my', 'person', 'My']]
export function TabBar({ surface = 'light', selected = 'feed', floating = false } = {}) {
  return `<nav class="tabbar ${surface === 'light' ? '' : surface}" ${floating ? '' : 'style="position:relative;left:auto;bottom:auto;transform:none"'}>${
    TABS.map(([id, icon, label]) => `<span class="tab${id === selected ? ' on' : ''}"><i class="ic ic-${icon}"></i>${label}</span>`).join('')}</nav>`
}
