import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Calendar from './Calendar'

expect.extend(toHaveNoViolations)

describe('<Calendar />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Calendar />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Calendar />)

    expect(asFragment(<Calendar />)).toMatchSnapshot()
  })

})
