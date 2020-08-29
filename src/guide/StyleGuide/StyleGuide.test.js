import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import StyleGuide from './StyleGuide'

expect.extend(toHaveNoViolations)

describe('<StyleGuide />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<StyleGuide />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<StyleGuide />)

    expect(asFragment(<StyleGuide />)).toMatchSnapshot()
  })

})
