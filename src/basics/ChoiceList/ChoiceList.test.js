import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import ChoiceList from './ChoiceList'

expect.extend(toHaveNoViolations)

describe('<ChoiceList />', () => {

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<ChoiceList />)
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<ChoiceList />)

    expect(asFragment(<ChoiceList />)).toMatchSnapshot()
  })

})
