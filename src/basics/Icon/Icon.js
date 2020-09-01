import React from 'react'
import PropTypes from 'prop-types'
import './Icon.scss'

import 'eva-icons/style/eva-icons.css'

function Icon({ icon = '', size = 'medium', className = '', focusable = null, ariaHidden = null }) {
  return (
    <span
      className={`ds-icon eva eva-${icon} ${className} ${size}`}
      focusable={focusable}
      aria-hidden={ariaHidden}
    >
      <span className="sr-only">{icon}</span>
    </span>
  )
}

Icon.propTypes = {
  icon: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(
    Object.keys({
      default: null,
      medium: 'medium',
      large: 'large'
    })
  )
}

export default Icon
