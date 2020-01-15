import React from 'react'
import ErrorPage from 'next/error'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getById as getProductById
} from 'actions/product/productAction'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'

class Product extends React.Component {
  static getInitialProps = async ({ store, query }) => {
    if (store && query && query.id) {
      const currentItem = await store.dispatch(getProductById(query.id))
      if (currentItem) {
        return ({ currentItem, query })
      }
      return { ...query }
    }
    return { ...query }
  }

  render () {
    const { title, query, currentItem } = this.props
    if (!query || (query && !query.id)) {
      return <ErrorPage statusCode={404} />
    }


    return (
      <div>
        <CustomHelmet
          title={title}
        >
          <link async rel="stylesheet" type="text/css" charset="UTF-8" href="/static/styles/slick.min.css" />
          <link async rel="stylesheet" type="text/css" href="/static/styles/slick-theme.min.css" />
        </CustomHelmet>

        <Container currentItem={currentItem} />
      </div>
    )
  }
}

Product.propTypes = {
  title: PropTypes.string
}

Product.defaultProps = {
  title: 'Product Detail'
}

export default connect(null)(Product)
