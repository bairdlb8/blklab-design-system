import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Text from './Text'

expect.extend(toHaveNoViolations)

describe('<Text />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Text />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Text />)

    expect(asFragment(<Text />)).toMatchSnapshot()
  })

})
