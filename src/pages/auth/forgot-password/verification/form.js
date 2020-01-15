import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import { verification } from 'actions/auth/verificationAction'
import { TYPE_CODE_FORGOT } from 'constants'
import validate from './validate'
import {
  okText,
  cancelText
} from './variables'

class Form extends Component {
  onSubmit = async (values) => {
    const {
      email,
      error,
      dispatch
    } = this.props
    if (!error) {
      if (values) {
        values.typeCode = TYPE_CODE_FORGOT
        values.account = email
        await dispatch(verification(values))
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
          name="code"
          label="Code"
          placeholder="Code"
          maxLength={4}
          margin="normal"
          component={Input}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.verificationStore.loading,
  errorMessage: state.verificationStore.errorMessage,
  meta: state.verificationStore.meta
})

export default reduxForm({
  form: 'RegisterEmail',
  validate
})(connect(mapStateToProps)(Form))
