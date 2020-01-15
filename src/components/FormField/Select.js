import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
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
        <InputLabel id="label">{label}</InputLabel>
        <Select
          value={input.value}
          error={error && touched}
          {...input}
          {...other}
        >
          {list.map((item, index) => {
            return (
              <MenuItem
                key={index}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            )
          })}
        </Select>
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
  label: 'Select an option',
  list: []
}

export default CustomizedSelects
