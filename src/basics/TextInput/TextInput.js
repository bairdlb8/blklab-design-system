import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import './TextInput.scss'
import Icon from '../Icon'

const emailReg = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const TextInput = forwardRef(
  (
    {
      label,
      type = 'text',
      inputMode = 'text',
      error,
      errorMessage = '',
      onValidate = () => {},
      required,
      name,
      helpText,
      disabled,
      placeholder,
      fullWidth = false,
      onChange = null,
      icon,
      iconSide = 'left',
      clear,
      className = '',
      autoComplete = 'off',
      testId
    },
    ref
  ) => {
    const Messages = {
      empty: 'Please fill out this field',
      wrong: errorMessage
    }

    const [state, setState] = useState({
      visible: false,
      error: error,
      errorState: 'wrong'
    })

    const validate = (ev) => {
      if (required === true && !ev.target.value.trim()) {
        setState({ ...state, error: true, errorState: 'empty' })
      } else {
        if (type == 'email' && !emailReg.test(ev.target.value.trim())) {
          setState({ ...state, error: true, errorState: 'wrong' })
        } else {
          setState({ ...state, error: false, errorState: 'wrong' })
        }
      }
    }

    const isError = () => state.error === true || error === true

    return (
      <div className={`ds-input ${className}`.trim()}>
        <label>{label}</label>
        {helpText && <div className="help">{helpText}</div>}
        <div
          className={`ds-input__input  ${disabled ? 'disabled' : ''} ${
            isError() ? 'has-error' : ''
          } ${fullWidth ? 'full-width' : ''}`.trim()}
        >
          {icon && iconSide === 'left' && <Icon icon={icon} size="large" />}
          <input
            ref={ref}
            name={name}
            type={type === 'password' && state.visible ? 'text' : type}
            inputMode={inputMode}
            disabled={disabled}
            placeholder={placeholder}
            className={`display-block`}
            disabled={disabled ? true : null}
            onChange={onChange}
            required={required}
            onBlur={validate}
            autoComplete={autoComplete}
            data-testid={`${testId ? testId : `input-${name}`}`}
          />
          {icon && iconSide === 'right' && <Icon icon={icon} />}
          {clear && <Icon size="large" icon="close-circle-outline" />}
          {type == 'password' && (
            <span
              className="button"
              role="button"
              onClick={() => setState({ ...state, visible: !state.visible })}
            >
              {!state.visible ? 'Show' : 'Hide'}
            </span>
          )}
        </div>
        <div className="error">{isError() ? Messages[state.errorState] : ''}</div>
      </div>
    )
  }
)

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
