import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { reduxForm, Field } from 'redux-form'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CardContainerRow from 'components/CardContainerRow'
// icon
import Mail from '@ant-design/icons/Mail'
import Phone from '@ant-design/icons/Phone'
import CaretRight from '@ant-design/icons/CaretRight'

// component
import Button from '@material-ui/core/Button'
import Input from 'components/FormField/Input'
import Calendar from 'components/FormField/Calendar'

import CardHeader from '@material-ui/core/CardHeader'
import color from 'theme/color'
import UploadProfileImage from './uploadProfileImage'
import validate from './validate'

const style = theme => ({
  container: {
    padding: theme.spacing(2)
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatar: {
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  card: {
    backgroundColor: color.white,
    padding: 12,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  root: {
    position: 'relative',
    height: '14em',
    padding: '50px 0px',
    alignItems: 'center'
  },
  primaryColor: {
    color: color.primaryColor
  },
  logoutColor: {
    color: color.logout
  },
  whiteTextColor: {
    color: color.white
  },
  tabs: {
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  customBadge: {
    backgroundColor: color.primaryColor,
    color: color.white,
    padding: 0,
    alignItems: 'center',
    fontSize: '6px',
    maxHeight: '12px !important',
    minWidth: '12px !important',
    marginLeft: theme.spacing(0.62),
    marginRight: theme.spacing(0.7),
    marginTop: theme.spacing(0.8),
    justifyContent: 'center'
  },
  media: {
    borderRadius: '50%'
  },
  title: {
    color: color.darkTextColor,
    fontWeight: 700
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 12
  },
  radius14: {
    borderRadius: 14
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  buttonPrimary: {
    width: '100%',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  inputChangePassword: {
    padding: 8,
    display: 'inline',
    alignItems: 'center',
    border: 'none',
    background: color.white,
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px -3px rgba(0,0,0,0.14), 0px 7px 7px -2px rgba(0,0,0,0.1)',
    margin: 2
  },
  textField: {
    width: '100%',
    display: 'flex',
    fontFamily: 'Roboto',
    fontSize: 10
  }
})


class FormEditProfile extends Component {
  onSubmit = async (values) => {
    console.log('values', values)
  }

  render () {
    const {
      classes,
      handleSubmit
    } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className={classes.form} noValidate autoComplete="off">
        <Box my={1}>
          <CardHeader
            className={classes.column}
            style={{ alignItems: 'center', margin: 0 }}
            avatar={(
              <Field
                name="image"
                classes={classes}
                component={UploadProfileImage}
              />
            )}
          />
        </Box>
        <Box my={1} className={classes.column}>
          <Box mb={0.4}>
            <Typography
              color="secondary"
              style={{
                fontSize: 14,
                fontWeight: 500
              }}
            >
              Biodata
            </Typography>
          </Box>
          <Field
            name="firstName"
            label="First Name"
            placeholder="First Name"
            margin="normal"
            component={Input}
          />
        </Box>
        <Box my={1} className={classes.column}>
          <Field
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            margin="normal"
            component={Input}
          />
        </Box>

        <Box className={classes.column}>
          <Field
            name="birth"
            label="Birth Date"
            placeholder="Birth Date"
            maxLength={60}
            fontSize={12}
            margin="normal"
            maxDate={new Date()}
            component={Calendar}
          />
        </Box>

        <Box my={1} className={classes.column}>
          <Field
            name="address"
            label="Address"
            placeholder="Address"
            margin="normal"
            component={Input}
          />
        </Box>

        <Box mt={2.4} mb={1} className={classes.column}>
          <Box mb={0.4}>
            <Typography
              color="secondary"
              style={{
                fontSize: 14,
                fontWeight: 500
              }}
            >
              Contact
            </Typography>
          </Box>

          <Field
            name="phone"
            label="Phone"
            placeholder="Phone Number"
            margin="normal"
            positionIcon="start"
            type="number"
            maxLength={13}
            iconEnd={(
              <Box ml={0.5} mr={1}>
                <Phone
                  style={{
                    color: color.normalColor,
                    fontSize: 15,
                    fontWeight: 'bold'
                  }}
                />
              </Box>
            )}
            component={Input}
          />
        </Box>
        <Box my={1} className={classes.column}>
          <Field
            name="email"
            label="Email"
            placeholder="Email"
            margin="normal"
            positionIcon="start"
            iconEnd={(
              <Box ml={0.5} mr={1}>
                <Mail
                  style={{
                    color: color.normalColor,
                    fontSize: 15,
                    fontWeight: 'bold'
                  }}
                />
              </Box>
            )}
            component={Input}
          />
        </Box>

        <Box my={2.4} className={classes.column}>
          <Box mb={0.4}>
            <Typography
              color="secondary"
              style={{
                fontSize: 14,
                fontWeight: 500
              }}
            >
              Security
            </Typography>
          </Box>

          <Button
            className={classes.inputChangePassword}
            href="/auth/change-password"
          >
            <CardContainerRow
              itemJustifyContentRight="flex-end"
              itemLeft={(
                <Typography
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: color.normalColor,
                    textTransform: 'none'

                  }}
                >
                  Change Password
                </Typography>
              )}
              itemRight={(
                <Box mr={1}>
                  <CaretRight style={{ color: color.iconOff }} />
                </Box>
              )}
            />
          </Button>
        </Box>
        <Box my={2}>
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
              Save
            </Typography>
          </Button>
        </Box>
      </form>
    )
  }
}

export default (withStyles(style))(reduxForm({
  form: 'EditProfile',
  validate
})(FormEditProfile))
