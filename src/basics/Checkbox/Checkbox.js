import React, { forwardRef } from 'react'
import './Checkbox.scss'
//Needs to support spacebar selection

const Checkbox = forwardRef(
  ({ label = '', checked = false, onChange = null, name, error, errorMessage, testId }, ref) => {
    const isError = () => error
    return (
      <>
        <label className={`ds-checkbox ${isError() ? 'has-error' : ''}`}>
          <input
            type="checkbox"
            checked={checked ? true : null}
            onChange={onChange ? onChange : null}
            ref={ref}
            name={name}
            data-testid={`${testId ? testId : `checkbox-${name}`}`}
          />
          <svg width="32" height="32" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
            <rect
              className="cb-bg"
              width="35"
              height="35"
              x="-2"
              y="-2"
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
              rx="6"
              ry="6"
            ></rect>
            <polyline
              className="cb-cm"
              points="4,14 12,23 28,5"
              stroke="transparent"
              strokeWidth="4"
              fill="none"
            ></polyline>
          </svg>

          <span>{label}</span>
        </label>
        <div className="error">{isError() ? errorMessage : ''}</div>
      </>
    )
  }
)

export default Checkbox
