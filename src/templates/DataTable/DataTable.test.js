import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import DataTable from './DataTable'

expect.extend(toHaveNoViolations)

describe('<DataTable />', () => {
  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<DataTable />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<DataTable />)

    expect(asFragment(<DataTable />)).toMatchSnapshot()
  })
})
