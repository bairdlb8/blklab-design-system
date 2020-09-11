import React from 'react'

import Heading from '../../basics/Heading'
import Text from '../../basics/Text'

import './List.scss'

const ListItem = ({ title, subtitle, description, image }) => {
  return (
    <div className="ds-list-item">
      <Heading level="2">{title}</Heading>
      <Heading level="3">{subtitle}</Heading>
      <Text>{description}</Text>
    </div>
  )
}

export default ListItem
