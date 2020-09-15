import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './Snackbar.scss'

const Snackbar = ({ className = '', children, status = 'idle', onDismiss }) => {
  const [state, setState] = useState({
    uiState: 'hidden'
  })

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, uiState: 'show' })
    }, 100)
  }, [])

  return (
    <div className={`ds-snackbar ${state.uiState} ${status}`}>
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
