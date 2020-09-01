import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './GridContainer.scss'

const GridContainer = ({
  gridSize = 2,
  gridGap = 12,
  gridColumnGap,
  gridRowGap,
  gridElementSize = '1fr',
  children,
  className = ''
}) => {
  return (
    <section
      role="grid"
      style={{
        '--grid-size': gridSize,
        '--grid-column-gap': `${!gridColumnGap ? gridGap : gridColumnGap}px`,
        '--grid-row-gap': `${!gridRowGap ? gridGap : gridRowGap}px`,
        '--grid-element-size': `${gridElementSize}`
      }}
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
