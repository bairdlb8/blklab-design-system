import React from 'react'
import PropTypes from 'prop-types'

import './Toggle.scss'

const Toggle = ({ name = '', label = '', leftLabel = '', rightLabel = '', className = '' }) => {
  return (
    <fieldset aria-label={label}>
      <legend>{label}</legend>
      <div className="ds-toggle" role="radiogroup">
        <label htmlFor="left" className="sr-only">
          {leftLabel}
        </label>
        <span className="ds-toggle__wrapper">
          <input type="radio" name={name} id="left" aria-label={leftLabel} />
          <input type="radio" name={name} id="right" aria-label={rightLabel} />
          <span aria-hidden="true" className="ds-toggle__background"></span>
          <span aria-hidden="true" className="ds-toggle__switcher"></span>
        </span>
        <label htmlFor="right" className="sr-only">
          {rightLabel}
        </label>
      </div>
    </fieldset>
  )
}

Toggle.propTypes = {}

export default Toggle
