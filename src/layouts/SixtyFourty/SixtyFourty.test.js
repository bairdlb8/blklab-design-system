import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SixtyFourty from './SixtyFourty'

expect.extend(toHaveNoViolations)

describe('<SixtyFourty />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<SixtyFourty />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
