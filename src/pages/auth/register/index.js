import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import CustomHelmet from 'components/CustomHelmet'
import BottomNavigation from 'components/BottomNavigation'
import Container from './Container'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
})

class Register extends React.Component {
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

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

Register.defaultProps = {
  title: 'Register'
}

export default withStyles(styles)(Register)
