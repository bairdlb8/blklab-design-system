import { useState, useMemo } from 'react'
export const usePagination = (items, config = { pageSize: 10, currentPage: 1, maxPages: 10 }) => {
  const [pageConfig, setPageConfig] = useState(config)
  if (!pageConfig.currentPage) {
    pageConfig.currentPage = 1
  }
  if (!pageConfig.pageSize) {
    pageConfig.pageSize = 10
  }
  const pages = useMemo(() => {
    const totalItems = items.length
    pageConfig.totalPages = Math.ceil(totalItems / pageConfig.pageSize)
    let offset = (pageConfig.currentPage - 1) * pageConfig.pageSize
    return items.slice(offset, offset + pageConfig.pageSize)
  }, [items, pageConfig])

  const onPage = (pageNumber) => {
    setPageConfig({ ...pageConfig, currentPage: pageNumber })
  }

  return [pages, onPage, pageConfig]
}
