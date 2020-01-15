import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import ProductCard from './ProductCard'

const styles = () => ({
  container: {
  },
  loading: {
    margin: '0px 10px'
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  textField: {
    width: '100%'
  }
})

class SearchBar extends Component {
  render () {
    const {
      classes,
      listProduct,
      loading
    } = this.props

    return (
      <div className={classes.container}>
        {loading ? (
          <Grid
            className={classes.loading}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <CircularProgress size={24} />
          </Grid>
        )
          : null}
        {listProduct && listProduct.length > 0 ? (
          <Grid container spacing={3}>
            {listProduct.map((item, index) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <ProductCard item={item} />
                </Grid>
              )
            })}
          </Grid>
        )
          : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.productStore.loading,
  listProduct: state.productStore.list
})

export default connect(mapStateToProps)(withStyles(styles)(SearchBar))
