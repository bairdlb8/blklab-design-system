import { useState, useMemo } from 'react'

//   const onSort = (a, b) => {
//     a = direction === 'descending' ? b[key] : a[key]
//     b = direction === 'descending' ? a[key] : b[key]
//     return a.localeCompare(b, 'en', { sensitivity: 'base' })
//   }

export const useSortableData = (items, config = { key: null, direction: null }) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key]?.toLowerCase() < b[sortConfig.key]?.toLowerCase()) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key]?.toLowerCase() > b[sortConfig.key]?.toLowerCase()) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const onSort = ({ key, direction = 'ascending' }) => {
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { data: sortedItems, onSort, sortConfig }
}
