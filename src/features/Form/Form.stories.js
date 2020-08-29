// /src/components/Button/button.stories.js
import React from 'react'
import Form from './Form.js'
import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'Features / Form', decorators: [withKnobs] }
export const form = () => {
  return <Form></Form>
}
