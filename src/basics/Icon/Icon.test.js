import { render } from '@testing-library/react'
import React from 'react'
import Icon from './Icon'

describe('Icon', () => {
  const defaultProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<Icon {...props} />)

    expect(queryByText('Icon'))
  })
})
