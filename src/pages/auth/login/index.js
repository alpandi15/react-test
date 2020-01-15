import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import CustomHelmet from 'components/CustomHelmet'
import BottomNavigation from 'components/BottomNavigation'
import Container from './Container'

const styles = () => ({
  root: {
    padding: 0
  }
})

class Login extends React.Component {
  render () {
    const { classes, title } = this.props
    return (
      <div className={classes.root}>
        <CustomHelmet
          title={title}
        />
        <Container />
        <BottomNavigation value="/user-profile" />
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

Login.defaultProps = {
  title: 'Login'
}

export default withStyles(styles)(Login)
