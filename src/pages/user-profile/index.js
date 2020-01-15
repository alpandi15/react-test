import React from 'react'
import BottomNavigation from 'components/BottomNavigation'
import { withAuthSync } from 'components/Security/auth'
import Container from './Container'

class Profile extends React.Component {
  render () {
    return (
      <div>
        <Container />
        <BottomNavigation value="/user-profile" />
      </div>
    )
  }
}

export default withAuthSync(Profile)
