import React from 'react'
import PropTypes from 'prop-types'

import './Heading.scss'

const Heading = ({ className = '', children }) => {
  return <h1 className={`${className}`}>{children}</h1>
}

Heading.propTypes = {}

export default Heading
