import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import {
  TimePicker
} from '@material-ui/pickers'
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

const Clock = ({
  label = ' ',
  input,
  itemLeft,
  format = 'HH:mm',
  meta: {
    touched,
    error
  }
}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <FormControl error={error && touched} variant="standard" fullWidth>
        <CardContainerRow
          xsItemLeft={1}
          xsItemCenter={12}
          itemLeft={itemLeft}
          itemCenter={(
            <TimePicker
              ampm={false}
              value={input.value ? input.value : null}
              className={classes.calendar}
              label={label}
              format={format}
              onChange={(date) => {
                input.onChange(date)
              }}
            />
          )}
        />

        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  )
}

Clock.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  format: PropTypes.string,
  meta: PropTypes.object.isRequired
}

export default Clock
