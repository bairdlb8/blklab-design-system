import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Dialog from './Dialog'

expect.extend(toHaveNoViolations)

describe('<Dialog />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Dialog />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Dialog />)

    expect(asFragment(<Dialog />)).toMatchSnapshot()
  })

})
