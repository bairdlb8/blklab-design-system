import React from 'react'
import PropTypes from 'prop-types'

import './Tag.scss'

const Tag = ({ className = '', children }) => {
  return <div className="ds-tag">{children}</div>
}

Tag.propTypes = {}

export default Tag
