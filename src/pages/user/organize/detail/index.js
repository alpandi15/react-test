import React, { Component } from 'react'
import { withAuthSync } from 'components/Security/auth'
import Container from './Container'

class UserDetailOrganize extends Component {
  render () {
    return (
      <div>
        <Container />
      </div>
    )
  }
}

export default withAuthSync(UserDetailOrganize)
