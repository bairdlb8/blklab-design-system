import { render } from '@testing-library/react'
import React from 'react'
import TextInput from './TextInput'

describe('TextInput', () => {
  const defaultProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<TextInput {...props} />)

    expect(queryByText('TextInput'))
  })
})
