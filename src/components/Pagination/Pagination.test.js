import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Pagination from './Pagination'

expect.extend(toHaveNoViolations)

describe('<Pagination />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Pagination />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Pagination />)

    expect(asFragment(<Pagination />)).toMatchSnapshot()
  })

})
