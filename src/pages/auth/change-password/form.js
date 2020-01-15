import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import { insert } from 'actions/auth/changePasswordAction'
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
          name="oldPassword"
          label="Old Password"
          placeholder="Old Password"
          maxLength={30}
          margin="normal"
          type="password"
          component={Input}
        />
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
  loading: state[storeName].loading,
  errorMessage: state[storeName].errorMessage,
  meta: state[storeName].meta
})

export default reduxForm({
  form,
  validate
})(connect(mapStateToProps)(Form))
