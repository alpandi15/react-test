import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import CardContainerRow from 'components/CardContainerRow'
import Box from '@material-ui/core/Box'

// icon
import IconButton from '@material-ui/core/IconButton'
import LinkIcon from '@ant-design/icons/Link'

import Typography from '@material-ui/core/Typography'
import TabsNavigation from 'components/TabsNavigation'
import color from 'theme/color'
import clsx from 'clsx'
import Header from './header'
import Profile from './profile'
import Content from './content'

const styles = theme => ({
  root: {
    position: 'relative',
    padding: '2em 1em',
    alignItems: 'center'
  },
  linkBadge: {
    backgroundColor: color.white,
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)',
    padding: 5,
    fontSize: '1em'
  },
  tabs: {
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  media: {
    borderRadius: '50%'
  }
})

class ContainerOrganizerDetail extends Component {
  render () {
    const {
      router,
      id = router.query.id,
      classes,
      count,
      currentData
    } = this.props

    const ListTab = [
      {
        title: 'Upcoming', // title menampilkan nama tab yang akan ditampilkan
        value: 0, // value menampilkan tab yang aktif
        id,
        count: count.upcoming,
        link: '/organizer/detail'
      },
      {
        title: 'Past',
        value: 1,
        id,
        count: count.past,
        link: '/organizer/detail'
      },
      {
        title: 'Draft',
        value: 2,
        id,
        count: count.draft,
        link: '/organizer/detail'
      }
    ]

    const ListTabPrivate = [
      {
        title: 'Upcoming', // title menampilkan nama tab yang akan ditampilkan
        value: 0, // value menampilkan tab yang aktif
        count: count.upcoming,
        link: '/organizer/detail'
      },
      {
        title: 'Past',
        value: 1,
        count: count.past,
        link: '/organizer/detail'
      }
    ]

    return (
      <div>
        <Header />
        <Paper square elevation={0} className={classes.root}>
          <Box mt={5}>
            <Box my={2} fontSize={20} fontWeight={700} color={color.primaryColor}>
              {id ? 'Organizer Profile' : 'Organizer'}
            </Box>
            <Profile />
          </Box>
        </Paper>
        {id && (
          <Box my={1} mx={2}>
            <Box my={2} mx={2}>
              <Typography>
                {currentData[0].content}
              </Typography>
            </Box>
            <CardContainerRow
              xsItemLeft={2}
              justifyItemLeft="center"
              justifyItemRight="flex-start"
              itemLeft={(
                <IconButton className={clsx(classes.linkBadge, classes.media)}>
                  <LinkIcon style={{ color: color.primaryColor }} />
                </IconButton>
              )}
              itemRight={(
                <Typography color="primary" noWrap>
                  {currentData[0].url}
                </Typography>
              )}
            />
          </Box>
        )}

        <Box my={1}>
          <div className={classes.tabs}>
            <TabsNavigation
              list={id ? id && ListTabPrivate : ListTab}
            />
          </div>
          <Content />
        </Box>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentItem: state.dataRawStore.currentItem,
  currentData: state.dataRawStore.list,
  count: state.organizerStore.count
})

export default connect(mapStateToProps)(withStyles(styles)(withRouter(ContainerOrganizerDetail)))
