import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Loading from './Loading'

expect.extend(toHaveNoViolations)

describe('<Loading />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Loading />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Loading />)

    expect(asFragment(<Loading />)).toMatchSnapshot()
  })
})
