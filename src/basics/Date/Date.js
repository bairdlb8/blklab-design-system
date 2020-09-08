import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

import './Date.scss'

const DateElement = ({ className = '', dateString = '', dateFormat = 'MM/dd/yyyy' }) => {
  let d = format(new Date(dateString), dateFormat)
  return <span className="ds-date">{d}</span>
}

DateElement.propTypes = {
  dateString: PropTypes.string
}

export default DateElement
