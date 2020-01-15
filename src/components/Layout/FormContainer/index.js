import React from 'react'
import { makeStyles } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SnackbarItem from 'components/Alert/SnackbarItem'
import color from 'theme/color'

const useStyles = makeStyles({
  container: {
    minHeight: '50vh',
    height: '100%',
    padding: '1em',
    backgroundColor: color.textIcons,
    backgroundOpacity: 0.5
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  button: {
    width: '100%',
    marginTop: '2em',
    textTransform: 'none'
  }
})

const FormContainer = ({
  children,
  okText = 'Ok',
  cancelText = 'Cancel',
  errorMessage,
  successMessage,
  onSubmit,
  onCancel
}) => {
  const classes = useStyles()
  return (
    <form onSubmit={onSubmit} className={classes.container} noValidate autoComplete="off">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={!!successMessage}
        autoHideDuration={6000}
      >
        <SnackbarItem
          variant="success"
          message={successMessage}
        />

      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={!!errorMessage}
        autoHideDuration={6000}
      >
        <SnackbarItem
          variant="error"
          message={errorMessage}
        />

      </Snackbar>
      {children}
      {onSubmit && (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onSubmit}
        >
          <Typography>
            {okText}
          </Typography>
        </Button>
      )}
      {onCancel && (
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          onClick={onSubmit}
        >
          <Typography>
            {cancelText}
          </Typography>
        </Button>
      )}
    </form>
  )
}

export default FormContainer
