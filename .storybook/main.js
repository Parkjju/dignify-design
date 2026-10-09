/** Storybook — 토큰(Foundations) · 컴포넌트 · 화면(Screens) · 흐름(Flows). 배포는 .github/workflows/storybook.yml */
export default {
  framework: '@storybook/html-vite',
  stories: ['../intro.mdx', '../guide.mdx', '../foundations/*.stories.js', '../components/**/*.stories.js', '../screens/*.stories.js', '../flows/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../public'],   // public/m.html — 휴대폰용 목록 (주소: /m.html)
  core: { disableTelemetry: true },
}
