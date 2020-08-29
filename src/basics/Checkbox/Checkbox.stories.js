// /src/components/Checkbox/Checkbox.stories.js
import React from 'react'
import Checkbox from './Checkbox.js'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'
import { bool } from 'prop-types'

export default { title: 'Basics / Checkbox ', decorators: [withKnobs] }

export const checkbox = () => {
  const disabled = boolean('Disabled', false)
  return <Checkbox disabled={disabled} label="Select Me!" />
}
