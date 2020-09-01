import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

import Button from '../../basics/Button'
import Image from '../../basics/Image'

const Card = ({
  children,
  className = '',
  mainImage,
  avatar,
  headerActions,
  footerActions,
  title,
  subtitle,
  description,
  theme = 'normal'
}) => {
  let hasFooterActions = footerActions && footerActions.props && footerActions.props.children
  let footerSize = null
  if (hasFooterActions) {
    footerSize = Array.isArray(footerActions.props.children)
      ? footerActions.props.children.length
      : 1
  }
  return (
    <section className={`ds-card ${theme} ${className}`}>
      <div className="ds-card__header">{headerActions}</div>
      {mainImage && <Image src={mainImage} alt="" />}
      <div className={`ds-card__text ${footerActions ? 'mb-xxl' : ''}`}>
        <h2 className={`font-weight-black ${subtitle ? 'mb-n' : ''}`}>{title}</h2>
        {subtitle && <h3 className="ds-card__text-subtitle font-weight-normal">{subtitle}</h3>}
        {description && <div>{description}</div>}
        {children && <div>{children}</div>}
      </div>
      <div className="ds-card__footer" style={{ '--card-footer-items': footerSize }}>
        {footerActions}
      </div>
    </section>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  mainImage: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  headerActions: PropTypes.any,
  footerActions: PropTypes.any
}

export default Card
