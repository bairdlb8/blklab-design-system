import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.scss'

const Avatar = ({
  src = 'https://ui-avatars.com/api/?name=Admin+User&background=2483d0&color=fff&size=100',
  alt = ''
}) => {
  return (
    <picture className="ds-avatar">
      <img src={src} />
    </picture>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Avatar
