import React from 'react'
import PropTypes from 'prop-types'

import './Dashboard.scss'

import { Layout, Header, Heading, DataTable, Container, GridContainer } from '../../base'

const Dashboard = ({ className = '' }) => {
  return (
    <Layout>
      <Container className="pt-10">
        <Heading level={1}>Dashboard</Heading>
        <GridContainer></GridContainer>
      </Container>
    </Layout>
  )
}

Dashboard.propTypes = {}

export default Dashboard
