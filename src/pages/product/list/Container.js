import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { changeFilter } from 'actions/product/productAction'
import Grid from '@material-ui/core/Grid'

import SearchBar from './SearchBar'
import Category from './Category'
import ProductList from './Product'
import Pagination from './Pagination'

const styles = () => ({
  root: {
    paddingBottom: '2em'
  },
  grid: {
    width: '100%'
  }
})

class Product extends Component {
  componentDidMount () {
    this.refresh()
  }

  refresh = () => {
    const { dispatch, query } = this.props
    if (query) {
      dispatch(changeFilter(query))
    }
  }

  changePage = (offset) => {
    const { dispatch, metaProduct } = this.props
    dispatch(changeFilter({
      page: offset / Number(metaProduct.pageSize) + 1
    }))
  }

  render () {
    const {
      classes,
      metaProduct
    } = this.props

    return (
      <div>
        <SearchBar />
        <Grid container className={classes.grid}>
          <Grid item md={12} lg={3}>
            <Category />
          </Grid>
          <Grid item md={12} lg={9}>
            <ProductList />
            {classes && metaProduct && <Pagination classes={classes} onClick={this.changePage} meta={metaProduct} />}
          </Grid>
        </Grid>
      </div>
    )
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  metaProduct: state.productStore.meta
})

export default connect(mapStateToProps)(withStyles(styles)(Product))
