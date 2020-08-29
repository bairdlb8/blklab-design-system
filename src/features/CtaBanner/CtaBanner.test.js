import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import CtaBanner from './CtaBanner'

expect.extend(toHaveNoViolations)

describe('<CtaBanner />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<CtaBanner />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<CtaBanner />)

    expect(asFragment(<CtaBanner />)).toMatchSnapshot()
  })

})
