import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Fpo from './Fpo'

expect.extend(toHaveNoViolations)

describe('<Fpo />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Fpo />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Fpo />)

    expect(asFragment(<Fpo />)).toMatchSnapshot()
  })

})
