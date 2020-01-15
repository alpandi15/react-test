import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Router from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
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
    const { email, classes } = this.props

    return (
      <div>
        <HeaderNavigation
          title={title}
          subtitle={subtitle}
          titleFontSize={18}
          classes={classes}
          iconLeft={(
            <IconButton aria-label="open drawer" onClick={() => Router.back()} className={classes.darkTextColor}>
              <ChevronLeft />
            </IconButton>
          )}
        />
        <Form email={email} />
      </div>
    )
  }
}


export default withStyles(styles)(ForgotPasswordVerification)
