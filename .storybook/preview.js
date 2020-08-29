import '../src/scss/base.scss'
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming'

const cssReq = require.context('!!raw-loader!../src', true, /.\.css$/)
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }))

const scssReq = require.context('!!raw-loader!../src', true, /.\.scss$/)
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }))

// const lessReq = require.context('!!raw-loader!../src', true, /.\.less$/)
// const lessTokenFiles = lessReq
//   .keys()
//   .map((filename) => ({ filename, content: lessReq(filename).default }))

// const svgIconsReq = require.context('!!raw-loader!../src', true, /.\.svg$/)
// const svgIconTokenFiles = svgIconsReq
//   .keys()
//   .map((filename) => ({ filename, content: svgIconsReq(filename).default }))

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: scssTokenFiles
      // less: lessTokenFiles,
      // svgIcons: svgIconTokenFiles
    }
  }
})
// or global addParameters
// addParameters({
//   docs: {
//     theme: themes.dark
//   }
// })

addDecorator(withA11y)
