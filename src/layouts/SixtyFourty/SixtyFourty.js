import React from 'react'
import PropTypes from 'prop-types'

import './SixtyFourty.scss'

const SixtyFourty = ({ children, largeSide = 'left', className = '' }) => {
  return (
    <section className={`ds-sixty-fourty display-grid large-side-${largeSide}`}>{children}</section>
  )
}

SixtyFourty.propTypes = {
  largeSide: PropTypes.string
}

export default SixtyFourty
