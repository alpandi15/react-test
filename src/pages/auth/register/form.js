import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import { register } from 'actions/auth/registerAction'
import validate from './validate'

class Forms extends PureComponent {
  onSubmit = async (values) => {
    const {
      error,
      dispatch
    } = this.props
    if (!error) {
      await dispatch(register(values))
    }
  }

  render () {
    const {
      handleSubmit,
      loading,
      submitting,
      invalid,
      errorMessage,
      meta
    } = this.props

    return (
      <FormContainer
        errorMessage={errorMessage}
        successMessage={meta.message}
        disabled={invalid || loading || submitting}
        okText="Register"
        cancelText="Cancel"
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field
          name="email"
          label="Email"
          placeholder="Email"
          maxLength={60}
          margin="normal"
          component={Input}
        />

        <Field
          name="firstName"
          label="First Name"
          placeholder="First Name"
          maxLength={60}
          margin="normal"
          component={Input}
        />

        <Field
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          maxLength={60}
          margin="normal"
          component={Input}
        />
        <Field
          name="password"
          label="Password"
          placeholder="Password"
          maxLength={30}
          margin="normal"
          type="password"
          component={Input}
        />
        <Field
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          maxLength={30}
          margin="normal"
          type="password"
          component={Input}
        />
      </FormContainer>
    )
  }
}

Forms.propTypes = {
  errorMessage: PropTypes.string
}

const mapStateToProps = state => ({
  errorMessage: state.registerStore.errorMessage,
  meta: state.registerStore.meta
})

export default reduxForm({
  form: 'RegisterEmail',
  validate
})(connect(mapStateToProps)(Forms))
