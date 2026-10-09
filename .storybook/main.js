/** Storybook — 토큰(Foundations) · 컴포넌트 · 화면(Screens)을 한 곳에서. 배포는 .github/workflows/storybook.yml */
export default {
  framework: '@storybook/html-vite',
  stories: ['../intro.mdx', '../foundations/*.stories.js', '../components/**/*.stories.js', '../screens/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  core: { disableTelemetry: true },
  // 기존 HTML 시안은 파일 그대로 서빙하고 Screens 스토리가 iframe으로 띄운다.
  staticDirs: [{ from: '../screens', to: '/screens' }],
}
