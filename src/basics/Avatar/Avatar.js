import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.scss'

const Avatar = ({ src = '', initials = 'BB', alt = '' }) => {
  return (
    <div className="ds-avatar">
      {src && (
        <picture className="ds-avatar__image">
          <img src={src} />
        </picture>
      )}
      {initials && <span className="ds-avatar__initials">{initials}</span>}
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Avatar
