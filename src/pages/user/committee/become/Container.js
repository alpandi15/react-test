import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import Paper from '@material-ui/core/Paper'
import HeaderBackNavigation from 'components/HeaderBackNavigation'

import SearchNavigation from 'components/SearchNavigation'
import CardContainerRow from 'components/CardContainerRow'
import SortAscending from '@ant-design/icons/SortAscending'
import FilterIcon from '@ant-design/icons/Filter'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import color from 'theme/color'
import Content from './Content'

const styles = theme => ({
  container: {
    padding: theme.spacing(2)
  },
  root: {
    display: 'flex',
    marginTop: '48px',
    padding: '10px 20px',
    alignItems: 'center'
  },
  primaryColor: {
    color: color.primaryColor
  },
  whiteTextColor: {
    color: color.white
  },
  customBadge: {
    backgroundColor: color.primaryColor,
    color: color.white,
    padding: 0,
    alignItems: 'center',
    fontSize: '6px',
    maxHeight: '12px !important',
    minWidth: '12px !important',
    marginLeft: theme.spacing(0.62),
    marginRight: theme.spacing(0.7),
    marginTop: theme.spacing(0.8),
    justifyContent: 'center'
  },
  tabs: {
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  radius8: {
    borderRadius: 8
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  title: {
    color: color.primaryColor,
    fontSize: 18
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 14,
    fontWeight: 500
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color.darkTextColor,
    margin: 0
  },
  textField: {
    width: '100%'
  }
})
const dataCard = [
  {
    date: '12 Nov',
    location: 'medan',
    price: 'Rp 30.000',
    tickets: '1',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
  },
  {
    date: '12 Nov',
    location: 'medan',
    price: 'Rp 34.000',
    tickets: '20',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
  },
  {
    date: '12 Nov',
    location: 'medan',
    price: 'Rp 30.000',
    tickets: '5',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
  }
]

class BecomeCommittee extends Component {
  state = {
    title: 'Become Committee',
    placeholder: 'SearchNavigation Event'
  }

  render () {
    const {
      title,
      placeholder
    } = this.state
    const { classes } = this.props

    return (
      <div>
        <HeaderBackNavigation
          router={() => Router.push({
            pathname: '/user-profile'
          })}
        />
        <Paper square elevation={0} className={classes.root}>
          <SearchNavigation title={title} colorTitle={color.primaryColor} fontSizeTitle={20} placeholder={placeholder} />
        </Paper>
        <Box pt={2}>
          <CardContainerRow
            itemJustifyContentRight="flex-end"
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
        <Content
          classes={classes}
          currentData={dataCard}
        />
      </div>
    )
  }
}

export default withStyles(styles)(BecomeCommittee)
