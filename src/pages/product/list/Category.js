import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { change } from 'redux-form'
import Typography from '@material-ui/core/Typography'
import { get as getCategory } from 'actions/product/categoryAction'
import { changeFilter } from 'actions/product/productAction'
import CategoryCard from './CategoryCard'

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
    flexDirection: 'row'
  }
})

class SearchBar extends Component {
  componentDidMount () {
    this.refresh()
  }

  refresh = () => {
    const { dispatch } = this.props

    dispatch(getCategory())
  }

  chooseCategory = (categoryId) => {
    const { dispatch, filter } = this.props
    let category = filter && filter.categoryId ? filter.categoryId : []
    if (category && typeof category !== 'object') {
      category = []
    } else {
      category = category.map(data => Number(data))
    }

    if (category && category.includes(categoryId)) {
      category = category.filter(filtered => filtered !== categoryId)
    } else {
      category.push(categoryId)
    }

    dispatch(changeFilter({
      categoryId: category,
      q: null
    }))
    dispatch(change('SearchProduct', 'q', null))
  }

  checkExists = (categoryId) => {
    const { filter } = this.props
    let category = []
    if (filter && filter.categoryId) {
      if (typeof filter.categoryId === 'string') {
        category = [Number(filter.categoryId)]
      } else if (typeof filter.categoryId === 'object') {
        category = filter.categoryId
      }
    }
    category = category.map(data => Number(data))

    return category.includes(categoryId)
  }

  render () {
    const { classes, list } = this.props

    return (
      <div className={classes.container}>
        <Typography variant="h5" align="left">
          Kategori
        </Typography>
        {list && list.length > 0
          ? list.map((item, index) => (
            <CategoryCard
              key={index}
              onClick={() => this.chooseCategory(item.id)}
              item={item}
              checked={this.checkExists(item.id)}
            />
          ))
          : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.categoryStore.loading,
  filter: state.productStore.filter,
  list: state.categoryStore.list,
  meta: state.categoryStore.meta
})

export default connect(mapStateToProps)(withStyles(styles)(SearchBar))
