import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

import Image from '../../basics/Image'
import Icon from '../../basics/Icon'

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
      {!logo && !condensed && <div className="logo">LOGO</div>}
      <nav className={``} aria-label="">
        <ul
          className="display-grid md-display-none justify-content-end"
          style={{ '--nav-item-size': navItems.length }}
        >
          {navItems.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
        <Icon icon="menu" className="hamburger" size="large" />
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
