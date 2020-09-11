import React from 'react'
import PropTypes from 'prop-types'

import './RadioButton.scss'

const RadioButton = ({ label = '', name = '', value = '', className = '' }) => {
  return (
    <label className={`ds-radio-button radio-before ${className}`}>
      <span className="radio__input">
        <input type="radio" name={name} value={value} />
        <span className="radio__control"></span>
      </span>
      <span className="radio__label">{label}</span>
    </label>
  )
}

RadioButton.propTypes = {}

export default RadioButton
