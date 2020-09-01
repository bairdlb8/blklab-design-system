import React from 'react'
import PropTypes from 'prop-types'
import './Container.scss'

function Container({
  children,
  className = '',
  maxWidth,
  fullWidth = false,
  fullHeight = false,
  color = 'light'
}) {
  let styles = {}
  if (maxWidth) {
    styles['--container-max-width'] = maxWidth
  }
  return (
    <section
      style={styles}
      className={`ds-container mx-auto ${fullWidth ? 'full-width' : ''} ${
        fullHeight ? 'full-height' : ''
      } ${color ? color : ''} ${className}`}
    >
      {children}
    </section>
  )
}

Container.propTypes = {
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  maxWidth: PropTypes.string
}

export default Container
