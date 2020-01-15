import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import Paper from '@material-ui/core/Paper'
import HeaderBackNavigation from 'components/HeaderBackNavigation'

import color from 'theme/color'
import Title from './Title'
import Content from './Content'

const styles = theme => ({
  container: {
    padding: theme.spacing(2)
  },
  root: {
    marginTop: '48px',
    padding: '30px 20px',
    alignItems: 'center'
  },
  primaryColor: {
    color: color.primaryColor
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
    title: 'Medan International Coffee Festival',
    time: '2019-12-20T13:16:30+07:00',
    content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    price: '300000',
    location: 'medan'
  }
]

class EventDescrriptionDetail extends Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <HeaderBackNavigation
          router={() => Router.push({
            pathname: '/user/event/detail'
          })}
        />
        <Paper square elevation={0} className={classes.root}>
          <Title item={dataCard[0]} classes={classes} />
        </Paper>
        <Content
          currentData={dataCard}
        />
      </div>
    )
  }
}

export default withStyles(styles)(EventDescrriptionDetail)
