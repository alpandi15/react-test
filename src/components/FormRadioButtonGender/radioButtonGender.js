import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const radioButtonGender = ({
  classes,
  input,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  const [radioValue, setValue] = React.useState('0')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <FormControl className={classes.textField} error={error && touched}>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={radioValue}
          onChange={handleChange}
          {...input}
          {...other}
        >
          <FormControlLabel
            value="0"
            control={<Radio color="primary" />}
            label="Female"
          />
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="Male"

          />
          {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

radioButtonGender.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default radioButtonGender
