import React from 'react'
import PropTypes from 'prop-types'

import './Text.scss'

const Text = ({ className = '', children }) => {
  return <p>{children}</p>
}

Text.propTypes = {}

export default Text
