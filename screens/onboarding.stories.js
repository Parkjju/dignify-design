import { story } from './_story.js'
export default { title: 'Screens/4. 온보딩', parameters: { layout: 'centered' } }

export const SignIn = story('onboarding-signin')
export const SignInGate = story('onboarding-signin-gate')
export const GuestPrompt = story('guest-prompt', {}, { tab: { control: 'inline-radio', options: ['picks', 'my'] } })
export const Loading = story('onboarding-loading')
export const Seed = story('onboarding-seed')
export const Building = story('onboarding-building')
