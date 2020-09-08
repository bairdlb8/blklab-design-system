import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.scss'
import Icon from '../Icon'

function TextInput({
  label,
  type = 'text',
  error = false,
  errorMessage = '',
  onValidate = () => {},
  required = false,
  name,
  helpText,
  disabled,
  placeholder,
  fullWidth = false,
  onChange = null,
  icon,
  iconSide = 'left'
}) {
  return (
    <div className="ds-input">
      <label>{label}</label>
      {helpText && <div className="help">{helpText}</div>}
      <div
        className={`ds-input__input ${error ? 'has-error' : null} ${
          fullWidth ? 'full-width' : null
        }`}
      >
        {icon && iconSide === 'left' && <Icon icon={icon} size="large" />}
        <input
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={`display-block`}
          disabled={disabled ? true : null}
          onChange={onChange}
        />
        {icon && iconSide === 'right' && <Icon icon={icon} />}
      </div>
      <div className="error">{error ? errorMessage : ''}</div>
    </div>
  )
}

export default TextInput

TextInput.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helpText: PropTypes.string
}
