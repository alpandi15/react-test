import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Form from './form'
import Header from './header'

class Login extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Form />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userStore.user
})

export default connect(mapStateToProps)(Login)
