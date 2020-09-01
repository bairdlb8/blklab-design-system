import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Heading from './Heading'

expect.extend(toHaveNoViolations)

describe('<Heading />', () => {
  describe('children', () => {
    it('renders the given children into the heading', () => {
      const label = 'Click me!'
      const { getByText } = render(<Heading>{label}</Heading>)
      expect(getByText(/Click me!/i)).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Heading>Test</Heading>)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
