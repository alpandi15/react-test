import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderNavigation from 'components/HeaderNavigation'
import Form from './form'
import {
  title
} from './variables'

class Container extends Component {
  componentDidMount () {
    const { email } = this.props
    console.log('componentDidMount', email)
  }

  render () {
    const { email } = this.props
    return (
      <div>
        <HeaderNavigation
          title={title}
          subtitle={(
            <div>
              {"We've send verification to "}
              <strong>{email}</strong>
            </div>
          )}
          titleFontSize={18}
        />
        <Form email={email} />
      </div>
    )
  }
}

Container.propTypes = {
  email: PropTypes.string.isRequired
}

export default Container
