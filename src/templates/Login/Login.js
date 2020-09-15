import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './Login.scss'
import { GridContainer, TextInput, Spacer, Heading, Button, Layout, Snackbar } from '../../base'

const Login = ({ className = '' }) => {
  let ref = useRef()
  return (
    <Layout>
      <GridContainer gridSize={2} gridGap={16} className="ds-login">
        <section className="form display-flex justify-content-center pt-6">
          <form>
            <img src="/small-logo.png" className="logo" />
            <Spacer size={18} />
            <Heading level={1} className="mb-n color-primary">
              Welcome. Please Sign In
            </Heading>

            <Spacer size={5} />

            <TextInput
              type="email"
              icon="email-outline"
              label="Username"
              errorMessage="Please enter a valid email"
            />

            <Spacer size={4} />

            <TextInput
              type="password"
              label="Password"
              errorMessage="Your password is incorrect"
              required={true}
              icon="lock-outline"
              ref={ref}
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

Login.propTypes = {}

export default Login
