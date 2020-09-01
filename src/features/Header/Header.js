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
      {!logo && !condensed && (
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.778 100">
            <path
              d="M41.419,48.371A3.656,3.656,0,0,0,40.373,51.3l-.018-.018a4.344,4.344,0,0,1-4.694,4.694l.018.018A3.678,3.678,0,1,0,39,59.312l.019.018a4.344,4.344,0,0,1,4.694-4.694l-.019-.018a3.671,3.671,0,1,0-2.272-6.247Z"
              fill="#394149"
            />
            <path
              d="M34.042,53.636l-.019-.018A3.631,3.631,0,0,0,38,49.644l.019.018a4.344,4.344,0,0,1,4.694-4.694l-.019-.018a3.678,3.678,0,1,0-3.318-3.318l-.018-.019a4.343,4.343,0,0,1-4.694,4.694l.018.019A3.631,3.631,0,0,0,30.705,50.3l-.018-.018a4.345,4.345,0,0,1-4.694,4.694l.018.018a3.678,3.678,0,1,0,3.318,3.318l.019.018A4.344,4.344,0,0,1,34.042,53.636Z"
              fill="#394149"
            />
            <path
              d="M27.34,51.629A3.652,3.652,0,0,0,28.385,48.7l.019.018A4.344,4.344,0,0,1,33.1,44.024l-.019-.018a3.677,3.677,0,1,0-3.318-3.318l-.018-.018a4.344,4.344,0,0,1-4.694,4.694l.018.018a3.671,3.671,0,1,0,2.273,6.247Z"
              fill="#394149"
            />
            <path d="M58.317,41.655h2.97V56.108h-2.97Z" fill="#394149" />
            <path
              d="M62.969,51.159a5.247,5.247,0,1,1,5.247,5.226A5.188,5.188,0,0,1,62.969,51.159Zm7.524,0A2.278,2.278,0,1,0,68.216,53.5,2.221,2.221,0,0,0,70.493,51.159Z"
              fill="#394149"
            />
            <path
              d="M85.3,46.209v9.4c0,3.326-2.594,4.732-5.227,4.732a5.062,5.062,0,0,1-4.692-2.4l2.534-1.465a2.262,2.262,0,0,0,2.257,1.247,1.973,1.973,0,0,0,2.237-2.118V54.7a3.516,3.516,0,0,1-2.891,1.287,5.031,5.031,0,0,1,0-10.057,3.516,3.516,0,0,1,2.891,1.287v-1.01ZM82.41,50.96a2.4,2.4,0,1,0-2.395,2.3A2.24,2.24,0,0,0,82.41,50.96Z"
              fill="#394149"
            />
            <path
              d="M86.982,51.159a5.247,5.247,0,1,1,5.247,5.226A5.188,5.188,0,0,1,86.982,51.159Zm7.524,0A2.278,2.278,0,1,0,92.229,53.5,2.221,2.221,0,0,0,94.506,51.159Z"
              fill="#394149"
            />
            <path
              d="M98.861,43.556a1.782,1.782,0,1,1,1.782,1.782A1.8,1.8,0,0,1,98.861,43.556Zm.3,2.653h2.971v9.9H99.157Z"
              fill="#394149"
            />
            <path
              d="M114.956,51.159a4.971,4.971,0,0,1-4.732,5.226,3.715,3.715,0,0,1-2.949-1.208v4.891h-2.97V46.209h2.97v.93a3.717,3.717,0,0,1,2.949-1.207A4.97,4.97,0,0,1,114.956,51.159Zm-2.97,0a2.356,2.356,0,1,0-2.355,2.415A2.26,2.26,0,0,0,111.986,51.159Z"
              fill="#394149"
            />
            <path
              d="M124.121,53.138c0,2.277-1.979,3.247-4.117,3.247a4.335,4.335,0,0,1-4.257-2.356l2.573-1.465A1.627,1.627,0,0,0,120,53.732c.712,0,1.069-.218,1.069-.613,0-1.09-4.871-.515-4.871-3.94,0-2.159,1.822-3.247,3.881-3.247a4.329,4.329,0,0,1,3.86,2.118l-2.534,1.366a1.437,1.437,0,0,0-1.326-.871c-.515,0-.832.2-.832.554C119.251,50.228,124.121,49.475,124.121,53.138Z"
              fill="#394149"
            />
            <path
              d="M134.97,46.209v9.9H132v-.931a3.382,3.382,0,0,1-2.83,1.208c-2,0-3.7-1.425-3.7-4.1V46.209h2.97v5.642a1.632,1.632,0,0,0,1.722,1.8c1.089,0,1.841-.633,1.841-2.039v-5.4Z"
              fill="#394149"
            />
            <path
              d="M152,50.03v6.078h-2.97V50.287c0-.99-.475-1.623-1.425-1.623-.99,0-1.545.693-1.545,1.861v5.583h-2.969V50.287c0-.99-.475-1.623-1.426-1.623-.99,0-1.544.693-1.544,1.861v5.583h-2.97v-9.9h2.97v.91a3.039,3.039,0,0,1,2.653-1.187,2.945,2.945,0,0,1,2.593,1.306,3.262,3.262,0,0,1,2.871-1.306C150.511,45.932,152,47.555,152,50.03Z"
              fill="#394149"
            />
            <circle cx="154.512" cy="43.944" r="2.204" fill="#394149" />
          </svg>
        </div>
      )}
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
