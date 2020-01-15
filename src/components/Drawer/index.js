import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import RedoIcon from '@ant-design/icons/Redo'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

const SwipeableTemporaryDrawer = ({
  placement = 'bottom',
  list = [
    {
      name: 'home',
      link: '/',
      icon: <RedoIcon />
    }
  ],
  header,
  onDivider,
  children
}) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    visible: false
  })

  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [side]: open })
  }

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List
        subheader={(
          <div>
            <ListItemText component="div" id="nested-list-subheader">
              {header}
            </ListItemText>
            {onDivider && (<Divider variant="fullWidth" component="li" />)}
          </div>
        )}
      >
        {list.map((item, index) => (
          <Link key={index} href={item.link}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <Box onClick={toggleDrawer('visible', true)}>
        {children}
      </Box>
      <SwipeableDrawer
        anchor={placement}
        open={state.visible}
        onClose={toggleDrawer('visible', false)}
        onOpen={toggleDrawer('visible', true)}
      >
        {fullList('visible')}
      </SwipeableDrawer>
    </div>
  )
}

export default SwipeableTemporaryDrawer
