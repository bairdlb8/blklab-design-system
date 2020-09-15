import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

import Image from '../../basics/Image'
import Icon from '../../basics/Icon'
import { Avatar } from '../../base'

function Header({
  logo,
  title,
  navItems = [],
  condensed = false,
  className = '',
  ariaLabel = '',
  cta
}) {
  return (
    <header className={`ds-header display-grid align-items-center ${condensed ? 'condensed' : ''}`}>
      {!logo && !condensed && (
        <div className="logo">
          <img src="/small-logo.png" width="50px" />
        </div>
      )}
      <nav aria-label="">
        <Avatar />
        <span className="ml-2">Admin User</span>
        {/* <Icon icon="menu" className="hamburger" size="large" /> */}
      </nav>
      {cta && cta}
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string,
  condensed: PropTypes.bool,
  title: PropTypes.string,
  navItems: PropTypes.array,
  ariaLabel: PropTypes.string,
  cta: PropTypes.any
}

export default Header
