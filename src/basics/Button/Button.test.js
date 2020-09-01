import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Button from './Button'

expect.extend(toHaveNoViolations)

describe('<Button />', () => {
  describe('url', () => {
    it('renders a link when present', () => {
      const link = 'https://test.com'
      const { getByRole } = render(<Button url={link}>Test</Button>)
      expect(getByRole('link').getAttribute('href')).toBe(link)
    })
  })

  describe('children', () => {
    it('renders the given children into the button', () => {
      const label = 'Click me!'
      const { getByText } = render(<Button>{label}</Button>)
      expect(getByText(/Click me!/i)).toBeInTheDocument()
    })
  })

  describe('icon', () => {
    it('renders an icon when present', () => {
      const icon = 'github'
      const { container } = render(<Button icon={icon}>Test</Button>)
      expect(container.find)
    })
  })

  describe('disabled', () => {
    it('is disabled when set to be', () => {
      const { getByRole } = render(<Button disabled={true}>Test</Button>)
      expect(getByRole('button').disabled).toBe(true)
    })
  })

  describe('loading', () => {
    it('shows the loading indicator when set to loading', () => {})

    it('sets an alert role when loading', () => {})

    it('sets aria-busy on the button while loading', () => {})
  })

  describe('external', () => {
    it('has rel="noopener noreferrer" if is set', () => {
      const link = 'https://test.com'
      const { getByRole } = render(
        <Button url={link} external={true}>
          Test
        </Button>
      )
      expect(getByRole('link').getAttribute('rel')).toBe('noopener noreferrer')
    })

    it('has target="_blank" when it is set', () => {})
  })

  describe('accessibility', () => {
    it('should not fail any accessibility tests', async () => {
      const { container } = render(<Button>Click Me!</Button>)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('sets an aria-label on the button', () => {
      const { getByRole } = render(<Button ariaLabel="button">Test</Button>)
      expect(getByRole('button').getAttribute('aria-label')).toBe('button')
    })

    it('has aria-controls on the button', () => {
      const { getByRole } = render(<Button ariaControls="button">Test</Button>)
      expect(getByRole('button').getAttribute('aria-controls')).toBe('button')
    })

    it('has aria-pressed on the button', () => {
      const { getByRole } = render(<Button>Test</Button>)
      expect(getByRole('button').getAttribute('aria-pressed')).not.toBeNull()
    })

    it('sets an aria-label on the link if it has a url', () => {
      const { getByRole } = render(
        <Button url="http://test.com" ariaLabel="button">
          Test
        </Button>
      )
      expect(getByRole('link').getAttribute('aria-label')).toBe('button')
    })
  })

  describe('onClick', () => {
    it('responds when onClick is called', (done) => {
      let func = () => {
        done()
      }
      const { getByRole } = render(<Button onClick={func}>Test</Button>)

      fireEvent.click(getByRole('button'))
    })
  })
})
