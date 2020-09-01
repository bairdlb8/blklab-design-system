import React from 'react'
import PropTypes from 'prop-types'

import './Fpo.scss'

const Fpo = ({ className = '', children }) => {
  return <div className={`ds-fpo p-xxl mb-xl text-align-center`}>FPO: {children}</div>
}

Fpo.propTypes = {}

export default Fpo
