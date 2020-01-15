import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Router from 'next/router'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@ant-design/icons/Link'
import AddIcon from '@material-ui/icons/Add'
import TextArea from 'components/FormField/TextArea'
import Select from 'components/FormField/Select'
import Input from 'components/FormField/Input'
import FormContainer from 'components/Layout/FormContainer'
import Button from '@material-ui/core/Button'
import color from 'theme/color'

const Content = {
  item1: 'About Event',
  item2: 'Date and Time',
  item3: 'Location',
  item4: 'Category',
  item5: 'Ticket',
  item6: 'Refund Policy',
  item7: 'Stage Image',
  placeholder1: 'Event title',
  placeholder2: 'Event Description',
  placeholder3: 'Select Location',
  placeholder4: 'Select Category',
  placeholder5: 'Add Ticket',
  placeholder6: 'No refund',
  placeholder7: 'Stage Image',
  buttonAdd: 'Add Committee',
  buttonPublish: 'Publish'
}

const List = [
  { value: 'food' },
  { value: 'sport' }
]

class FormCreateOrganize extends Component {
  onSubmit = (values) => {
    console.log('values', values)
  }

  handleRoute = () => {
    Router.push({
      pathname: '/user/organize/list-add-member'
    })
  }

  render () {
    const {
      classes,
      handleSubmit,
      loading,
      submitting,
      invalid,
      errorMessage,
      meta
    } = this.props
    return (
      <FormContainer
        errorMessage={errorMessage}
        successMessage={meta.message}
        disabled={invalid || loading || submitting}
        okText="Publish"
        cancelText="Cancel"
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          label="Event Title"
          placeholder="Event Title"
          maxLength={60}
          component={Input}
          className={classes.input}
        />
        <Field
          name="category"
          label="category"
          list={List}
          placeholder="Select Category"
          component={Select}
        />
        <Box my={1} className={classes.column}>
          <Typography
            color="secondary"
            style={{
              fontSize: 14,
              fontWeight: 500
            }}
          >
            Description
          </Typography>
          <Paper
            elevation={0}
            className={classes.inputText}
          >
            <Field
              AriaLabel="description"
              name="description"
              label="description"
              placeholder={Content.placeholder1}
              margin="normal"
              rows={8}
              component={TextArea}
            />
          </Paper>
        </Box>

        <Box my={1} className={classes.column}>
          <Typography
            color="secondary"
            style={{
              fontSize: 14,
              fontWeight: 500
            }}
          >
            {Content.item1}
          </Typography>
          <Paper
            elevation={0}
            className={classes.inputText}
          >
            <Field
              name="Website"
              label="Website"
              placeholder={Content.placeholder2}
              margin="normal"
              positionIcon="start"
              addItemRight={(
                <Box mr={1}>
                  <Link style={{ color: color.iconOff }} />
                </Box>
              )}
              component={Input}
            />
          </Paper>
        </Box>
        <Box my={1} className={classes.column}>
          <Typography
            color="secondary"
            style={{
              fontSize: 14,
              fontWeight: 500
            }}
          >
            {Content.item2}
          </Typography>
          <Box my={1} className={classes.row}>
            <Box mx={1}>
              <Button
                component="label"
                color="default"
                style={{
                  backgroundColor: color.grayButton,
                  textTransform: 'none',
                  borderRadius: 10,
                  fontSize: 12,
                  padding: '9.5px 19.3px'
                }}
                onClick={() => this.handleRoute()}
              >
                <AddIcon style={{ fontSize: 15 }} />
                {Content.buttonAdd}
              </Button>
            </Box>
          </Box>
        </Box>

        <div bottom={0}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonPrimary}
            onClick={handleSubmit(this.onSubmit)}
            style={{
              backgroundColor: color.primaryColor,
              color: color.white,
              textTransform: 'none'
            }}
          >
            <Typography
              style={{
                color: color.white,
                fontWeight: 'bold',
                fontSize: 12
              }}
            >
              {Content.buttonPublish}
            </Typography>
          </Button>
        </div>
      </FormContainer>
    )
  }
}

export default reduxForm({
  form: 'CreateOrganize'
})(FormCreateOrganize)
