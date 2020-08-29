import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import ThreeUp from './ThreeUp'

expect.extend(toHaveNoViolations)

describe('<ThreeUp />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<ThreeUp />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<ThreeUp />)

    expect(asFragment(<ThreeUp />)).toMatchSnapshot()
  })

})
