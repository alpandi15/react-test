import React from 'react'
import PropTypes from 'prop-types'
import CustomHelmet from 'components/CustomHelmet'
import ListContainer from './Container'

class Product extends React.Component {
  static getInitialProps = async ({ query }) => {
    return { query }
  }

  render () {
    const { title, query } = this.props

    return (
      <div>
        <CustomHelmet
          title={title}
        />
        <ListContainer query={query} />
      </div>
    )
  }
}

Product.propTypes = {
  title: PropTypes.string
}

Product.defaultProps = {
  title: 'Product'
}

export default Product
