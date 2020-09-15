import React from 'react'
import PropTypes from 'prop-types'

import './Snackbar.scss'

const Snackbar = ({ className = '', children, status = 'idle', onDismiss }) => {
  return (
    <div className={`ds-snackbar ${status}`}>
      <div className="ds-snackbar__message">{children}</div>
      {onDismiss && (
        <div className="ds-snackbar__action" onClick={onDismiss}>
          Dismiss
        </div>
      )}
    </div>
  )
}

Snackbar.propTypes = {}

export default Snackbar
