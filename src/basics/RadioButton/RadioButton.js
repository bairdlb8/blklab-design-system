import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import './RadioButton.scss'

const RadioButton = forwardRef(
  ({ label = '', name = '', value = '', className = '', testId }, ref) => {
    return (
      <label className={`ds-radio-button radio-before ${className}`}>
        <span className="radio__input">
          <input
            type="radio"
            name={name}
            value={value}
            ref={ref}
            data-testid={`${testId ? testId : `radio-${name}-${value}`}`}
          />
          <span className="radio__control"></span>
        </span>
        <span className="radio__label">{label}</span>
      </label>
    )
  }
)

RadioButton.propTypes = {}

export default RadioButton
