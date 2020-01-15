import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import moment from 'moment'
import FormContainer from 'components/Layout/FormContainer'
import { insert } from 'actions/event/createEventAction'
import About from './About'
import DateTime from './DateTime'
import Stage from './Stage'
import Category from './Category'
import validate from './validate'
import {
  okText,
  cancelText,
  storeName,
  form
} from './variables'
import Refund from './Refund'

class Form extends Component {
  onSubmit = async (values) => {
    const {
      error,
      dispatch,
      organizerId
    } = this.props
    if (!error) {
      const data = {
        ...values
      }
      if (values) {
        data.startTime = moment(values.startTime).format('HH:mm:ss')
        data.endTime = moment(values.endTime).format('HH:mm:ss')
      }
      await dispatch(insert(organizerId, data))
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
        <DateTime />
        <Category />
        <Refund />
        <Stage />
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
