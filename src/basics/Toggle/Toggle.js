import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import './Toggle.scss'

const Toggle = forwardRef(
  ({ name = '', label = '', leftLabel = true, className = '', disabled }, ref) => {
    const id = `toggle-${Math.random(0, 10000)}`
    return (
      <div className={`ds-toggle ${leftLabel ? 'flip' : null}`}>
        <input type="checkbox" name={name} id={id} disabled={disabled} ref={ref} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }
)

Toggle.propTypes = {}

export default Toggle
