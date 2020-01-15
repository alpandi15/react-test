import React from 'react'
import BottomNavigation from 'components/BottomNavigation'
import { withAuthSync } from 'components/Security/auth'

class UserEditEvent extends React.Component {
  render () {
    return (
      <div>
        <BottomNavigation value="/event/detail" />
      </div>
    )
  }
}

export default withAuthSync(UserEditEvent)
