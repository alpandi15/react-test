import React from 'react'
import { withAuthSync } from 'components/Security/auth'
import Container from './Container'

class UserCreateEvent extends React.Component {
  render () {
    return (
      <div>
        <Container />
      </div>
    )
  }
}

export default withAuthSync(UserCreateEvent)
