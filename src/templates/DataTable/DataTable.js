import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSortableData } from '../../hooks/useSortableData'
import { usePagination } from '../../hooks/usePagination'
import { useFilter } from '../../hooks/useFilter'

import './DataTable.scss'

import Layout from '../../layouts/Layout'
import TwoUp from '../../layouts/TwoUp'

import Container from '../../containers/Container'

import Header from '../../features/Header'

import Heading from '../../basics/Heading'
import Divider from '../../basics/Divider'
import Spacer from '../../basics/Spacer'
import Button from '../../basics/Button/Button'
import DateElement from '../../basics/Date'
import TextInput from '../../basics/TextInput'

import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

import { GeneratePeople } from '../../../mocks/data'
import Icon from '../../basics/Icon'

//TODO: Debounce input

const baseData = GeneratePeople()

// const headers = {
//   business: {
//     title: 'Business',
//     sortDirections: ['ascending', 'descending']
//   },
//   name: { title: 'Name', sortDirections: ['ascending', 'descending'] },
//   type: { title: 'Type' },
//   date: { title: 'Date', render: (data) => <DateElement dateString={data} /> },
//   action: {
//     title: '',
//     render: () => (
//       <>
//         <Icon icon="edit-outline" className="mr-2" /> <Icon icon="trash-outline" />
//       </>
//     )
//   }
// }

const headers = {
  firstName: {
    title: 'First Name',
    sortDirections: ['ascending', 'descending']
  },
  lastName: {
    title: 'Last Name',
    sortDirections: ['ascending', 'descending']
  },
  email: { title: 'Email' },
  action: {
    title: '',
    render: () => (
      <>
        <Icon icon="edit-outline" className="mr-2" /> <Icon icon="trash-outline" />
      </>
    )
  }
}

let timer

const DataTableExample = ({ className = '' }) => {
  let [state, setState] = useState({
    selectedItems: []
  })
  let { data, onSort, sortConfig } = useSortableData(baseData)
  let [filteredData, onFilter, filterConfig] = useFilter(data, {
    searchFields: ['firstName', 'lastName']
  })
  let [pagedData, onPage, pageConfig] = usePagination(filteredData)

  const handleSelect = (rows) => {
    setState({
      ...state,
      selectedItems: rows
    })
  }
  const doAction = () => console.log(state.selectedItems)

  const handleFilter = (ev) => {
    //clearTimeout(timer)
    //timer = setTimeout(() => {
    onFilter(ev.currentTarget.value)
    //}, 300)
  }

  return (
    <Layout>
      <Header condensed={true} navItems={[{ title: 'Dashboard' }, { title: 'Report' }]} />
      <Spacer size={8} />
      <Container>
        <Heading>Data Table</Heading>

        <TextInput
          fullWidth={true}
          onChange={handleFilter}
          placeholder="Search"
          icon="search"
          clear={true}
        />
        <DataTable
          multiSelect={true}
          headers={headers}
          data={pagedData}
          onSort={onSort}
          sortConfig={sortConfig}
          onSelect={handleSelect}
        ></DataTable>
        <Spacer size={4} />
        <TwoUp>
          <div>
            {state.selectedItems.length > 0 && (
              <>
                <Button onClick={doAction}>Do Something</Button> <Spacer size={4} />
              </>
            )}
          </div>
          <div>
            <Pagination
              onPage={onPage}
              currentPage={pageConfig.currentPage}
              pageSize={pageConfig.pageSize}
              totalPages={pageConfig.totalPages}
            />
          </div>
        </TwoUp>
      </Container>

      <Spacer size={8} />
    </Layout>
  )
}

DataTableExample.propTypes = {}

export default DataTableExample
