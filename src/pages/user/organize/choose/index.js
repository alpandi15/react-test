import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withAuthSync } from 'components/Security/auth'
import Container from './Container'

class UserChooseOrganize extends Component {
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

UserChooseOrganize.propTypes = {
  query: PropTypes.object
}

UserChooseOrganize.defaultProps = {
  query: { tab: '0' }
}

export default withAuthSync(UserChooseOrganize)
