import React from 'react'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import HeaderNavigation from 'components/HeaderNavigation'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import GpsFixedOutlined from '@material-ui/icons/GpsFixedOutlined'
import Content from './content'
import Form from './form'

const styles = () => ({
  root: {
    position: 'relative',
    padding: '1.5em',
    alignItems: 'center'
  }
})

class ContainerSearchLocation extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <HeaderNavigation
          router={() => Router.push({
            pathname: '/'
          })}
        />
        <Box mt={2}>
          <Paper square elevation={0} className={classes.root}>
            <Form />
            <ListItem style={{ padding: 0 }}>
              <GpsFixedOutlined color="primary" />
              <Typography component="span" color="primary">
                <Box fontSize={24} ml={1}>
                  <ListItemText primary="Your Location" />
                </Box>
              </Typography>
            </ListItem>
          </Paper>
        </Box>
        <Content />
      </div>
    )
  }
}

export default withStyles(styles)(ContainerSearchLocation)
