import React from 'react'
import PropTypes from 'prop-types'

import './SingleColumn.scss'

const SingleColumn = ({ children, className = '' }) => {
  return <section className="single-column">{children}</section>
}

SingleColumn.propTypes = {}

export default SingleColumn
