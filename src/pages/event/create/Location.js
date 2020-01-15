import React, { Component } from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormField/Input'
import Separator from 'components/FormField/Separator'

class Location extends Component {
  render () {
    return (
      <div>
        <Separator
          label="Location"
        />
        <Field
          name="location"
          label="Venue"
          placeholder="Venue"
          maxLength={255}
          margin="normal"
          component={Input}
        />
      </div>
    )
  }
}

export default Location
