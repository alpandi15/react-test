import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import FormContainer from 'components/Layout/FormContainer'
import { insert } from 'actions/organizer/createOrganizerAction'
import About from './About'
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
        <About />
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
