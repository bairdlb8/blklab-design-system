import React from 'react'
import PropTypes from 'prop-types'
import GridContainer from '../../containers/GridContainer'

import './TwoUp.scss'

function TwoUp({ children, className, imageSide = 'right' }) {
  if (children.length > 2) {
    console.warn('You have too many children in this component')
  }
  return (
    <section className={`ds-two-up ${className}`}>
      <GridContainer gridSize={2} gridGap={0}>
        {children}
      </GridContainer>
    </section>
  )
}

TwoUp.propTypes = {
  imageSide: PropTypes.oneOf(
    Object.keys({
      left: 'left',
      right: 'right'
    })
  )
}

export default TwoUp
