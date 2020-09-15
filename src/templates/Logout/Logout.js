import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Layout from '../../layouts/Layout'

import '../Login/Login.scss'

import { GridContainer, Text, TextInput, Spacer, Heading, Button } from '../../base'

const Logout = ({ className = '' }) => {
  let ref = useRef()
  return (
    <Layout>
      <GridContainer gridSize={2} gridGap={16} className="ds-login">
        <section className="form display-flex justify-content-center pt-6">
          <form>
            <img src="/small-logo.png" className="logo" />
            <Spacer size={18} />
            <Heading level={1} className="mb-n color-primary">
              We'll see you later
            </Heading>
            <Spacer size={2} />
            <Text>You have successfully signed out.</Text>

            <Spacer size={5} />

            <Button icon="arrow-forward-outline">Sign In Again</Button>

            <Spacer size={8} />

            <div>
              Go to <a href="#">wsmamusic.org</a>
            </div>
          </form>
        </section>

        <section className="image">
          <img src="/flavor-2.png" />
        </section>
      </GridContainer>
    </Layout>
  )
}

Logout.propTypes = {}

export default Logout
