import React from 'react'
import Circular from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import color from 'theme/color'

const CircularProgress = withStyles({
  root: {
    borderRadius: 20,
    height: 100,
    color: color.primaryColor
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#06F1E0'
  }
})(Circular)

const useStyles = () => ({
  card: {
    backgroundColor: color.white,
    padding: 1,
    borderRadius: '12px'
  }
})

const CircularLoad = ({
  itemTop,
  itemBottom
}) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classes.card}>
        {itemTop}
        <CircularProgress disableShrink variant="determinate" />
        {itemBottom}
      </Paper>
    </React.Fragment>
  )
}

export default CircularLoad
