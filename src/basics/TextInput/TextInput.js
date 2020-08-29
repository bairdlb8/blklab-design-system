import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.scss'

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
  placeholder
}) {
  return (
    <div className="ds-input">
      <label>{label}</label>
      {helpText && <div className="help">{helpText}</div>}
      <input
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`display-block ${error ? 'has-error' : null}`}
        disabled={disabled ? true : null}
      />
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
