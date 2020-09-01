import React from 'react'
import PropTypes from 'prop-types'
import './Hero.scss'

import Image from '../../basics/Image'
import Heading from '../../basics/Heading'

function Hero({
  backgroundImage,
  title,
  content,
  children,
  className = '',
  fullScreen = false,
  customHeight = ''
}) {
  return (
    <section
      style={customHeight ? { '--hero-height': customHeight } : null}
      className={`ds-hero display-flex flex-dir-col justify-content-center align-items-center ${className} ${
        fullScreen ? 'full-screen' : ''
      }`}
    >
      {backgroundImage && <Image src={backgroundImage} />}
      <div className="foreground display-flex flex-dir-col justify-content-center align-items-center">
        {title && (
          <Heading level={1} className="text-transform-uppercase">
            {title}
          </Heading>
        )}
        {content && <div className="mb-xl">{content}</div>}
        {children}
      </div>
    </section>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  fullScreen: PropTypes.bool,
  customHeight: PropTypes.string
}

export default Hero
