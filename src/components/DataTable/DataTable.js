import React from 'react'
import PropTypes from 'prop-types'
import './DataTable.scss'

function DataTable({ headers = [], data = [] }) {
  return (
    <section className="ds-data-table">
      <table>
        <thead className="mb-lg">
          <tr>
            {headers.map((header) => (
              <th role="columnheader">{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row) => {
              return (
                <tr>
                  {headers.map((key) => {
                    return <td>{row[key.key]}</td>
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </section>
  )
}

DataTable.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array
}

export default DataTable
