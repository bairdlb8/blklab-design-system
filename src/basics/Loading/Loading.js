import React from 'react'
import PropTypes from 'prop-types'

import './Loading.scss'

const Loading = ({ className = '' }) => {
  return (
    <div className="loading">
      <div className="double">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  )
}

Loading.propTypes = {}

export default Loading
