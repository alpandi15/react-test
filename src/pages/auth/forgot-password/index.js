import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import {
  helmet
} from './variables'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
})

class ForgotPassword extends React.Component {
  render () {
    const {
      classes,
      title
    } = this.props
    return (
      <div className={classes.root}>
        <CustomHelmet
          title={title}
        />
        <Container />
      </div>
    )
  }
}

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

ForgotPassword.defaultProps = {
  title: helmet
}


export default withStyles(styles)(ForgotPassword)
