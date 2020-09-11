import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './DataTable.scss'

import Checkbox from '../../basics/Checkbox'
import Icon from '../../basics/Icon'

function DataTable({
  headers = [],
  data = [],
  multiSelect = false,
  onSort = () => {},
  sortConfig = { key: null, direction: null },
  onSelect = () => {},
  emptyMessage = 'There are no items here'
}) {
  let [state, setState] = useState({
    checked: [],
    allChecked: false
  })

  const checkAll = () => {
    const all = !state.allChecked
    const d = all ? data : []
    onSelect(d)
    setState({
      ...state,
      checked: d,
      allChecked: all
    })
  }

  const selectRow = (row) => {
    let i = state.checked.findIndex((r) => r == row)
    let newChecked = [...state.checked]
    if (i >= 0) {
      newChecked = newChecked.filter((r) => {
        return r != row
      })
    } else {
      newChecked.push(row)
    }
    onSelect(newChecked)
    setState({
      ...state,
      checked: newChecked,
      allChecked: false
    })
  }

  let _headers = Object.entries(headers)
  let dirMap = {
    ascending: 'arrow-up',
    descending: 'arrow-down'
  }
  return (
    <section className="ds-data-table">
      <table>
        <thead className="mb-lg">
          <tr>
            {multiSelect && (
              <th>
                <Checkbox onChange={checkAll} />
              </th>
            )}
            {_headers.map(([key, header], idx) => (
              <th
                key={`th-${key}`}
                className={`${idx > 0 ? 'md-display-none' : null}`}
                role="columnheader"
              >
                {header.title}
                {header.sortDirections && (
                  <span className="ds_sort__icons ml-xxs">
                    {header.sortDirections.map((dir) => {
                      return (
                        <Icon
                          className={`cursor-pointer ${
                            sortConfig.key == key && sortConfig.direction == dir ? 'active' : ''
                          } `}
                          key={`${key}-${dir}`}
                          icon={dirMap[dir]}
                          onClick={(ev) =>
                            onSort({
                              key,
                              direction: dir
                            })
                          }
                        />
                      )
                    })}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={_headers.length + 1} className="text-align-center">
                {emptyMessage}
              </td>
            </tr>
          )}
          {data.length > 0 &&
            data.map((row, idx) => {
              return (
                <tr key={`tr-${idx}`}>
                  {multiSelect && (
                    <td>
                      <Checkbox
                        onChange={() => selectRow(row)}
                        checked={state.allChecked ? true : null}
                      />
                    </td>
                  )}
                  {_headers.map(([key, column], i) => {
                    return (
                      <td
                        key={`td-${key}-${idx}`}
                        className={`${i > 0 ? 'md-display-none' : null}`}
                      >
                        {column.render ? column.render(row[key]) : row[key]}
                      </td>
                    )
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
  headers: PropTypes.object,
  data: PropTypes.array,
  multiSelect: PropTypes.bool
}

export default DataTable

export const Filters = () => {}

export const Search = () => {}
