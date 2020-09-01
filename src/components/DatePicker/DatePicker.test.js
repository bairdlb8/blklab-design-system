import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import DatePicker from './DatePicker'

expect.extend(toHaveNoViolations)

describe('<DatePicker />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<DatePicker />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<DatePicker />)

    expect(asFragment(<DatePicker />)).toMatchSnapshot()
  })
})
