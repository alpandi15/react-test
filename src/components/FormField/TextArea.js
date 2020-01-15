import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import CardContainerRow from 'components/CardContainerRow'
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
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    backgroundColor: color.white
  },
  input: {
    border: `1px solid ${color.grayButton}`,
    backgroundColor: color.white
  }
})

const TextArea = ({
  AriaLabel,
  label,
  input,
  placeholder,
  maxLength,
  autoFocus,
  disabled,
  itemLeft,
  margin,
  rows,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  const classes = useStyles()

  return (
    <div>
      <FormControl className={classes.textField} error={error && touched}>
        <CardContainerRow
          xsItemLeft={1}
          xsItemCenter={12}
          itemLeft={itemLeft}
          itemCenter={(
            <CssTextField
              error={error && touched}
              label={label}
              id={input.name}
              className={classes.textField}
              margin="dense"
              variant="filled"
              color="primary"
              multiline
              rows={1}
              rowsMax={10}
              {...input}
              {...other}
              style={{
                zIndex: 0,
                width: '100%'
              }}
              InputProps={{
                className: classes.input
              }}
            />
          )}
        />
        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  )
}

TextArea.propTypes = {
  AriaLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  rows: PropTypes.number,
  meta: PropTypes.object.isRequired
}

TextArea.defaultProps = {
  AriaLabel: 'empty-label',
  rows: 3
}


export default TextArea
