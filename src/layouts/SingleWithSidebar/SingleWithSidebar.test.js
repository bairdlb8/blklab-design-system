import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import SingleWithSidebar from './SingleWithSidebar'

expect.extend(toHaveNoViolations)

describe('<SingleWithSidebar />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<SingleWithSidebar />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<SingleWithSidebar />)

    expect(asFragment(<SingleWithSidebar />)).toMatchSnapshot()
  })

})
