import React from 'react'
import PropTypes from 'prop-types'

import './ColorCard.scss'

const ColorCard = ({ className = '', hexColor = '', name = '', usage = '' }) => {
  console.log(hexColor)
  return (
    <div className="ds-color-card">
      <div className="ds-color-card__color" style={{ '--ds-swatch-color': hexColor }}></div>
      <div className="py-sm px-sm">
        <b>Name:</b> {name}
        <br />
        <b>Token:</b> {usage}
        <br />
        <b>Hex:</b> {hexColor}
      </div>
    </div>
  )
}

ColorCard.propTypes = {}

export default ColorCard
