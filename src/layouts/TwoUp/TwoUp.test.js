import { render } from '@testing-library/react'
import React from 'react'
import TwoUp from './TwoUp'

describe('TwoUp', () => {
  const defaultProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(
      <TwoUp {...props}>
        <div>Test 1</div>
        <div>Test 2</div>
      </TwoUp>
    )

    expect(queryByText('TwoUp'))
  })
})
