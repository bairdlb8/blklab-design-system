import React from 'react'
import PropTypes from 'prop-types'

import './ContentWithSideNav.scss'

const ContentWithSideNav = ({ className = '', children, sidebarContent }) => {
  return (
    <section className="ds-content-with-side-nav display-grid">
      <nav className="p-lg">{sidebarContent}</nav>
      <article className="pt-lg">{children}</article>
    </section>
  )
}

ContentWithSideNav.propTypes = {}

export default ContentWithSideNav
