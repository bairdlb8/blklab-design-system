import anysort from 'anysort'
import '../src/scss/base.scss'
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous
      const [nextStory, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Design System / Introduction',
        'Design System / Style Guide',
        'Templates / **',
        'Basics / **',
        'Components / **',
        'Features / **',
        'Layouts / **',
        'Containers / **'
      ])
    }
  }
})

addDecorator(withA11y)
