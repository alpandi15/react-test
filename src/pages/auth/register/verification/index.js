import React from 'react'
import { connect } from 'react-redux'
import ErrorPage from 'next/error'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Container from './Container'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
})

class RegisterVerification extends React.Component {
  static getInitialProps = async ({ query }) => {
    return { query }
  }

  render () {
    const { classes, email } = this.props
    if (!email || (!email && !email.length)) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <div className={classes.root}>
        <Container />
      </div>
    )
  }
}

RegisterVerification.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  email: state.verificationStore.data
})

export default connect(mapStateToProps)(withStyles(styles)(RegisterVerification))
