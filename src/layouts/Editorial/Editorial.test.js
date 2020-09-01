import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Editorial from './Editorial'

expect.extend(toHaveNoViolations)

describe('<Editorial />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Editorial />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Editorial />)

    expect(asFragment(<Editorial />)).toMatchSnapshot()
  })
})
