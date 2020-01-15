import React, { Component } from 'react'
import Router from 'next/router'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import SortAscending from '@ant-design/icons/SortAscending'
import FilterIcon from '@ant-design/icons/Filter'
import Button from '@material-ui/core/Button'

import SearchNavigation from 'components/SearchNavigation'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import CardContainerRow from 'components/CardContainerRow'

import color from 'theme/color'
import List from './List'

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
    color: color.darkTextColor
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
    color: color.secondaryColor,
    fontSize: 12
  },
  radius8: {
    borderRadius: 8
  },
  card: {
    backgroundColor: color.white,
    padding: 1,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const data = [
  {
    header: 'Organizer A',
    subheader: 'Al-Pandi Coorporate',
    status: true, // 0: NO 1: YES
    url: 'https://cdn.pixabay.com/photo/2018/06/24/10/03/motorcycle-3494230_960_720.jpg'
  },
  {
    header: 'Organizer B',
    subheader: 'Al-Pandi Coorporate',
    status: false, // 0: NO 1: YES
    url: 'https://cdn.pixabay.com/photo/2016/11/14/00/48/print-1822374_960_720.jpg'
  },
  {
    header: 'Al-Pandi Coorporate',
    subheader: 'Al-Pandi Coorporate',
    status: true, // 0: NO 1: YES
    url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg'
  }
]

const Content = {
  title: 'Event Participant',
  placeholder1: 'SearchNavigation email / username',
  item1: 'Birth Date',
  item2: 'Select All',
  button1: 'Participant',
  button2: 'Delete Member'
}

class EventParticipant extends Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <HeaderBackNavigation
          router={() => Router.push({
            pathname: '/organizer/create'
          })}
        />
        <Paper square elevation={0} className={classes.root}>
          <SearchNavigation title={Content.title} colorTitle={color.secondaryColor} fontSizeTitle={20} placeholder={Content.placeholder1} />
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
                    backgroundColor: color.secondaryColor,
                    borderRadius: 50,
                    color: color.white,
                    textTransform: 'none'
                  }}
                  onClick={() => Router.push({
                    pathname: '/user/organize/add-member'
                  })}
                >
                  <AddIcon className={classes.addIcon} />
                  <Typography style={{ fontWeight: 'bold' }}>
                    {Content.button1}
                  </Typography>
                </Button>
              )}
            />
          </div>
        </Paper>
        <Box pt={6}>
          <CardContainerRow
            itemJustifyContentRight="flex-end"
            itemLeft={(
              <Box mx={2}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: color.secondaryColor,
                    color: color.white,
                    textTransform: 'none',
                    padding: '0px 16px'
                  }}
                >
                  <Typography className={classes.row} style={{ fontSize: 10, fontWeight: 'bold' }}>
                    {Content.item2}
                  </Typography>
                </Button>
              </Box>

            )}
            itemRight={(
              <Box className={classes.row}>
                <Box mr={2}>
                  <Typography style={{ color: color.secondaryColor }}>
                    <SortAscending />
                    Sort
                  </Typography>
                </Box>
                <Box mr={2}>
                  <Typography style={{ color: color.secondaryColor }}>
                    <FilterIcon />
                    Filter
                  </Typography>
                </Box>
              </Box>
            )}
          />
        </Box>

        <Box mx={1}>
          <List currentData={data} classes={classes} />
        </Box>
        <Box m={2}>
          <Button
            variant="contained"
            style={{
              backgroundColor: color.logout,
              width: '100%',
              color: color.white,
              textTransform: 'none'
            }}
          >
            <Box mx={1}>
              (1)
            </Box>
            <Typography
              style={{
                fontWeight: 'bold',
                fontSize: 12
              }}
            >
              {Content.button2}
            </Typography>
          </Button>
        </Box>
      </div>
    )
  }
}

export default withStyles(styles)(EventParticipant)
