import React from 'react'
import PropTypes from 'prop-types'

import './Pagination.scss'

const Pagination = ({
  className = '',
  pageSize = 10,
  currentPage = 1,
  totalPages = 0,
  onPage = () => {}
}) => {
  let pages = Array(totalPages).fill(1)
  if (totalPages > 1) {
    return (
      <div className={`ds-pagination display-flex ${className ? className : null}`}>
        <span className="ds-pagination__pages">
          {pages.map((page, idx) => {
            return (
              <span
                onClick={() => {
                  onPage(idx + 1)
                }}
                className={`ds-pagination__page-number px-sm py-xxs ${
                  idx + 1 == currentPage ? 'active' : null
                }`}
                key={`page-${idx}`}
              >
                {idx + 1}
              </span>
            )
          })}
        </span>
      </div>
    )
  }
  return <div></div>
}

Pagination.propTypes = {
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPage: PropTypes.func
}

export default Pagination
