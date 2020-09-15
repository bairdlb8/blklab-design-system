import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ForgotPassword from './ForgotPassword'

expect.extend(toHaveNoViolations)

describe('<ForgotPassword />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<ForgotPassword />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<ForgotPassword />)

    expect(asFragment(<ForgotPassword />)).toMatchSnapshot()
  })

})
