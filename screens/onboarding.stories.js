import { story } from './_story.js'
export default { title: 'Screens/4. 온보딩', parameters: { layout: 'centered' } }

export const SignIn = story('onboarding-signin')
export const SignInGate = story('onboarding-signin-gate')
export const GuestPrompt = story('guest-prompt', {}, { tab: { control: 'inline-radio', options: ['picks', 'my'] } })
export const Loading = story('onboarding-loading')
export const Seed = story('onboarding-seed', {}, { titleFont: { control: 'inline-radio', options: ['title1', 'title2', 'headline'], description: '제목 타이포 토큰 — title1 24 · title2 18 · headline 17' }, titleBreak: { control: 'boolean', description: '"노래를" 뒤에서 줄바꿈' } })
export const SeedFull = story('onboarding-seed-full')
export const Building = story('onboarding-building')
