import React, { Component } from 'react'
import Router from 'next/router'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Mail from '@ant-design/icons/Mail'
import ShareAlt from '@ant-design/icons/ShareAlt'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Link from 'next/link'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import color from 'theme/color'
import Form from './form'

const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: '18px',
    height: '12em',
    padding: '20px 0px',
    alignItems: 'center'
  },
  white: { color: color.white },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  primaryColor: color.primaryColor,
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
    padding: 12,
    borderRadius: '12px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  inputText: {
    padding: 8,
    alignItems: 'center',
    border: `1px solid ${color.grayButton}`,
    borderRadius: 10,
    margin: 2
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  textField: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    fontSize: 10
  },
  buttonPrimary: {
    width: '100%',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  button: {
    margin: theme.spacing(1)
  },
  m0: {
    margin: 0
  },
  pr6: {
    paddingRight: 6
  },
  radius14: {
    borderRadius: 14
  }
})

const drawerMenu = [
  {
    name: 'Contact Organizer',
    link: '/user/event/ticket',
    icon: <Mail style={{ color: color.secondaryColor }} />
  },
  {
    name: 'Share Ticket',
    link: '/user/event/ticket',
    icon: <ShareAlt style={{ color: color.secondaryColor }} />
  },
  {
    name: 'Request refund',
    link: '/user/event/ticket',
    icon: <AttachMoneyIcon style={{ color: color.secondaryColor, width: 14, height: 14 }} />
  }
]


class Ticket extends Component {
  state = {
    title: 'Ticket Event',
    drawerVisible: false
  }

  handleDrawerToggle = () => {
    const { drawerVisible } = this.state
    this.setState({ drawerVisible: !drawerVisible })
  }

  render () {
    const {
      title,
      drawerVisible
    } = this.state
    const { classes } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {drawerMenu.map((item, index) => (
            <Link key={index} href={item.link}>
              <ListItem onClick={() => this.handleDrawerToggle()} button>
                <ListItemIcon style={{ minWidth: 30 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )

    return (
      <div>
        <HeaderBackNavigation
          router={() => Router.push({
            pathname: '/user/organize/choose',
            query: { tab: 0 }
          })}
          iconRight={(
            <IconButton
              aria-label="open drawer"
              className={classes.secondaryColor}
              onClick={() => this.handleDrawerToggle()}
            >
              <MoreVertIcon />
            </IconButton>
          )}
        />
        <Drawer
          anchor="bottom"
          open={drawerVisible}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <Paper square elevation={0} className={classes.root}>
          <Box m={2}>
            <Typography style={{ color: color.primaryColor, fontSize: 20, fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Box>
          <Box mx={2}>
            <Form
              classes={classes}
            />
          </Box>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Ticket)
