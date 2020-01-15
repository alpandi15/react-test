import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import Paper from '@material-ui/core/Paper'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import RedoIcon from '@ant-design/icons/Redo'
import ContainerIcon from '@ant-design/icons/Container'
import Link from 'next/link'
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
  buttonPrimary: {
    width: '100%',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  white: { color: color.white },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  secondaryColor: {
    color: color.secondaryColor
  },
  darkTextColor: {
    color: color.darkTextColor
  },
  tabs: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
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
  textField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    justifyContent: 'center'
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
const Content = {
  title: 'Create Event'
}


const drawerMenu = [
  {
    name: 'recreate',
    link: '/user/event/edit',
    icon: <RedoIcon style={{ color: color.secondaryColor }} />
  },
  {
    name: 'Draft',
    link: '/user/event/draft',
    icon: <ContainerIcon style={{ color: color.secondaryColor }} />
  }
]

class CreateEvent extends Component {
  state = {
    drawerVisible: false
  }

  handleMenuClose = () => {
    this.handleMobileMenuClose()
  }

  handleDrawerToggle = () => {
    const { drawerVisible } = this.state
    this.setState({ drawerVisible: !drawerVisible })
  }

  render () {
    const {
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
              {Content.title}
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

export default withStyles(styles)(CreateEvent)
