import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SingleColumn from './SingleColumn'

expect.extend(toHaveNoViolations)

describe('<SingleColumn />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<SingleColumn />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<SingleColumn />)

    expect(asFragment(<SingleColumn />)).toMatchSnapshot()
  })
})
