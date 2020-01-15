import React, { Component } from 'react'
import { Field } from 'redux-form'
import Checkbox from 'components/FormField/Checkbox'
import Separator from 'components/FormField/Separator'

class Refund extends Component {
  render () {
    return (
      <div>
        <Separator
          label="Refund Policy"
        />
        <Field
          name="isRefundable"
          label="Refund Policy"
          component={Checkbox}
        />
      </div>
    )
  }
}

export default Refund
