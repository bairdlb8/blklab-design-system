import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import RadioButton from './RadioButton'

expect.extend(toHaveNoViolations)

describe('<RadioButton />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<RadioButton />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<RadioButton />)

    expect(asFragment(<RadioButton />)).toMatchSnapshot()
  })

})
