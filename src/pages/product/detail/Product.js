import React from 'react'
import { withStyles } from '@material-ui/styles'
import CardMedia from '@material-ui/core/CardMedia'

const styles = () => ({
  title: {
    fontSize: '2rem',
    fontWeight: '300'
  },
  price: {
    fontSize: '16px'
  }
})

const Product = ({
  currentItem,
  classes
}) => {
  return (
    <div className={classes.container}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        image={currentItem.image.url}
        title="Contemplative Reptile"
      />
    </div>
  )
}

export default withStyles(styles)(Product)
