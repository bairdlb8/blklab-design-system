import { render } from '@testing-library/react'
import React from 'react'
import Sandbox from './Sandbox'

describe('Sandbox', () => {
  const defaultProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<Sandbox {...props} />)

    expect(queryByText('Sandbox'))
  })
})
