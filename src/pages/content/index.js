import React from 'react'
import PropTypes from 'prop-types'
import CustomHelmet from 'components/CustomHelmet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getBySlug as getArticleBySlug } from 'actions/content/articleAction'
import ContentContainer from './Container'

class Content extends React.Component {
  static getInitialProps = async ({ store, query }) => {
    if (store && query && query.slug) {
      const currentItem = await store.dispatch(getArticleBySlug(query.slug))
      return { currentItem }
    }
    return { ...query }
  }

  render () {
    const { title, currentItem } = this.props

    return (
      <div>
        <CustomHelmet
          title={title}
        />
        <ContentContainer currentItem={currentItem} />
      </div>
    )
  }
}

Content.propTypes = {
  title: PropTypes.string
}

Content.defaultProps = {
  title: 'Content'
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(getArticleBySlug, dispatch),
    startClock: bindActionCreators(getArticleBySlug, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Content)
