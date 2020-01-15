import React from 'react'
import { Field } from 'redux-form'
import { Grid, Typography } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import Input from 'components/FormField/Input'
import Checkbox from 'components/FormField/Checkbox'
import TextArea from 'components/FormField/TextArea'
import Separator from 'components/FormField/Separator'
import Upload from 'components/FormField/Upload'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  itemContainer: {
    padding: '0.5em 1em'
  }
})

const About = () => {
  const warningText = "Couldn't change to public organizer in future"
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Field
            name="image"
            label="Organizer Image"
            component={Upload}
          />
        </Grid>
        <Grid item xs={12} md={8} className={classes.itemContainer}>
          <Field
            name="name"
            label="Organizer Name"
            placeholder="Event Title"
            maxLength={255}
            margin="normal"
            component={Input}
          />
          <Field
            name="isPrivate"
            label="Private"
            component={Checkbox}
          />
          <Typography color="inherit" component="div">
            {warningText}
          </Typography>

        </Grid>
      </Grid>

      <Separator
        label="Description"
      />
      <Field
        name="description"
        label="Description"
        placeholder="Optional description"
        margin="normal"
        component={TextArea}
      />

      <Separator
        label="Website"
      />
      <Field
        name="website"
        label="Website"
        placeholder="Optional website link"
        maxLength={255}
        margin="normal"
        component={Input}
        itemLeft={(
          <LinkIcon />
        )}
      />
    </div>
  )
}

export default About
