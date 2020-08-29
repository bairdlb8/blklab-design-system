import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Button from './Button'

expect.extend(toHaveNoViolations)

describe('<Button />', () => {
  describe('url', () => {
    it('renders a link when present', () => {})
    it('renders a button when not', () => {})
  })

  describe('icon', () => {
    it('renders an icon when present', () => {})
  })

  describe('disabled', () => {
    it('is disabled when set to be', () => {})
  })

  describe('loading', () => {
    it('shows the loading indicator when set to loading', () => {})

    it('sets an alert role when loading', () => {})

    it('sets aria-busy on the button while loading', () => {})
  })

  describe('external', () => {
    it('has rel="noopener noreferrer" if is set', () => {})

    it('has target="_blank" when it is set', () => {})
  })

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Button />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('sets an aria-label on the button', () => {})

    it('has aria-controls on the button', () => {})

    it('has aria-pressed on the button', () => {})

    it('sets an aria-label on the link if it has a url', () => {})
  })

  describe('onClick', () => {
    it('responds when onClick is called', () => {})
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<Button />)

    expect(asFragment(<Button />)).toMatchSnapshot()
  })
})
