import React, { Component } from 'react'
import { Field } from 'redux-form'
import Select from 'components/FormField/Select'
import Separator from 'components/FormField/Separator'

class Category extends Component {
  render () {
    return (
      <div>
        <Separator
          label="Category"
        />
        <Field
          name="categoryId"
          label="Category"
          placeholder="Select Category"
          maxLength={255}
          component={Select}
          list={[
            {
              label: 'Fashion',
              value: 1
            }
          ]}
        />
      </div>
    )
  }
}

export default Category
