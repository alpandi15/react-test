import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import SearchNavigation from 'components/SearchNavigation'
import color from 'theme/color'
import {
  storeName,
  form
} from './variables'

class Form extends Component {
  onSubmit = async (values) => {
    console.log('values', values)
  }

  render () {
    const {
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} noValidate autoComplete="off">
        <Field
          name="search"
          disabled={false}
          title="Location"
          placeholder="Search Location"
          colorTitle={color.primaryColor}
          fontSizeTitle={20}
          maxLength={60}
          onSubmit={handleSubmit(this.onSubmit)}
          component={SearchNavigation}
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  loading: state[storeName].loading,
  errorMessage: state[storeName].errorMessage,
  meta: state[storeName].meta
})

export default reduxForm({
  form
})(connect(mapStateToProps)(Form))
