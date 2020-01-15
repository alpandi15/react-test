import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@ant-design/icons/Heart'
import Hidden from '@material-ui/core/Hidden'
import HeaderNotification from 'components/HeaderNotification'
import SearchNavigation from 'components/SearchNavigation'
import TabsNavigation from 'components/TabsNavigation'
import color from 'theme/color'
import EventTab from './EventTab'

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
  darkTextColor: {
    color: color.darkTextColor
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
  textField: {
    width: '100%'
  }
})

const list = [
  {
    title: 'Events', // title menampilkan nama tab yang akan ditampilkan
    value: 0, // value menampilkan tab yang aktif
    link: '/searchnavigation'
  },
  {
    title: 'Organizer',
    value: 1,
    link: '/searchnavigation'
  }
]

const dataFavorite = {
  favorite: '15'
}

class Container extends Component {
  state = {
    title: 'SearchNavigation',
    placeholder: 'SearchNavigation Event Here',
    data: [
      {
        date: '12 Nov',
        location: 'medan',
        price: 'Rp 30.000',
        text: 'Medan International Coffee Festival',
        img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
        title: 'spring'
      },
      {
        date: '12 Nov',
        location: 'medan',
        price: 'Rp 34.000',
        text: 'Medan International Coffee Festival',
        img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
        title: 'spring'
      },
      {
        date: '12 Nov',
        location: 'medan',
        price: 'Rp 30.000',
        text: 'Medan International Coffee Festival',
        img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
        title: 'spring'
      }
    ]
  }

  render () {
    const {
      title,
      data,
      placeholder
    } = this.state
    const { classes } = this.props

    const EventTabComponent = ({ xs, my, mr }) => (
      <EventTab
        iconRight={(
          <IconButton color="secondary" className={classes.column}>
            <FavoriteBorderIcon />
          </IconButton>
        )}
        FontWeight="bold"
        currentData={data}
        xs={xs}
        my={my}
        mr={mr}
      />
    )
    return (
      <div>
        <HeaderNotification currentData={dataFavorite} />
        <Paper square elevation={0} className={classes.root}>
          <SearchNavigation title={title} colorTitle={color.primaryText} fontSizeTitle={20} placeholder={placeholder} />
        </Paper>
        <div className={classes.tabs}>
          <TabsNavigation
            list={list}
          />
        </div>
        <div className={classes.tabs}>
          <Hidden smUp>
            <Grid container>
              <EventTabComponent
                xs={12}
                my={1}
              />
            </Grid>
          </Hidden>
          <Hidden xsDown>
            <Grid container>
              <EventTabComponent
                xs={4}
                my={1}
                mr={1}
              />
            </Grid>
          </Hidden>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Container)
