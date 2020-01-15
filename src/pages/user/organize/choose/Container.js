import React, { Component } from 'react'
import Router from 'next/router'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import CardContainerRow from 'components/CardContainerRow'
import SearchNavigation from 'components/SearchNavigation'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import TabsNavigation from 'components/TabsNavigation'
import color from 'theme/color'
import ContentManage from './ContentManage'
import ContentJoined from './ContentJoined'

const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: '48px',
    padding: '20px',
    alignItems: 'center'
  },
  white: { color: color.white },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  tabs: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  title: {
    color: color.darkTextColor,
    fontWeight: 700
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color.darkTextColor,
    margin: 0
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 12
  },
  radius8: {
    borderRadius: 8
  },
  card: {
    backgroundColor: color.white,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const list = [
  {
    title: 'Manage', // title menampilkan nama tab yang akan ditampilkan
    value: 0, // value menampilkan tab yang aktif
    link: '/user/organize/choose'
  },
  {
    title: 'Joined',
    value: 1,
    link: '/user/organize/choose'
  }
]

class ChooseOrganize extends Component {
  state = {
    title: 'Choose Organizer',
    placeholder: 'Search Organizer Here'
  }

  render () {
    const {
      title,
      placeholder
    } = this.state
    const { classes, query } = this.props
    return (
      <div>
        <HeaderBackNavigation
          router={() => Router.push({
            pathname: '/user-profile'
          })}
        />
        <Paper square elevation={0} className={classes.root}>
          <SearchNavigation title={title} colorTitle={color.primaryColor} fontSizeTitle={20} placeholder={placeholder} />
          <div
            style={{
              float: 'right'
            }}
          >
            <CardContainerRow
              justifyItemRight="flex-end"
              itemRight={(
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: color.primaryColor,
                    borderRadius: 50,
                    color: color.white,
                    textTransform: 'none'
                  }}
                  onClick={() => Router.push({
                    pathname: '/organizer/create'
                  })
                  }
                >
                  <AddIcon className={classes.addIcon} />
                  <Typography style={{ fontWeight: 'bold' }}>
                    Organizer
                  </Typography>
                </Button>
              )}
            />
          </div>
        </Paper>


        <div className={classes.tabs}>
          <TabsNavigation
            list={list}
          />
        </div>
        {query && query.tab === '0' ? (
          <ContentManage classes={classes} />
        ) : null
        }
        {query && query.tab === '1' ? (
          <ContentJoined classes={classes} />
        ) : null
        }
      </div>
    )
  }
}

export default withStyles(styles)(ChooseOrganize)
