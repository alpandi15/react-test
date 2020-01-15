import React from 'react'
import withStyles from '@material-ui/styles/withStyles'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Home from '@ant-design/icons/Home'
import Search from '@ant-design/icons/Search'
import Calendar from '@ant-design/icons/Calendar'
import User from '@ant-design/icons/User'
import Router from 'next/router'

const style = {
  root: {
    width: '100%',
    height: 'auto'
  },
  primary: {
    fontSize: '24px'
  },
  selected: {
    '&$selected': {
      color: '#00DED6'
    }
  }
}

const listNavigation = [
  {
    name: 'Home',
    link: '/',
    icon: <Home style={style.primary} />
  },
  {
    name: 'Search',
    link: '/search',
    icon: <Search style={style.primary} />
  },
  {
    name: 'Event',
    link: '/user/event/list',
    tab: 0,
    icon: <Calendar style={style.primary} />
  },
  {
    name: 'Profile',
    link: '/user-profile',
    icon: <User style={style.primary} />
  }
]
class PrimaryBottomNavigation extends React.Component {
  handleChange = (link, linkTab) => {
    if (typeof linkTab === 'string' || typeof linkTab === 'number') {
      Router.push({
        pathname: link,
        query: { tab: linkTab }
      })
    } else {
      Router.push({
        pathname: link
      })
    }
  }

  render () {
    const { classes, value } = this.props
    return (
      <Container maxWidth="sm" style={{ position: 'fixed', bottom: 0, padding: '0px' }}>
        <div className={classes.root}>
          <BottomNavigation
            value={value}
            showLabels
            className={classes.root}
          >
            {listNavigation.map((item, index) => (
              <BottomNavigationAction key={index}
                label={item.name}
                value={item.link}
                icon={item.icon}
                classes={{ selected: classes.selected }}
                onClick={() => this.handleChange(item.link, item.tab)}
              />
            ))}
          </BottomNavigation>
        </div>
      </Container>
    )
  }
}

PrimaryBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(style)(PrimaryBottomNavigation)
