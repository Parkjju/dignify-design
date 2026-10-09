// 앱 화면 시안 — screens/<파일>.html 을 그대로 iframe으로 띄운다. 화면을 추가하면 여기에도 한 줄.
import { frame } from './frame.js'
export default { title: 'Screens/4. 온보딩', parameters: { layout: 'centered' } }

export const OnboardingSignin = { name: '로그인', render: frame('onboarding-signin') }
export const OnboardingTutorial = { name: '튜토리얼', render: frame('onboarding-tutorial') }
export const OnboardingSeed = { name: '추천 기준 곡 고르기', render: frame('onboarding-seed') }
