import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'dark',
    brandTitle: 'My Storybook',
    brandUrl: '/',
    brandImage: null,
    appBorderRadius: 0
    // appBg: '#000',
    // contentBg: '#fff',
    // textColor: '#ff0000'
    // TODO more pretty brand colors?
    // SEE https://github.com/storybooks/storybook/blob/next/docs/src/pages/configurations/theming/index.md
  })
})
