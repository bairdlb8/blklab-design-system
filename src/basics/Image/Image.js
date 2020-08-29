import React from 'react'
import PropTypes from 'prop-types'
import './Image.scss'

//TODOs:
//Generate responsive versions
//

function Image({ src = 'https://source.unsplash.com/daily', alt = '' }) {
  return (
    <picture className="ds-image">
      <img src={src} />
    </picture>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.oneOf(
    Object.keys({
      cover: 'cover',
      contain: 'contain',
      fill: 'fill'
    })
  )
}

export default Image
