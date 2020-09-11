import React from 'react'
import PropTypes from 'prop-types'

import './FormView.scss'
import Layout from '../../layouts/Layout'
import Container from '../../containers/Container'
import Heading from '../../basics/Heading'
import TextInput from '../../basics/TextInput'
import Header from '../../features/Header'
import Spacer from '../../basics/Spacer'
import Toggle from '../../basics/Toggle'
import Checkbox from '../../basics/Checkbox'
import Button from '../../basics/Button'
import RadioButton from '../../basics/RadioButton/RadioButton'

const FormView = ({ className = '' }) => {
  return (
    <Layout>
      <Header condensed={true} navItems={[{ title: 'Dashboard' }, { title: 'Report' }]} />
      <Spacer size={8} />
      <Container narrow={true} className="py-10">
        <Heading level={1}>Form View</Heading>
        <form>
          <TextInput
            label="Email"
            type="email"
            icon="email-outline"
            errorMessage="Please enter a valid email address."
          />
          <Spacer size={4} />
          <TextInput
            label="Required"
            required={true}
            type="text"
            icon="alert-triangle-outline"
            errorMessage="Please enter this field."
          />
          <Spacer size={4} />
          <Checkbox label="Select Something" />
          <Spacer size={4} />
          <RadioButton name="something" value="something" label="Something" className="mb-2" />
          <RadioButton name="something" value="something" label="Something 2" className="mb-2" />
          <RadioButton name="something" value="something" label="Something 3" className="mb-2" />
          <Spacer size={4} />
          <Button icon="arrow-forward-outline">Submit</Button>
        </form>
      </Container>
    </Layout>
  )
}

FormView.propTypes = {}

export default FormView
