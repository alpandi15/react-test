import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContainerRow from 'components/CardContainerRow'
import CardActions from '@material-ui/core/CardActions'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import UsergroupAdd from '@ant-design/icons/UsergroupAdd'
import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography'
import TabsNavigation from 'components/TabsNavigation'
import color from 'theme/color'
import Header from './Header'
import Content from './Content'

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
    padding: 20,
    alignItems: 'center'
  },
  primaryColor: {
    color: color.primaryColor
  },
  whiteTextColor: {
    color: color.white
  },
  card: {
    backgroundColor: color.white,
    padding: 12,
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
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


const list = [
  {
    title: 'Upcoming', // title menampilkan nama tab yang akan ditampilkan
    value: 0, // value menampilkan tab yang aktif
    link: '/user/organize/detail'
  },
  {
    title: 'Past',
    value: 1,
    link: '/user/organize/detail'
  },
  {
    title: 'Draft',
    value: 2,
    link: '/user/organize/detail'
  }
]

const dataCard = [
  {
    date: '12 Nov',
    location: 'medan',
    price: '300000',
    tickets: '1',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
  },
  {
    date: '12 Nov',
    location: 'medan',
    price: '340000',
    tickets: '20',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
  },
  {
    date: '12 Nov',
    location: 'medan',
    price: '330000',
    tickets: '5',
    text: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    title: 'spring'
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
          <Box mt={4}>
            <Card className={classes.card}>
              {data.map((item, index) => {
                return (
                  <CardHeader
                    style={{
                      padding: '0px 12px'
                    }}
                    key={index}
                    avatar={(
                      <img
                        src={item.url}
                        alt={item.header}
                        className={classes.media}
                        width="70"
                        height="70"
                      />
                    )}
                    title={item.header}
                    subheader={item.location}
                  />
                )
              })}
              <CardContainerRow
                itemJustifyContent="center"
                itemLeft={(
                  <CardActions>
                    <Button
                      variant="contained"
                      size="medium"
                      style={{
                        backgroundColor: color.primaryColor,
                        borderRadius: 50,
                        color: color.white,
                        textTransform: 'none'
                      }}
                      onClick={() => Router.push({
                        pathname: '/user/event/create'
                      })
                      }
                    >
                      <AddIcon className={classes.addIcon} />
                      <Typography style={{ fontWeight: 500 }}>
                        Event
                      </Typography>
                    </Button>
                  </CardActions>
                )}
                itemCenter={(
                  <Button
                    variant="contained"
                    size="medium"
                    style={{
                      backgroundColor: color.white,
                      borderRadius: 50,
                      color: color.primaryColor,
                      textTransform: 'none'
                    }}
                    onClick={() => Router.push({
                      pathname: '/user/organize/list-member'
                    })
                    }
                  >
                    <UsergroupAdd className={classes.addIcon} />
                    <Typography style={{ fontWeight: 500 }}>
                      Member
                    </Typography>
                  </Button>
                )}
              />
            </Card>
          </Box>
        </Paper>
        <Box my={8}>
          <div className={classes.tabs}>
            <TabsNavigation
              list={list}
            />
          </div>
          <Content
            classes={classes}
            currentData={dataCard}
          />
        </Box>
      </div>
    )
  }
}

export default withStyles(styles)(BecomeCommittee)
