import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)(({ children, classes, onClose }) => {
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = MuiDialogContent

const DialogActions = MuiDialogActions

export default function CustomizedDialogs ({ onClose, open, onOk }) {
  return (
    <div>
      <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          Sign Out
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure to sign out from application ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            No
          </Button>
          <Button onClick={onOk} color="primary">
            Sign Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
