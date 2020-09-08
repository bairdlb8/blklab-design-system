import React from 'react'
import PropTypes from 'prop-types'

import './Divider.scss'

const Divider = ({ className = '', margin = 4 }) => {
  return <div className={`ds-divider display-flow-root my-${margin}`}></div>
}

Divider.propTypes = {}

export default Divider
