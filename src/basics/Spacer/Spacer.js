import React from 'react'
import PropTypes from 'prop-types'

import './Spacer.scss'

const Spacer = ({ className = '' }) => {
  return <div className={`display-flow-root ${!className ? 'my-xxl' : className}`}></div>
}

Spacer.propTypes = {}

export default Spacer
