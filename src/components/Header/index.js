import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/styles'
import MailIcon from '@material-ui/icons/Mail'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import MenuIcon from '@material-ui/icons/Menu'
import ExitIcon from '@material-ui/icons/ExitToApp'
import MoreIcon from '@material-ui/icons/MoreVert'
import ListIcon from '@material-ui/icons/List'
import InfoIcon from '@material-ui/icons/Info'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { APPNAME } from '../../constants'
import { logout } from '../Security/auth'
import LogoutModal from './LogoutModal'

const styles = theme => ({
  container: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 20
  },
  title: {
    display: 'block'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  button: {
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(1)
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

const drawerMenu = [
  {
    name: 'Tukar Sampah',
    link: '/product/list',
    icon: <ListIcon />
  },
  {
    name: 'Tentang Kami',
    link: '/content/about-us',
    icon: <InfoIcon />
  },
  {
    name: 'Kontak',
    link: '/content/contact-us',
    icon: <MailIcon />
  }
]

class PrimarySearchAppBar extends React.Component {
  state = {
    drawerVisible: false,
    modalVisible: false,
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => this.setState({ anchorEl: event.currentTarget })

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  };

  handleMobileMenuOpen = event => this.setState({ mobileMoreAnchorEl: event.currentTarget });

  handleMobileMenuClose = () => this.setState({ mobileMoreAnchorEl: null })

  asyncLogout = () => {
    logout()
    this.setState({ modalVisible: false })
  }

  handleModalOpen = () => {
    this.setState({ modalVisible: true })
    this.handleMobileMenuClose()
  }

  handleModalClose = () => {
    this.setState({ modalVisible: false })
  }

  handleDrawerToggle = () => {
    const { drawerVisible } = this.state
    this.setState({ drawerVisible: !drawerVisible })
  }

  render () {
    const {
      anchorEl,
      mobileMoreAnchorEl,
      modalVisible,
      drawerVisible
    } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    )

    const token = Cookies.get('token')

    const MobileMenu = ({ token, logout }) => {
      if (token) {
        return (
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
          >
            <MenuItem onClick={() => logout()}>
              <IconButton color="inherit">
                <ExitIcon />
              </IconButton>
              <p>Log out</p>
            </MenuItem>
          </Menu>
        )
      }
      return (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMobileMenuClose}
        >
          <Link href="/login">
            <MenuItem onClick={() => this.handleMobileMenuClose()}>
              <IconButton color="inherit">
                <LockOpenIcon />
              </IconButton>
              <p>Login</p>
            </MenuItem>
          </Link>
        </Menu>
      )
    }

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {drawerMenu.map((item, index) => (
            <Link key={index} href={item.link}>
              <ListItem onClick={() => this.handleDrawerToggle()} button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )

    return (
      <div className={classes.container}>
        <LogoutModal open={modalVisible} onClose={this.handleModalClose} onOk={this.asyncLogout} />
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.handleDrawerToggle} color="inherit" aria-label="Open drawer">
              <MenuIcon value="menu" aria-label="menu" aria-labelledby="menu" />
            </IconButton>
            <Link href="/">
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                {APPNAME}
              </Typography>
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link href="/product/list">
                <Button className={classes.button}>
                  <Typography variant="button" className={classes.button}>Event</Typography>
                </Button>
              </Link>
              <Link href={{ pathname: '/content/about-us' }}>
                <Button className={classes.button}>
                  <Typography variant="button" className={classes.button}>Tentang</Typography>
                </Button>
              </Link>
              <Link href={{ pathname: '/content/contact-us' }}>
                <Button className={classes.button}>
                  <Typography variant="button" className={classes.button}>Kontak</Typography>
                </Button>
              </Link>
              {!token && (
                <Link href="/register">
                  <Button className={classes.button}>
                    <Typography variant="button" className={classes.button}>Register</Typography>
                  </Button>
                </Link>
              )}
              {!token && (
                <Link href="/login">
                  <Button className={classes.button}>
                    <Typography variant="button" className={classes.button}>Log in</Typography>
                  </Button>
                </Link>
              )}
              {!!token && (
                <Button className={classes.button} onClick={this.handleModalOpen}>
                  <Typography variant="button" className={classes.button}>Log out</Typography>
                </Button>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <Drawer
                // container={container}
                variant="temporary"
                anchor="left"
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
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <MobileMenu token={token} logout={() => this.handleModalOpen()} />
      </div>
    )
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PrimarySearchAppBar)
