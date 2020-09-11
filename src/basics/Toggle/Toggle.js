import React from 'react'
import PropTypes from 'prop-types'

import './Toggle.scss'

const Toggle = ({ name = '', label = '', leftLabel = true, className = '', disabled }) => {
  const id = `toggle-${Math.random(0, 10000)}`
  return (
    <div className={`ds-toggle ${leftLabel ? 'flip' : null}`}>
      <input type="checkbox" name={name} id={id} disabled={disabled} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

Toggle.propTypes = {}

export default Toggle
