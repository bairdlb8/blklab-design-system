import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ContentWithSideNav from './ContentWithSideNav'

expect.extend(toHaveNoViolations)

describe('<ContentWithSideNav />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<ContentWithSideNav />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<ContentWithSideNav />)

    expect(asFragment(<ContentWithSideNav />)).toMatchSnapshot()
  })

})
