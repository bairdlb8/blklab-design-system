import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import App from './App'

expect.extend(toHaveNoViolations)

describe('<App />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<App />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
  })

})
