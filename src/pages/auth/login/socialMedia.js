import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import Facebook from '@ant-design/icons/FacebookFilled'
import Google from '@ant-design/icons/Google'
import { withStyles } from '@material-ui/styles'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import color from 'theme/color'
import { connect } from 'react-redux'
import {
  loginSocial
} from 'actions/auth/loginAction'
import { Button } from '@material-ui/core'

const styles = () => {
  return ({
    containerRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerColumn: {
      textAlign: 'center'
    },
    button: {
      width: 250,
      textAlign: 'left',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 10,
      marginBottom: 10
    },
    buttonFacebook: {
      color: color.facebook,
      width: '100%',
      height: '36px',
      textAlign: 'center',
      borderRadius: 20,
      border: 0,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
      backgroundColor: color.white,
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      padding: '6px 16px',
      fontSize: '0.875rem',
      minWidth: '64px',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif,Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: '500',
      lineHeight: '1.75',
      textTransform: 'uppercase'
    },
    socialMediaText: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    buttonBox: {
      marginTop: '0px',
      marginLeft: '0px',
      marginBottom: '0px'
    }
  })
}

class SocialMedia extends PureComponent {
  onSubmit = async (token, driver) => {
    const { dispatch, router } = this.props
    dispatch(loginSocial({
      token,
      driver
    }, router.query.path))
  }

  render () {
    const { loading, classes } = this.props

    const responseGoogle = (response) => {
      if (response && response.accessToken) {
        this.onSubmit(response.accessToken, 'google')
      }
    }

    const responseFacebook = (response) => {
      if (response && response.accessToken) {
        this.onSubmit(response.accessToken, 'facebook')
      }
    }

    return (
      <div className={classes.containerColumn}>
        <p className={classes.socialMediaText}>Or login with</p>
        <div className={classes.containerRow}>
          <Box my={1} ml={2} className={classes.buttonBox}>
            <FacebookLogin
              appId="576173566556827"
              autoLoad={false}
              fields="name,email,picture"
              callback={response => responseFacebook(response)}
              cssClass={classes.buttonFacebook}
              textButton="Facebook"
              icon={(<Facebook style={{ color: color.facebook, marginRight: 12 }} />)}
              disabled={loading}
            />
            {/* <Button variant="contained" className={classes.buttonFacebook}>
              <Facebook style={{ color: color.facebook, marginRight: 12 }} />
              Facebook
            </Button> */}
          </Box>
          <Box my={1} ml={2}>
            <GoogleLogin
              clientId="226000239117-a11e2v6lll01kb1r756cm7hpj1pid55t.apps.googleusercontent.com"
              icon={false}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className={classes.buttonFacebook}
              style={{
                color: color.facebook,
                width: '100%',
                height: '36px',
                textAlign: 'center',
                borderRadius: 20,
                border: 0,
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
                backgroundColor: color.white,
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                padding: '6px 16px',
                fontSize: '0.875rem',
                minWidth: '64px',
                boxSizing: 'border-box',
                fontFamily: 'sans-serif,Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                fontWeight: '500',
                lineHeight: '1.75',
                textTransform: 'uppercase'
              }}
              cookiePolicy="single_host_origin"
              disabled={loading}
              render={renderProps => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={classes.buttonFacebook}
                  style={{
                    color: color.google
                  }}
                >
                  <Google style={{ color: color.google, marginRight: 12 }} />
                  Google
                </Button>
              )}
            />
          </Box>
        </div>
      </div>
    )
  }
}

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  loading: state.loginStore.loading
})

export default connect(mapStateToProps)(withStyles(styles)(SocialMedia))
