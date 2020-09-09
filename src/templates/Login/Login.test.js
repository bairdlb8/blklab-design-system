import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Login from './Login'

expect.extend(toHaveNoViolations)

describe('<Login />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Login />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Login />)

    expect(asFragment(<Login />)).toMatchSnapshot()
  })

})
