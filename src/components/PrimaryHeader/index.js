import React from 'react'
import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Search from '@ant-design/icons/Search'
// import IconButton from '@material-ui/core/IconButton'
// import ChevronLeft from '@material-ui/icons/ChevronLeft'
// import Bell from '@ant-design/icons/Bell'
// import Router from 'next/router'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import GpsFixedOutlined from '@material-ui/icons/GpsFixedOutlined'

import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import color from '../../theme/color'
import { APPNAME } from '../../constants'

const style = {
  container: {
    width: '100%',
    display: 'absolute'
  },
  title: {
    fontWeight: '700',
    color: color.primaryColor
  },
  selected: {
    '&$selected': {
      color: '#00DED6'
    }
  },
  location: {
    fontSize: '16px'
  },
  paper: {
    // padding: theme.spacing(2),
    // padding: 'auto',
    textAlign: 'center'
  },
  appbar: {
    alignItems: 'center'
  }
}

class PrimaryHeader extends React.Component {
  state = {
    value: APPNAME
  };

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Grid container spacing={2}>
              {/* <Grid container item xs={2} sm={2} alignItems="center">
              <IconButton onClick={() => Router.back()} aria-label="open drawer">
                <ChevronLeft colorPrimary="#00DED6" />
              </IconButton>
            </Grid> */}
              <Grid item xs={12} sm={2}>
                <Link href="/">
                  <Typography className={classes.title} variant="h5">
                    {value}
                  </Typography>
                </Link>
              </Grid>

              {/* <Grid container item xs={2} alignItems="center" justify="flex-end">
              <IconButton onClick={() => Router.back()} aria-label="open drawer">
                <Bell style={color.primaryColor} />
              </IconButton>
            </Grid> */}
            </Grid>
          </Toolbar>
          <Toolbar>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Location
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <form noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder="Search Location"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Search />
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                </form>
              </Grid>
            </Grid>
          </Toolbar>
          <Grid>
            <ListItem>
              <GpsFixedOutlined />
              <span>
                <Box fontSize={24} fontWeight={500} mx={1}>
                  <ListItemText primary="Your Location" />
                </Box>
              </span>
            </ListItem>
          </Grid>
        </AppBar>
      </div>
    )
  }
}

PrimaryHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(style)(PrimaryHeader)
