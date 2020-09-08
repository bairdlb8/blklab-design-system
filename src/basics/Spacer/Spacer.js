import React from 'react'
import PropTypes from 'prop-types'

import './Spacer.scss'

const Spacer = ({ size=1, className = '' }) => {
  return <div className={`display-flow-root mt-${size} ${className ? className : null}`}></div>
}

Spacer.propTypes = {}

export default Spacer
