import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({ base: 'light', brandTitle: 'Dignify Design', colorSecondary: '#4B3FD8', appBorderRadius: 10 }),
})
