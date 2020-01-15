import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'
import {
  currencyFormatter
} from 'utils/string'

const styles = () => ({
  container: {
    padding: '1.5rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '300'
  },
  price: {
    fontSize: '16px'
  }
})

const Title = ({
  currentItem,
  classes
}) => {
  return (
    <div className={classes.container}>
      <Typography
        variant="h1"
        gutterBottom
        marked="center"
        align="left"
        className={classes.title}
      >
        {currentItem.name}
      </Typography>
      <Typography
        variant="h2"
        gutterBottom
        marked="center"
        align="left"
        className={classes.price}
      >
        {`${currencyFormatter(currentItem.price)} / ${currentItem.unit}`}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Title)
