import React from 'react'
import PropTypes from 'prop-types'
import './FlexContainer.scss'

const FlexContainer = ({
  gap = 10,
  flexWrap = 'flex-wrap',
  flexDir = '',
  className = '',
  children
}) => {
  return (
    <section className={`ds-flex display-flex ${flexWrap} ${flexDir} ${className}`}>
      {children}
    </section>
  )
}

FlexContainer.propTypes = {
  gap: PropTypes.number,
  className: PropTypes.string,
  flexWrap: PropTypes.oneOf(
    Object.keys({
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
      noWrap: 'flex-nowrap'
    })
  ),
  flexDir: PropTypes.oneOf(
    Object.keys({
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse'
    })
  )
}

export default FlexContainer
