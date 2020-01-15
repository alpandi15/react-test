import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContainerRow from 'components/CardContainerRow'
import HeaderNotification from 'components/HeaderNotification'
import TabsNavigation from 'components/TabsNavigation'
import color from 'theme/color'
import Content from './Content'

const useStyles = theme => ({
  root: {
    position: 'relative',
    marginTop: '18px',
    height: '10em',
    padding: '20px 0px',
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  container: {
    margin: 0
  },
  textField: {
    minWidth: 300,
    width: '100%',
    maxWidth: 400
  },
  inputText: {
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px'
  },
  buttonLogin: {
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  tabs: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  card: {
    backgroundColor: color.white,
    padding: 12,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  cardTab: {
    backgroundColor: color.white,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  media: {
    borderRadius: '50%'
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color.darkTextColor,
    margin: 0
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
  }
})

const data = {
  favorite: '15'
}

const list = [
  {
    title: 'Upcoming', // title menampilkan nama tab yang akan ditampilkan
    value: 0, // value menampilkan tab yang aktif
    link: '/user/event/list'
  },
  {
    title: 'Past',
    value: 1,
    link: '/user/event/list'
  },
  {
    title: 'Liked',
    value: 2,
    link: '/user/event/list'
  },
  {
    title: 'Invited',
    value: 3,
    link: '/user/event/list'
  }
]

class EventList extends Component {
  render () {
    const {
      classes,
      user,
      query,
      dataCard = [
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
    } = this.props
    return (
      <div>
        <HeaderNotification classes={classes} currentData={data} />
        <Paper square elevation={0} className={classes.root}>
          <Box px={2} pt={3.3} pb={1.2}>
            <Card className={classes.card}>
              <CardContainerRow
                titleFontSize={20}
                titleFontWeight={700}
                xsItemLeft={4}
                itemCenter={(
                  user && user.userName ? user.userName : 'John Doe'
                )}
                itemLeft={(
                  <Box className={classes.justifyCenter} m={1}>
                    {user && user.image ? (
                      <img
                        src={user.image}
                        alt="title"
                        className={classes.media}
                        width="65"
                        height="65"
                      />
                    )
                      : (
                        <img
                          src="https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg"
                          alt="title"
                          className={classes.media}
                          width="65"
                          height="65"
                        />
                      )}
                  </Box>
                )}
              />
            </Card>
          </Box>
        </Paper>

        <div className={classes.tabs}>
          <TabsNavigation
            list={list}
          />
        </div>
        <Content
          classes={classes}
          query={query}
          currentData={dataCard}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.loginStore.data
})

export default connect(mapStateToProps)(withStyles(useStyles)(EventList))
