import React from 'react'
import PropTypes from 'prop-types'

import './Heading.scss'

const Heading = ({ className = null, children, level = 1 }) => {
  if (level == 1) {
    return (
      <h1 role="heading" aria-level="1" className={className}>
        {children}
      </h1>
    )
  } else if (level == 2) {
    return (
      <h2 role="heading" aria-level="2" className={className}>
        {children}
      </h2>
    )
  } else if (level == 3) {
    return (
      <h3 role="heading" aria-level="3" className={className}>
        {children}
      </h3>
    )
  }

  return (
    <h4 role="heading" aria-level="3" className={className}>
      {children}
    </h4>
  )
}

Heading.propTypes = {}

export default Heading
