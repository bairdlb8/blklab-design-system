import { useState, useMemo } from 'react'
/*
  config options:
  searchFields: [],
  searchString: ''
*/
export const useFilter = (items, config = {}) => {
  const [filterConfig, setFilterConfig] = useState(config)

  const data = useMemo(() => {
    if (filterConfig.searchString) {
      return items.filter((row) => {
        let found = false
        filterConfig.searchFields?.forEach((f) => {
          if (!found) {
            let localFound = row[f].toLowerCase().includes(filterConfig.searchString.toLowerCase())
            found = localFound ? true : found
          }
        })
        return found
      })
    }
    return items
  }, [items, filterConfig])

  const onFilter = (currentString) => {
    setFilterConfig({ ...filterConfig, searchString: currentString })
  }

  return [data, onFilter, filterConfig]
}
