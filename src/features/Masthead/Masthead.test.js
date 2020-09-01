import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Masthead from './Masthead'

expect.extend(toHaveNoViolations)

describe('<Masthead />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Masthead />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Masthead />)

    expect(asFragment(<Masthead />)).toMatchSnapshot()
  })
})
