import React from 'react'
import PropTypes from 'prop-types'

import '../../containers/GridContainer'

import './SingleWithSidebar.scss'

const SingleWithSidebar = ({ className = '', children, sidebarContent }) => {
  return (
    <section className="single-with-sidebar display-grid">
      <article className="pt-lg">{children}</article>
      <aside className="p-lg">{sidebarContent}</aside>
    </section>
  )
}

SingleWithSidebar.propTypes = {
  sidebarContent: PropTypes.any
}

export default SingleWithSidebar
