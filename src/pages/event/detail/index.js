import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Snackbar } from '@material-ui/core'
import SnackbarItem from 'components/Alert/SnackbarItem'
import CustomHelmet from 'components/CustomHelmet'
import { getById } from 'actions/event/eventAction'
import ErrorPage from 'next/error'
import { withRouter } from 'next/router'
import HeaderNavigation from 'components/HeaderNavigation'
import Container from './Container'
import {
  helmet
} from './variables'

class EventDetail extends Component {
  componentDidMount () {
    this.setEvent()
  }

  setEvent = async () => {
    const { dispatch, router } = this.props
    const { query } = router
    await dispatch(getById(query.id, query.organizerId))
  }

  render () {
    const {
      router, currentItem, title, group, asset, loading, errorMessage
    } = this.props
    const { query } = router
    if (query && query.id && currentItem) {
      return (
        <div>
          <CustomHelmet
            title={currentItem && currentItem.name ? currentItem.name : title}
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={!!errorMessage}
            autoHideDuration={6000}
          >
            <SnackbarItem
              variant="error"
              message={errorMessage}
            />

          </Snackbar>
          <Container
            currentItem={currentItem}
            group={group}
            asset={asset}
            loading={loading}
          />
        </div>
      )
    }
    return (
      <div>
        <CustomHelmet
          title={title}
        />
        <HeaderNavigation />
        <ErrorPage statusCode={404} />
      </div>
    )
  }
}

EventDetail.propTypes = {
  title: PropTypes.string
}

EventDetail.defaultProps = {
  title: helmet
}

const mapStateToProps = state => ({
  group: state.eventStore.group,
  asset: state.eventStore.asset,
  loading: state.eventStore.loading,
  errorMessage: state.eventStore.errorMessage,
  currentItem: state.eventStore.currentItem
})

export default withRouter(connect(mapStateToProps)(EventDetail))
