import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import { resetPassword } from 'actions/auth/resetPasswordAction'
import validate from './validate'
import {
  okText,
  cancelText
} from './variables'

class Form extends Component {
  onSubmit = async (values) => {
    const {
      error,
      dispatch,
      email
    } = this.props
    if (!error) {
      if (values && email) {
        values.account = email
        await dispatch(resetPassword(values))
      }
    }
  }

  render () {
    const {
      handleSubmit,
      loading,
      submitting,
      invalid,
      meta,
      errorMessage
    } = this.props

    return (
      <FormContainer
        errorMessage={errorMessage}
        successMessage={meta.message}
        disabled={invalid || loading || submitting}
        okText={okText}
        cancelText={cancelText}
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field
          name="password"
          label="New Password"
          placeholder="New Password"
          maxLength={30}
          margin="normal"
          type="password"
          component={Input}
        />
        <Field
          name="confirmPassword"
          label="Confirm New Password"
          placeholder="Confirm New Password"
          maxLength={30}
          margin="normal"
          type="password"
          component={Input}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.resetPasswordStore.loading,
  errorMessage: state.resetPasswordStore.errorMessage,
  meta: state.resetPasswordStore.meta
})

export default reduxForm({
  form: 'RegisterEmail',
  validate
})(connect(mapStateToProps)(Form))
