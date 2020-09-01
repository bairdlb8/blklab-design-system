import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Link from './Link'

expect.extend(toHaveNoViolations)

describe('<Link />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Link href="http://test.com">Link Text</Link>)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
