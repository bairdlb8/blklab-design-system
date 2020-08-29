import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Spacer from './Spacer'

expect.extend(toHaveNoViolations)

describe('<Spacer />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Spacer />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Spacer />)

    expect(asFragment(<Spacer />)).toMatchSnapshot()
  })

})
