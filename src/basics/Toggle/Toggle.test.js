import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Toggle from './Toggle'

expect.extend(toHaveNoViolations)

describe('<Toggle />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Toggle leftLabel="Test" rightLabel="Test" label="Testing" />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Toggle />)

    expect(asFragment(<Toggle />)).toMatchSnapshot()
  })
})
