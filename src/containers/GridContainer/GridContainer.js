import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './GridContainer.scss'

const GridContainer = ({ gridSize = 2, gridGap = 10, children, className = '' }) => {
  return (
    <section
      style={{ '--grid-size': gridSize, '--grid-gap': `${gridGap}px` }}
      className={`ds-grid display-grid md-grid-single-column ${className}`}
    >
      {children}
    </section>
  )
}

GridContainer.propTypes = {
  gridSize: PropTypes.number,
  gridGap: PropTypes.number,
  className: PropTypes.string
}

export default GridContainer
