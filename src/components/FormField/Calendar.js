import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import {
  DatePicker
} from '@material-ui/pickers'
import moment from 'moment'
import CardContainerRow from 'components/CardContainerRow'
import color from 'theme/color'

const useStyles = makeStyles({
  container: {
    height: 'auto',
    width: '100%'
  },
  calendar: {
    width: '100%'
  },
  textField: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    backgroundColor: color.white
  },
  input: {
    fontSize: props => props.fontSize,
    fontWeight: props => props.fontWeight,
    cssUnderline: {
      '&:before': {
        borderBottomColor: color.primaryColor
      }
    }
  }
})

const Calendar = ({
  label,
  input,
  itemLeft,
  autoFocus,
  disabled,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  const classes = useStyles()
  if (input && !input.value) {
    input.value = moment().format('YYYY-MM-DD')
  }

  return (
    <div className={classes.container}>
      <FormControl error={error && touched} variant="standard" fullWidth>
        <CardContainerRow
          xsItemLeft={1}
          xsItemCenter={12}
          itemLeft={itemLeft}
          itemCenter={(
            <DatePicker
              {...input}
              {...other}
              className={classes.calendar}
              label={label}
              format="YYYY-MM-DD"
              value={input.value ? input.value : null}
              onChange={(date) => {
                const formatDate = moment(date).isValid() ? moment(date).format('YYYY-MM-DD') : ''
                input.onChange(formatDate)
              }}
            />
          )}
        />

        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  )
}

Calendar.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  meta: PropTypes.object.isRequired
}

export default Calendar
