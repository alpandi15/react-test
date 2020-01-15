import React from 'react'
import PropTypes from 'prop-types'
import { withAuthSync } from 'components/Security/auth'
import Container from './Container'

class UserEventTicket extends React.Component {
  static getInitialProps = async ({ query }) => {
    return { query }
  }

  render () {
    const { query } = this.props
    return (
      <div>
        <Container query={query} />
      </div>
    )
  }
}


UserEventTicket.propTypes = {
  query: PropTypes.object
}

UserEventTicket.defaultProps = {
  query: { tab: '0' }
}

export default withAuthSync(UserEventTicket)
