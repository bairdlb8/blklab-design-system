import React from 'react'
import PropTypes from 'prop-types'

import './Link.scss'

const Link = ({ href = '', external = false, className = '', children, ariaLabel }) => {
  return (
    <a
      data-testid="link"
      href={href}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreferrer' : null}
      aria-label={ariaLabel ? ariaLabel : null}
      role="link"
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  external: PropTypes.bool
}

export default Link
