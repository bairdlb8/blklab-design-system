import React from 'react'
import PropTypes from 'prop-types'

import './App.scss'

import Layout from '../../layouts/Layout'
import SingleWithSidebar from '../../layouts/SingleWithSidebar'

import Container from '../../containers/Container'

import Header from '../../features/Header'
import DataTable from '../../components/DataTable'

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Type', key: 'type' },
  { title: 'Date', key: 'date' }
]

const data = [
  {
    amount: 901.36,
    date: '2012-02-02T06:00:00.000Z',
    business: 'Hermiston, Wolf and Williamson',
    name: 'Investment Account 5999',
    type: 'withdrawal',
    account: '15058325'
  },
  {
    amount: 901.36,
    date: '2012-02-02T06:00:00.000Z',
    business: 'Hermiston, Wolf and Williamson',
    name: 'Investment Account 5999',
    type: 'withdrawal',
    account: '15058325'
  },
  {
    amount: 901.36,
    date: '2012-02-02T06:00:00.000Z',
    business: 'Hermiston, Wolf and Williamson',
    name: 'Investment Account 5999',
    type: 'withdrawal',
    account: '15058325'
  }
]

const App = ({ className = '' }) => {
  return (
    <Layout>
      <Header condensed={true} navItems={[{ title: 'Dashboard' }, { title: 'Report' }]} />

      <SingleWithSidebar>
        <DataTable headers={headers} data={data}></DataTable>
        <div>Hi</div>
      </SingleWithSidebar>
    </Layout>
  )
}

App.propTypes = {}

export default App
