import React from 'react'
import PropTypes from 'prop-types'
import './DataTable.scss'

function DataTable({ headers = [], data = [] }) {
  return (
    <section className="ds-data-table">
      <table>
        <tr>
          {headers.map((header) => (
            <th>{header.title}</th>
          ))}
        </tr>
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
      </table>
    </section>
  )
}

DataTable.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array
}

export default DataTable
