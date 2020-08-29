import React from 'react'
import './Container.scss'

function Container({ children, className = '', maxWidth }) {
  let styles = {}
  if (maxWidth) {
    styles['--container-max-width'] = maxWidth
  }
  return (
    <section style={styles} className={`ds-container mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default Container
