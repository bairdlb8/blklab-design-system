import React from 'react'
import PropTypes from 'prop-types'

import './List.scss'
import ListItem from './ListItem'

const List = ({ className = '', items = [] }) => {
  return (
    <section className="ds-list">
      {items.map((item) => {
        return (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            key={item.id}
          />
        )
      })}
    </section>
  )
}

List.propTypes = {}

export default List
