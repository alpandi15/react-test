import React from 'react'
import PropTypes from 'prop-types'
import BottomNavigation from 'components/BottomNavigation'
import { withAuthSync } from 'components/Security/auth'
import Container from './Container'

class UserEventList extends React.Component {
  static getInitialProps = async ({ query }) => {
    return { query }
  }

  render () {
    const { query } = this.props
    return (
      <div>
        <Container query={query} />
        <BottomNavigation value="/user/event/list" />
      </div>
    )
  }
}


UserEventList.propTypes = {
  query: PropTypes.object
}

UserEventList.defaultProps = {
  query: { tab: '0' }
}

export default withAuthSync(UserEventList)
