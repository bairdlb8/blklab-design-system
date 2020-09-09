import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../../layouts/Layout'

import './Login.scss'
import TextInput from '../../basics/TextInput'
import Container from '../../containers/Container'
import Spacer from '../../basics/Spacer'
import Heading from '../../basics/Heading'
import Button from '../../basics/Button/Button'
import Header from '../../features/Header'

const Login = ({ className = '' }) => {
  return (
    <Layout>
      <Header></Header>
      <Container narrow={true} className="py-10">
        <Heading level={1} className="mb-n">
          Login
        </Heading>
        <p>This is some text about logging in</p>
        <TextInput type="email" label="Username" errorMessage="Please enter a valid email" />
        <Spacer size={4} />
        <TextInput
          type="password"
          label="Password"
          helpText="Password needs to be long"
          errorMessage="Your password is incorrect"
          required={true}
        />
        <Spacer size={2} />
        <div>
          <a href="#">Create and Account</a> | <a href="#">Forgot your password?</a>
        </div>
        <Spacer size={2} />
        <Button icon="chevron-right">Login</Button>
      </Container>
    </Layout>
  )
}

Login.propTypes = {}

export default Login
