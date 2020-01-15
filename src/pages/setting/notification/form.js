import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { reduxForm, Field } from 'redux-form'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Switch from 'components/FormField/Switch'
import CardContainerRow from 'components/CardContainerRow'
import color from 'theme/color'

const styles = theme => ({
  root: {
    position: 'relative',
    // marginTop: '48px',
    marginTop: '18px',
    height: '12em',
    padding: '20px 0px',
    alignItems: 'center'
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  primaryColor: color.primaryColor,
  darkTextColor: {
    color: color.darkTextColor
  },
  tabs: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  title: {
    color: color.darkTextColor,
    fontWeight: 700
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color.darkTextColor,
    margin: 0
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 12
  },
  radius8: {
    borderRadius: 8
  },
  card: {
    backgroundColor: color.white,
    padding: 1,
    borderRadius: '12px'
    // boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  inputText: {
    padding: 8,
    alignItems: 'center',
    border: `1px solid ${color.grayButton}`,
    borderRadius: 10,
    margin: 2
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  textField: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    fontSize: 10
  },
  buttonPrimary: {
    width: '100%',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  button: {
    margin: theme.spacing(1)
  },
  m0: {
    margin: 0
  },
  pr6: {
    paddingRight: 6
  }
})

const data = [
  {
    title: 'Purchased tickets',
    subtitle: 'Know when payment are successful and tickets are delivered',
    value: true
  },
  {
    title: 'Reminders',
    subtitle: 'Allow set reminders for when events are about to start one day before',
    value: true
  },
  {
    title: 'Event Schedules',
    subtitle: 'Get notified when your events are cancelled and postposponed',
    value: true
  },
  {
    title: 'Group',
    subtitle: 'Get notified when your group create new events',
    value: false
  },
  {
    title: 'Join',
    subtitle: 'Get notified when your request are approved or declined',
    value: true
  },
  {
    title: 'Invite',
    subtitle: 'Get notified when you\'re invited to group or event',
    value: true
  },
  {
    title: 'Liked events',
    subtitle: 'Get notified when your favorite events are happening soon',
    value: false
  }
]
class FormSettingNotification extends Component {
  state = {
    checkedA: true
  }

  onAll = () => {
    const {
      checkedA
    } = this.state

    this.setState({
      checkedA: !checkedA
    })
    // onClick = { handleSubmit (this.onSubmit) }
  }

  handleChange = () => {
    const {
      checked
    } = this.state
    this.setState({ checked: !checked })
    // onClick = { handleSubmit (this.onSubmit) }
  }

  onSubmit = (values) => {
    console.log('values', values)
  }

  render () {
    const {
      handleSubmit
    } = this.props
    const {
      checkedA
    } = this.state
    const { classes } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className={classes.form} noValidate autoComplete="off">
        <Box mt={8}>
          <Box
            m={2}
          >
            <Box
              m={2}
            >
              <CardContainerRow
                justifyItemRight="flex-end"
                xsItemLeft={12}
                itemLeft={(
                  <Box fontSize={12}>
                    On
                  </Box>
                )}
                itemRight={(
                  <Field
                    name="on"
                    checked={checkedA}
                    onChange={this.onAll}
                    value={checkedA}
                    component={Switch}
                  />
                )}
              />
            </Box>
            <Divider variant="fullWidth" />
          </Box>
          {data.map((item, index) => {
            return (
              <Box
                m={2}
                key={index}
              >
                <Box
                  m={2}
                >
                  <CardContainerRow
                    justifyItemRight="flex-end"
                    xsItemLeft={12}
                    itemLeft={(
                      <Box>
                        {item.title && (
                          <Box fontSize={12}>
                            {item.title}
                          </Box>
                        )}
                        {item.subtitle && (
                          <Box fontSize={10}>
                            {item.subtitle}
                          </Box>
                        )}
                      </Box>
                    )}
                    itemRight={(
                      <Field
                        name="checked"
                        checked={item.value}
                        value={item.value}
                        onChange={this.handleChange}
                        component={Switch}
                      />
                    )}
                  />
                </Box>
                <Divider variant="fullWidth" />
              </Box>
            )
          })}
        </Box>
      </form>
    )
  }
}

export default withStyles(styles)(reduxForm({
  form: 'SettingNotification'
})(FormSettingNotification))
