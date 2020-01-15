import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTimeDiff } from 'utils/time'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { resendVerification } from 'actions/auth/resendVerificationAction'
import CountDown from 'components/CountDown'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import Form from './form'

const styles = () => ({
  root: {
    marginTop: '32px',
    padding: '10px 20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  container: {
    margin: 0
  },
  textField: {
    width: '100%'
  },
  inputText: {
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px'
  },
  buttonLogin: {
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
})

class RegisterVerification extends Component {
  state = {
    countdown: true,
    loading: false
  }

  onResend = async () => {
    const { verificationEmail, resendVerification } = this.props
    this.setState({ countdown: false })
    const data = {
      account: verificationEmail.account,
      typeCode: '1', // 0: forgot, 1: registration
      typeAccount: '1' // 0: phone, 1: email
    }
    await resendVerification(data)
  }

  handleCountdown = () => {
    this.setState({ countdown: true })
  }

  render () {
    const { countdown, loading } = this.state
    const { data, classes } = this.props

    return (
      <div>
        <HeaderBackNavigation
          headTitle="Verifikasi"
        />
        <Paper square elevation={0} className={classes.root}>
          <Typography component="div" variant="body1">
            <Form classes={classes} />
          </Typography>
          {!loading && !countdown ? (
            <CountDown
              onFinish={() => this.handleCountdown()}
              timeLabels={{
                m: 'Menit',
                s: 'Detik'
              }}
              timeToShow={['M', 'S']}
              until={getTimeDiff(data.now, data.expired)}
              size={14}
              justifyContent="center"
            />
          )
            : (
              <Box
                textAlign="center"
                justifyContent="center"
                onClick={() => this.onResend()}
              >
                <Typography variant="body1">
                  Kirim ulang
                </Typography>
              </Box>
            )
          }

        </Paper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  resendVerification: data => dispatch(resendVerification(data))
})

const mapStateToProps = state => ({
  verificationEmail: state.verificationStore.data,
  data: state.registerStore.data
})

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles)(RegisterVerification)))
