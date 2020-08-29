import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import FilterList from './FilterList'

expect.extend(toHaveNoViolations)

describe('<FilterList />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<FilterList />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<FilterList />)

    expect(asFragment(<FilterList />)).toMatchSnapshot()
  })

})
