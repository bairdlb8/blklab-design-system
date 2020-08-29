import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import ColorCard from './ColorCard'

expect.extend(toHaveNoViolations)

describe('<ColorCard />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<ColorCard />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<ColorCard />)

    expect(asFragment(<ColorCard />)).toMatchSnapshot()
  })

})
