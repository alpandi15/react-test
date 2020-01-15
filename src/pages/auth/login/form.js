import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import User from '@ant-design/icons/User'
import Lock from '@ant-design/icons/Lock'

import { withRouter } from 'next/router'
import { login } from 'actions/auth/loginAction'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import color from 'theme/color'
import validate from './validate'

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${'/static/app/Login-mobilemdpi.png'})`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '50vh'
  },
  buttonSignUp: {
    color: color.secondaryText
  },
  inputText: {
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px'
  },
  linkText: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  link: {
    marginLeft: 5
  },
  marginLeft: {
    marginLeft: 'auto !important',
    marginTop: 0
  },
  marginRight: {
    marginRight: 'auto !important',
    marginTop: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  textField: {
    width: '100%',
    margin: '1em 0'
  },
  buttonLoginContainer: {
    width: 342,
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: '100%',
    width: '100%',
    paddingTop: '96.25%'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
})

const Forms = ({
  loading,
  submitting,
  invalid,
  handleSubmit,
  error,
  router,
  dispatch,
  meta,
  errorMessage
}) => {
  const classes = useStyles()
  const onSubmit = async (values) => {
    if (!error) {
      dispatch(login(values, router.query.path))
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer} />
      <FormContainer
        errorMessage={errorMessage}
        successMessage={meta.message}
      >
        <Field
          addItemRight={(<User style={{ color: color.primaryColor }} />)}
          name="email"
          label="Email"
          placeholder="Username / Email"
          maxLength={60}
          component={Input}
        />

        <Field
          addItemRight={(<Lock style={{ color: color.primaryColor }} />)}
          name="password"
          label="Password"
          placeholder="Password"
          maxLength={30}
          type="password"
          component={Input}
        />
        <div>
          <Button
            type="submit"
            disabled={invalid || loading || submitting}
            variant="contained"
            color="primary"
            className={classes.textField}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography style={{ color: color.white }}>
              Log in
            </Typography>
          </Button>
        </div>
        <div>
          <Button
            href="/auth/register"
            style={{ textTransform: 'none' }}
            className={classes.buttonSignUp}
          >
            <Typography
              style={{ fontWeight: 'bold' }}
            >
              Sign Up
            </Typography>
          </Button>
        </div>
        <div>
          <Button href="/auth/forgot-password" style={{ textTransform: 'none' }}>
            <Typography style={{ color: color.secondaryText }}>
              Forgot password?
            </Typography>
          </Button>
        </div>
      </FormContainer>
    </div>
  )
}

Forms.propTypes = {
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  router: PropTypes.object
}

const mapStateToProps = state => ({
  loading: state.loginStore.loading,
  errorMessage: state.loginStore.errorMessage,
  meta: state.loginStore.meta
})

export default reduxForm({
  form: 'LoginEmail',
  validate
})(connect(mapStateToProps)(withRouter(Forms)))
