import React, { Component } from 'react'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import { title } from './variables'

class ContactOrganize extends Component {
  render () {
    return (
      <div>
        <CustomHelmet
          title={title}
        />
        <Container />
      </div>
    )
  }
}
export default ContactOrganize
