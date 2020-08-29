import React from 'react'
import PropTypes from 'prop-types'

import './Toggle.scss'

const Toggle = ({ name = '', label = '', leftLabel = '', rightLabel = '', classNameName = '' }) => {
  return (
    <fieldset aria-label="theme switcher" role="radiogroup">
      <legend>{label}</legend>
      <div className="ds-toggle">
        <label for="left">{leftLabel}</label>
        <span className="ds-toggle__wrapper">
          <input type="radio" name={name} id="left" />
          <input type="radio" name={name} id="right" />
          <span aria-hidden="true" className="ds-toggle__background"></span>
          <span aria-hidden="true" className="ds-toggle__switcher"></span>
        </span>
        <label for="right">{rightLabel}</label>
      </div>
    </fieldset>
  )
}

Toggle.propTypes = {}

export default Toggle
