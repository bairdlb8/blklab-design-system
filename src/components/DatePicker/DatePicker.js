import React from 'react'
import PropTypes from 'prop-types'

import './DatePicker.scss'

const DatePicker = ({ date, handleSelect }) => {
  const handleKeyPress = (e) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      handleSelect()
    }
  }
  return (
    <div
      className="ds-date-picker"
      onClick={handleSelect}
      onKeyPress={handleKeyPress}
      role="button"
      aria-label="Datepicker"
    >
      <div>Select a date</div>
      <div aria-label="Selected date">{date}</div>
    </div>
  )
}

DatePicker.propTypes = {}

export default DatePicker
