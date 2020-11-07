import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './DataTable.scss'

import Checkbox from '../../basics/Checkbox'
import Icon from '../../basics/Icon'

function resolve(path, obj = self, separator = '.') {
  var properties = Array.isArray(path) ? path : path.split(separator)
  return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

function DataTable({
  headers = [],
  data = [],
  multiSelect = false,
  onSort = () => {},
  sortConfig = { key: null, direction: null },
  onSelect = () => {},
  emptyMessage = 'There are no items here',
  onRowClick,
  loading = false,
  loadingComponent = <div>Loading...</div>
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
    ascending: 'arrow-upward-outline',
    descending: 'arrow-downward-outline'
  }
  return (
    <section className="ds-data-table">
      <table>
        {(data.length > 0 || loading) && (
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
                  className={`cursor-pointer ${idx > 0 ? 'md-display-none' : ''} ${
                    header.sortDirections ? 'sortable' : ''
                  }`.trim()}
                  role="columnheader"
                  onClick={
                    header.sortDirections
                      ? (ev) => {
                          onSort({
                            key,
                            direction:
                              sortConfig.direction === 'acsending' ? 'descending' : 'ascending'
                          })
                        }
                      : null
                  }
                >
                  {header.title}
                  {header.sortDirections && (
                    <span className="ds_sort__icons ml-xxs">
                      {header.sortDirections.map((dir) => {
                        return (
                          sortConfig.key == key &&
                          sortConfig.direction == dir && (
                            <Icon
                              className={`cursor-pointer ${
                                sortConfig.key == key && sortConfig.direction == dir ? 'active' : ''
                              } `}
                              key={`${key}-${dir}`}
                              icon={dirMap[dir]}
                            />
                          )
                        )
                      })}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.length === 0 && !loading && (
            <tr>
              <td colSpan={_headers.length + 1} className="text-align-center">
                {emptyMessage}
              </td>
            </tr>
          )}
          {loading && (
            <tr>
              <td colSpan={_headers.length + 1} className="text-align-center">
                {loadingComponent}
              </td>
            </tr>
          )}
          {data.length > 0 &&
            !loading &&
            data.map((row, idx) => {
              return (
                <tr
                  key={`tr-${idx}`}
                  className={`${onRowClick ? 'cursor-pointer' : ''}`}
                  onClick={onRowClick ? () => onRowClick(row, idx) : null}
                >
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
                        {column.render ? column.render(row, idx) : resolve(key, row)}
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
