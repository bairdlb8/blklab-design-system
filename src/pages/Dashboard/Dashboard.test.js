import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Dashboard from './Dashboard'

expect.extend(toHaveNoViolations)

describe('<Dashboard />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Dashboard />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Dashboard />)

    expect(asFragment(<Dashboard />)).toMatchSnapshot()
  })

})
