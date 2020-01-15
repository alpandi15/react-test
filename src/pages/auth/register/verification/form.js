import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Router from 'next/router'
import { onRegisterVerification } from 'actions/auth/registerVerificationAction'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import validate from './validate'

const upper = value => value && value.toUpperCase()

class Forms extends PureComponent {
  state = {
    errorMessage: null,
    successMessage: null
  }

  onSubmit = async (values) => {
    const {
      verificationEmail,
      onRegisterVerification,
      error,
      success
    } = this.props
    if (verificationEmail && verificationEmail.account) {
      const data = {
        account: verificationEmail.account,
        typeCode: '1', // 0: forgot, 1: registration
        typeAccount: '1', // 0: phone, 1: email
        code: values.code
      }
      onRegisterVerification(data)
      this.setState({ successMessage: success.message })
    } else {
      this.setState({ errorMessage: error })
      Router.push('/auth/register')
    }
  }

  render () {
    const {
      invalid,
      loading,
      submitting,
      handleSubmit
    } = this.props
    const { errorMessage, successMessage } = this.state

    return (
      <FormContainer
        errorMessage={errorMessage}
        successMessage={successMessage}
        disabled={invalid || loading || submitting}
        okText="Verification"
        cancelText="Cancel"
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field
          name="code"
          label="Kode OTP"
          placeholder="####"
          margin="normal"
          component={Input}
          normalize={upper}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = state => ({
  verificationEmail: state.verificationStore.data,
  error: state.verificationStore.errorMessage,
  success: state.registerVerificationStore.data
})
const mapDispatchToProps = dispatch => ({
  onRegisterVerification: data => dispatch(onRegisterVerification(data))
})

export default reduxForm({
  form: 'RegisterVerificationEmail',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Forms))
