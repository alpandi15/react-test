import React, { Component } from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormField/Input'
import TextArea from 'components/FormField/TextArea'
import Separator from 'components/FormField/Separator'
import Upload from 'components/FormField/Upload'

class About extends Component {
  render () {
    return (
      <div>
        <Field
          name="image"
          label="Event Image"
          component={Upload}
        />

        <Separator
          label="About Event"
        />
        <Field
          name="name"
          label="Event Title"
          placeholder="Event Title"
          maxLength={30}
          margin="normal"
          component={Input}
        />
        <Field
          name="description"
          label="Event Description"
          placeholder="Event Description"
          margin="normal"
          component={TextArea}
        />
      </div>
    )
  }
}

export default About
