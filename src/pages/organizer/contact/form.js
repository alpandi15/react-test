import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Input from 'components/FormField/Input'
// import inputFilledMultiline from 'components/FormField/inputFilledMultiline'
import FormContainer from 'components/Layout/FormContainer'
import { insert } from 'actions/auth/forgotPasswordAction'
import validate from './validate'
import {
  okText,
  cancelText,
  storeName,
  form
} from './variables'

class Form extends Component {
  onSubmit = async (values) => {
    const {
      error,
      dispatch
    } = this.props
    if (!error) {
      await dispatch(insert(values))
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
          name="account"
          disabled={false}
          label="Email"
          placeholder="Email"
          maxLength={60}
          margin="normal"
          component={Input}
        />
        <Field
          name="message"
          disabled={false}
          label="Message"
          placeholder="Message"
          maxLength={255}
          margin="normal"
          component={Input}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = state => ({
  loading: state[storeName].loading,
  errorMessage: state[storeName].errorMessage,
  meta: state[storeName].meta
})

export default reduxForm({
  form,
  validate
})(connect(mapStateToProps)(Form))
