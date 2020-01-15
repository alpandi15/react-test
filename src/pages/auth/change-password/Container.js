import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import HeaderNavigation from 'components/HeaderNavigation'
import color from 'theme/color'
import Form from './form'
import {
  title,
  subtitle
} from './variables'

const styles = () => ({
  primaryColor: {
    color: color.primaryColor
  },
  darkTextColor: {
    color: color.darkTextColor
  }
})

class ForgotPasswordVerification extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <HeaderNavigation
          title={title}
          subtitle={subtitle}
          titleFontSize={18}
          classes={classes}
        />
        <Form />
      </div>
    )
  }
}


export default withStyles(styles)(ForgotPasswordVerification)
