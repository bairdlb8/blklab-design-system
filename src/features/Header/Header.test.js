import { render } from '@testing-library/react'
import React from 'react'
import Header from './Header'

describe('Header', () => {
  const defaultProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<Header {...props} />)

    expect(queryByText('Header'))
  })
})
