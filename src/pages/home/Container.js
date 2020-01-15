import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import CustomHelmet from 'components/CustomHelmet'
import BottomNavigation from 'components/BottomNavigation'
import HeaderNavigation from 'components/HeaderNavigation'
import NotificationIcon from 'components/NotificationIcon'
import FlexRow from 'components/FlexRow'
import PageInfo from 'components/Layout/PageInfo'
import Content from './content'

class AppIndex extends React.Component {
  render () {
    const {
      title,
      currentData
    } = this.props
    return (
      <div>
        <CustomHelmet
          title={title}
        />
        <PageInfo
          title={(
            <Typography color="secondary" fontSize="small">
              Location
            </Typography>
          )}
          subtitle={(
            <FlexRow>
              <Button
                href="/location"
                style={{ textTransform: 'none', padding: 0 }}
              >
                <Box mr={1}>
                  <Typography color="primary" style={{ fontSize: '1.5em', fontWeight: 700 }}>
                    {currentData[0].location}
                  </Typography>
                </Box>
                <CheckCircleOutline color="primary" style={{ fontSize: '1.5em' }} />
              </Button>
            </FlexRow>
          )}
        />
        <HeaderNavigation
          iconLeft=""
          logo
          iconRight={(
            <IconButton href="/notification">
              <NotificationIcon currentData={14} />
            </IconButton>
          )}
        />
        <Content />
        <BottomNavigation value="/" />
      </div>
    )
  }
}

AppIndex.propTypes = {
  title: PropTypes.string
}

AppIndex.defaultProps = {
  title: 'Home'
}
const mapStateToProps = state => ({
  currentData: state.dataRawStore.list
})

export default connect(mapStateToProps)(AppIndex)
