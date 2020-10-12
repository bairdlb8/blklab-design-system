/**
- Test thing
- Another test.
**/

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

import Icon from '../Icon'
import Link from '../Link'
import Loading from '../Loading'

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
  className = '',
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
  ariaLabel,
  ariaControls,
  ariaPressed = false,
  onClick,
  onKeyUp,
  onTouchEnter,
  children,
  testId
}) => {
  let [state, setState] = useState({
    uiState: 'idle'
  })
  let theIcon =
    icon !== 'none' ? (
      <span className="ds-button__icon" role="img" aria-label={icon}>
        <Icon icon={icon} focusable={false} ariaHidden={true} />
      </span>
    ) : null

  const buttonInternals = (
    <button
      data-testid={`${testId ? testId : 'button'}`}
      type={submit ? 'submit' : 'button'}
      className={`ds-button text-align-${textAlign} ${
        fullWidth ? 'display-block' : 'display-inline-flex'
      } ${loading ? 'loading' : ''} ${className}`.trim()}
      disabled={disabled}
      ds-hollow={hollow ? 'true' : null}
      ds-primary={!secondary && !destructive && !disabled ? 'true' : null}
      ds-secondary={secondary && !destructive && !disabled ? 'true' : null}
      ds-destructive={destructive && !disabled ? 'true' : null}
      ds-icon={icon !== 'none' ? 'true' : null}
      ds-icon-side={icon !== 'none' ? iconSide : null}
      ds-size={size}
      role="button"
      aria-label={ariaLabel ? ariaLabel : null}
      aria-controls={ariaControls ? ariaControls : null}
      aria-pressed={ariaPressed ? true : false}
      onClick={onClick ? onClick : null}
      onKeyUp={onClick ? onClick : onKeyUp ? onKeyUp : null}
    >
      <span className={`root ${loading ? 'fade-out' : ''}`}>
        {iconSide === 'left' && icon !== 'none' && theIcon}
        <span className="ds-button__text">{children}</span>
        {iconSide === 'right' && icon !== 'none' && theIcon}
      </span>
      {loading && <Loading />}
    </button>
  )

  return url ? (
    <Link href={url} external={external ? true : null} ariaLabel={ariaLabel}>
      {buttonInternals}
    </Link>
  ) : (
    buttonInternals
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
