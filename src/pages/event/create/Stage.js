import React, { Component } from 'react'
import { Field } from 'redux-form'
import Separator from 'components/FormField/Separator'
import Upload from 'components/FormField/Upload'

class Stage extends Component {
  render () {
    return (
      <div>
        <Separator
          label="Stage Image"
        />
        <Field
          name="stageImage"
          label="Stage Image"
          component={Upload}
        />
      </div>
    )
  }
}

export default Stage
