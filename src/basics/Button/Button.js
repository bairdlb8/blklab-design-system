/**
- Test thing
- Another test.
**/

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

import Icon from '../Icon'

const IconSides = {
  left: 'left',
  right: 'right'
}

const Alignments = {
  left: 'left',
  right: 'right',
  center: 'center'
}

const Sizes = {
  large: 'large',
  medium: 'medium',
  small: 'small'
}

const Button = ({
  url,
  external,
  icon,
  iconSide = 'right',
  disabled,
  loading,
  hollow,
  destructive,
  fullWidth,
  submit,
  secondary,
  size = 'medium',
  textAlign = 'center',
  onClick,
  onKeyUp,
  onTouchEnter,
  children
}) => {
  let [state, setState] = useState({
    uiState: 'idle'
  })
  let theIcon = icon !== 'none' ? <Icon icon={icon} /> : null
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`ds-button text-align-${textAlign} ${
        fullWidth ? 'display-block' : 'display-inline-flex'
      }`}
      disabled={disabled}
      ds-hollow={hollow ? 'true' : null}
      ds-primary={!secondary && !destructive && !disabled ? 'true' : null}
      ds-secondary={secondary && !destructive && !disabled ? 'true' : null}
      ds-icon={icon !== 'none' ? 'true' : null}
      ds-icon-side={icon !== 'none' ? iconSide : null}
      ds-size={size}
    >
      <span className="root">
        {iconSide === 'left' && icon !== 'none' && theIcon}
        <span>{children}</span>
        {iconSide === 'right' && icon !== 'none' && theIcon}
      </span>
    </button>
  )
}

export default Button

Button.defaultProps = {
  size: 'medium',
  textAlign: 'center',
  icon: 'none',
  iconSide: 'right'
}

Button.propTypes = {
  url: PropTypes.string,
  external: PropTypes.bool,

  icon: PropTypes.any,
  iconSide: PropTypes.oneOf(Object.keys(IconSides)),

  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  hollow: PropTypes.bool,
  destructive: PropTypes.bool,
  fullWidth: PropTypes.bool,
  submit: PropTypes.bool,

  size: PropTypes.oneOf(Object.keys(Sizes)),
  textAlign: PropTypes.oneOf(Object.keys(Alignments)),

  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  onTouchEnter: PropTypes.func
}
