import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import Router from 'next/router'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import HeaderNavigation from 'components/HeaderNavigation'
import { logout } from 'components/Security/auth'
import Form from './form'

const useStyles = () => ({
  root: {
    position: 'relative',
    height: '14em',
    padding: '50px 0px',
    alignItems: 'center'
  }
})

class Profile extends Component {
  asyncLogout = () => {
    logout()
  }

  render () {
    const {
      classes
    } = this.props

    return (
      <div>
        <HeaderNavigation
          router={() => Router.push({
            pathname: '/user-profile'
          })}
        />
        <Paper square elevation={0} className={classes.root}>
          <Box m={2}>
            <Typography color="primary" style={{ fontSize: 20, fontWeight: 'bold' }}>
              Edit Profile
            </Typography>
          </Box>
          <Box mx={2}>
            <Form />
          </Box>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.loginStore.data
})

export default connect(mapStateToProps)(withStyles(useStyles)(Profile))
