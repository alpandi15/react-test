import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import { useRouter } from 'next/router'
import Form from './form'
import SocialMedia from './socialMedia'

const styles = () => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const Login = ({ classes }) => {
  const router = useRouter()
  return (
    <div className={classes.container}>
      <Form />
      <SocialMedia router={router} />
    </div>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.userStore.user
})

const LoginStyle = withStyles(styles)(Login)

export default connect(mapStateToProps)(LoginStyle)
