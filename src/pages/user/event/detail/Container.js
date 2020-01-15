import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CardHeader from '@material-ui/core/CardHeader'
import Box from '@material-ui/core/Box'
import color from 'theme/color'
import Header from './Header'
import ListTime from './ListTime'
import Title from './Title'
import Asset from './Asset'
import Location from './Location'
import Participant from './Participant'
import ButtonEvent from './Button'

const styles = theme => ({
  container: {
    padding: theme.spacing(2)
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  root: {
    position: 'relative',
    marginTop: '18px',
    height: '10em',
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
  card: {
    backgroundColor: color.white,
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  padding12: {
    padding: 12
  },
  Radius12: {
    borderRadius: 12
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
  media: {
    borderRadius: '50%'
  },
  radius8: {
    borderRadius: 8
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  justifyContent: {
    justifyContent: 'center'
  },
  listTime: {
    width: 120,
    height: 80
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
  }
})

const dataCard = [
  {
    date: '12 Nov',
    location: 'medan',
    price: '300000',
    tickets: '1',
    time: '2019-12-20T13:16:30+07:00',
    content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
  }
]

const dataTime = [
  { time: '2019-12-20T13:16:30+07:00' },
  { time: '2019-12-20T13:16:30+07:00' },
  { time: '2019-12-20T13:16:30+07:00' }
]
const assets = [
  {
    eventFile: {
      url: 'http://192.168.1.26:4000/Public/Nov2019/3db89cc351d4d6d19a342b9540151b29.jpg',
      raw: 'Public/Nov2019/3db89cc351d4d6d19a342b9540151b29.jpg'
    },
    id: 1,
    eventId: 2,
    name: 'Cover.jpg',
    type: 'image'
  },
  {
    eventFile: {
      url: 'http://192.168.1.26:4000/Public/Nov2019/c75b71582aa46f4e5a1dff486247f828.jpg',
      raw: 'Public/Nov2019/c75b71582aa46f4e5a1dff486247f828.jpg'
    },
    id: 2,
    eventId: 2,
    name: 'Cover2.jpg',
    type: 'image'
  }
]

class BecomeCommittee extends Component {
  render () {
    const {
      classes,
      data = [
        {
          header: 'Al-Pandi Coorporate',
          location: 'Medan',
          url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg'
        }
      ]
    } = this.props

    return (
      <div>
        <Header classes={classes} />
        <Paper square elevation={0} className={classes.root}>
          <Box pt={4}>
            {data.map((item, index) => {
              return (
                <CardHeader
                  key={index}
                  avatar={(
                    <img
                      src={item.url}
                      alt={item.header}
                      className={classes.radius8}
                      width="45"
                      height="45"
                    />
                  )}
                  title={item.header}
                  subheader={item.location}
                />
              )
            })}
            <Box mx={2}>
              <Title currentData={dataCard} classes={classes} />
            </Box>
            <ListTime data={dataTime} classes={classes} />
          </Box>
          <Location />
          <Participant data={assets} classes={classes} />
          <Asset data={assets} classes={classes} />
          <div bottom={0}>
            <ButtonEvent classes={classes} />
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(BecomeCommittee)
