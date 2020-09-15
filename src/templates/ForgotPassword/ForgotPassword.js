import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Layout from '../../layouts/Layout'

import '../Login/Login.scss'

import { GridContainer, Text, TextInput, Spacer, Heading, Button } from '../../base'

const ForgotPassword = ({ className = '' }) => {
  let ref = useRef()
  return (
    <Layout>
      <GridContainer gridSize={2} gridGap={16} className="ds-login">
        <section className="form display-flex justify-content-center pt-6">
          <form>
            <img src="/small-logo.png" className="logo" />
            <Spacer size={18} />
            <Heading level={1} className="mb-n color-primary">
              Forgot Password
            </Heading>
            <Spacer size={2} />
            <Text>
              Enter the email address associated with your account. We'll send you password reset
              instructions.
            </Text>

            <Spacer size={5} />

            <TextInput
              type="email"
              icon="email-outline"
              label="Username"
              errorMessage="Please enter a valid email"
            />

            <Spacer size={5} />

            <Button icon="arrow-forward-outline">Sign In</Button>

            <Spacer size={8} />

            <div>
              <a href="#">Create and Account</a> | <a href="#">Forgot your password?</a>
            </div>
          </form>
        </section>

        <section className="image">
          <img src="/flavor-1.png" />
        </section>
      </GridContainer>
    </Layout>
  )
}

ForgotPassword.propTypes = {}

export default ForgotPassword
