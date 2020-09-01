import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Homepage from './Homepage'

expect.extend(toHaveNoViolations)

describe('<Homepage />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Homepage />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Homepage />)

    expect(asFragment(<Homepage />)).toMatchSnapshot()
  })
})
