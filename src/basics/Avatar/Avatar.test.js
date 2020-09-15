import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Avatar from './Avatar'

expect.extend(toHaveNoViolations)

describe('<Avatar />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Avatar />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Avatar />)

    expect(asFragment(<Avatar />)).toMatchSnapshot()
  })

})
