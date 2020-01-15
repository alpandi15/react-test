import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Title from './Title'
import Product from './Product'

const styles = () => ({
  root: {
    paddingBottom: '2em'
  }
})

class Detail extends Component {
  render () {
    const {
      classes,
      currentItem
    } = this.props

    return (
      <div>
        <Grid container>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={6}>
                <Product currentItem={currentItem} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.root}>
                <Title currentItem={currentItem} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={false} md={2} />
        </Grid>
      </div>
    )
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Detail)
