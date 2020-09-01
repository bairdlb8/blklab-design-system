import React from 'react'
import PropTypes from 'prop-types'

import './Homepage.scss'
import GridContainer from '../../containers/GridContainer/GridContainer'
import FlexContainer from '../../containers/FlexContainer/FlexContainer'
import Container from '../../containers/Container/Container'
import Layout from '../../layouts/Layout/Layout'
import Fpo from '../../basics/Fpo/Fpo'
import Tag from '../../basics/Tag/Tag'

const Homepage = ({ className = '' }) => {
  return (
    <Layout>
      <Container>
        <Fpo>Hero</Fpo>
        <GridContainer gridSize={2} gridGap={20}>
          <Fpo>About Block</Fpo>
          <Fpo>Another Block</Fpo>
        </GridContainer>
        <FlexContainer>
          <Tag>Test</Tag>
          <Tag>Other</Tag>
        </FlexContainer>
      </Container>
    </Layout>
  )
}

Homepage.propTypes = {}

export default Homepage
