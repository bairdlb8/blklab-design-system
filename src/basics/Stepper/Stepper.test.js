import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Stepper from './Stepper'

expect.extend(toHaveNoViolations)

describe('<Stepper />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Stepper />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Stepper />)

    expect(asFragment(<Stepper />)).toMatchSnapshot()
  })
})
