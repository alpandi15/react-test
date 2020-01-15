import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import color from 'theme/color'

const useStyles = makeStyles(() => ({
  text: {
    fontWeight: 'bold'
  },
  textField: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '0.5em',
    marginTop: '0.5em',
    paddingBottom: 0,
    fontWeight: 500,
    backgroundColor: color.white
  },
  input: {
    border: `1px solid ${color.grayButton}`,
    backgroundColor: color.white
  },
  placeholder: {
    fontSize: 10,
    fontWeight: 'bold',
    color: color.grayButton
  }
}))

const CustomizedSelects = ({
  placeholder,
  list,
  input,
  label,
  itemLeft,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  const classes = useStyles()

  return (
    <div>
      <FormControl
        className={classes.textField}
        error={error && touched}
        variant="standard"
      >
        <FormControlLabel
          control={(
            <Checkbox
              checked={Boolean(Number(input.value))}
              {...input}
              {...other}
              value={input.name}
              color="primary"
            />
          )}
          label={label}
        />
        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  )
}

CustomizedSelects.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

CustomizedSelects.defaultProps = {
  label: 'Select an option'
}

export default CustomizedSelects
