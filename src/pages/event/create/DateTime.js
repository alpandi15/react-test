import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Grid } from '@material-ui/core'
import Calendar from 'components/FormField/Calendar'
import Clock from 'components/FormField/Clock'
import Separator from 'components/FormField/Separator'

class DateTime extends Component {
  render () {
    return (
      <div>
        <Separator
          label="Date and Time"
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Field
              name="startDate"
              label="Start"
              placeholder="Start"
              component={Calendar}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="startTime"
              label="Select Time"
              component={Clock}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Field
              name="endDate"
              label="End"
              placeholder="End"
              component={Calendar}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="endTime"
              label="Select Time"
              component={Clock}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DateTime
