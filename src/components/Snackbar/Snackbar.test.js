import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Snackbar from './Snackbar'

expect.extend(toHaveNoViolations)

describe('<Snackbar />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Snackbar />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Snackbar />)

    expect(asFragment(<Snackbar />)).toMatchSnapshot()
  })
})
