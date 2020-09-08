import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSortableData } from '../../hooks/useSortableData'
import { usePagination } from '../../hooks/usePagination'
import { useFilter } from '../../hooks/useFilter'

import './App.scss'

import Layout from '../../layouts/Layout'

import Container from '../../containers/Container'

import Header from '../../features/Header'

import Heading from '../../basics/Heading'
import Divider from '../../basics/Divider'
import Spacer from '../../basics/Spacer'
import Button from '../../basics/Button'
import DateElement from '../../basics/Date'
import TextInput from '../../basics/TextInput'

import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

import generate from '../../../mocks/data'

//TODO: Debounce input

const baseData = generate()

const headers = {
  business: {
    title: 'Business',
    sortDirections: ['ascending', 'descending']
  },
  name: { title: 'Name', sortDirections: ['ascending', 'descending'] },
  type: { title: 'Type' },
  date: { title: 'Date', render: (data) => <DateElement dateString={data} /> },
  action: { title: '', render: () => <Button hollow={true}>Action!</Button> }
}

let timer

const App = ({ className = '' }) => {
  let [state, setState] = useState({
    selectedItems: []
  })
  let { data, onSort, sortConfig } = useSortableData(baseData)
  let [filteredData, onFilter, filterConfig] = useFilter(data, {
    searchFields: ['business', 'name']
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

        <TextInput fullWidth={true} onChange={handleFilter} placeholder="Search" icon="search" />
        <DataTable
          multiSelect={true}
          headers={headers}
          data={pagedData}
          onSort={onSort}
          sortConfig={sortConfig}
          onSelect={handleSelect}
        ></DataTable>

        {state.selectedItems.length > 0 && (
          <>
            <Button onClick={doAction}>Do Something</Button> <Spacer size={4} />
          </>
        )}
        <Spacer size={4} />
        <Pagination
          onPage={onPage}
          currentPage={pageConfig.currentPage}
          pageSize={pageConfig.pageSize}
          totalPages={pageConfig.totalPages}
        />
      </Container>

      <Spacer size={8} />

      <Container>
        <Heading>Form</Heading>
        <form>
          <TextInput
            name="name"
            label="Name"
            helpText="Enter your first name"
            errorMessage="Please enter your name"
            error={true}
          />
        </form>
      </Container>

      <Spacer size={8} />
    </Layout>
  )
}

App.propTypes = {}

export default App
