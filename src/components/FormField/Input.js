import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  makeStyles
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CardContainerRow from 'components/CardContainerRow'

import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import color from 'theme/color'

const CssTextField = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: color.primaryColor
    },
    '& .MuiFilledInput-root': {
      '& fieldset': {
        borderColor: color.google,
        borderBottomColor: color.primaryColor

      },
      '&:hover fieldset': {
        borderColor: color.primaryColor,
        borderBottomColor: color.primaryColor

      },
      '&.Mui-focused fieldset': {
        borderColor: color.primaryColor,
        borderBottomColor: color.primaryColor
      }
    }
  }
})(TextField)


const useStyles = makeStyles({
  textField: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '0.5em',
    marginTop: '0.5em',
    paddingBottom: 0,
    fontWeight: 500
  },
  input: {
    border: `1px solid ${color.grayButton}`,
    backgroundColor: color.white
  }
})

const Input = ({
  label,
  input,
  iconEnd,
  addItemRight,
  itemLeft,
  positionIcon,
  placeholder,
  autoFocus,
  disabled,
  theme,
  margin,
  helperText,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  const styles = useStyles()

  return (
    <div>
      <FormControl className={styles.textField} error={error && touched} variant="standard">
        <CardContainerRow
          xsItemLeft={1}
          xsItemCenter={12}
          itemLeft={itemLeft}
          itemCenter={(
            <CssTextField
              error={error && touched}
              label={label}
              id={input.name}
              className={styles.textField}
              helperText={helperText}
              margin="dense"
              variant="filled"
              color="primary"
              {...input}
              {...other}
              style={{
                zIndex: 0,
                width: '100%'
              }}
              InputProps={{
                endAdornment: iconEnd
              }}
            />
          )}
        />
        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  positionIcon: PropTypes.string,
  meta: PropTypes.object.isRequired
}

export default Input
