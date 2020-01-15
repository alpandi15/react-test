import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import ImageIcon from '@material-ui/icons/Image'
import color from 'theme/color'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  textField: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    margin: '1em',
    fontWeight: 500,
    backgroundColor: color.white
  },
  button: {
    borderRadius: '0.2em',
    backgroundColor: color.white,
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.2), 1px 1px 1px 1px rgba(0,0,0,0.14), 1px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  imageIcon: {
    height: '5em'
  },
  icon: {
    color: color.secondaryText,
    fontSize: '5em !important'
  },
  iconText: {
    color: color.secondaryText,
    fontSize: '0.5em !important'
  },
  input: {
    border: `1px solid ${color.grayButton}`,
    backgroundColor: color.white
  }
})

const Upload = ({
  label,
  input,
  addItemRight,
  addItemLeft,
  positionIcon,
  placeholder,
  autoFocus,
  disabled,
  theme,
  margin,
  accept = 'image/x-png,image/jpeg',
  helperText,
  meta: {
    touched,
    error
  },
  ...other
}) => {
  const [image, setImage] = useState(0)
  const styles = useStyles()

  const handleFileChange = (value) => {
    setImage(URL.createObjectURL(value))
  }

  return (
    <div>
      <FormControl className={styles.textField} error={error && touched} variant="standard">
        <IconButton
          className={styles.button}
          key="close"
          aria-label="Close"
          variant="contained"
          color="inherit"
          component="label"
        >
          <div>
            {image
              ? (
                <img
                  src={image}
                  alt={label}
                  className={styles.imageIcon}
                />
              )
              : (
                <div>
                  {placeholder || (
                    <ImageIcon className={styles.icon} />
                  )}
                </div>
              )}
            <div className={styles.iconText}>
              <Typography variant="inherit" component="div">
                {label}
              </Typography>
            </div>
          </div>
          <input
            type="file"
            accept={accept}
            style={{ display: 'none' }}
            onChange={(event) => {
              if (event && event.target && event.target.files && event.target.files[0]) {
                input.onChange(event.target.files[0])
                handleFileChange(event.target.files[0])
              }
            }}
            {...other}
          />
        </IconButton>
        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  )
}

Upload.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  positionIcon: PropTypes.string,
  meta: PropTypes.object.isRequired
}

export default Upload
