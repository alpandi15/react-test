import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'

import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const Input = ({
  checked,
  onChange,
  value,
  input,
  color,
  disabled,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  return (
    <FormControl error={error && touched} style={{ verticalAlign: 'middle' }}>
      <Switch
        checked={checked}
        onChange={onChange}
        value={value}
        color={color}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        error={error && touched}
        disabled={disabled}
        {...input}
        {...other}
      />
      {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
    </FormControl>
  )
}

Input.propTypes = {
  // value: PropTypes.bool.isRequired,
  checked: PropTypes.bool,
  meta: PropTypes.object.isRequired,
  color: PropTypes.string
}

Input.defaultProps = {
  color: 'primary',
  checked: false
}

export default Input
