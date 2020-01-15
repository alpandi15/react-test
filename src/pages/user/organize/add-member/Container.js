import React, { Component } from 'react'
import Router from 'next/router'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SearchNavigation from 'components/SearchNavigation'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import CardContainerRow from 'components/CardContainerRow'
import color from 'theme/color'

const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: '48px',
    padding: '20px',
    alignItems: 'center'
  },
  white: { color: color.white },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  tabs: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2.8),
    marginRight: theme.spacing(2.8)
  },
  title: {
    color: color.darkTextColor
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
    padding: 1,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const currentData = [
  {
    header: 'Al-Pandi Coorporate',
    subheader: 'Al-Pandi Coorporate',
    url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg'
  },
  {
    header: 'Al-Pandi Coorporate',
    subheader: 'Al-Pandi Coorporate',
    url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg'
  },
  {
    header: 'Al-Pandi Coorporate',
    subheader: 'Al-Pandi Coorporate',
    url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg'
  }
]

class AddMemberOrganize extends Component {
  state = {
    title: 'Add Member',
    placeholder: 'SearchNavigation email / username'
  }

  render () {
    const {
      title,
      placeholder
    } = this.state
    const { classes } = this.props
    return (
      <div>
        <HeaderBackNavigation
          router={() => Router.push({
            pathname: '/user/organize/list-add-member'
          })}
        />
        <Paper square elevation={0} className={classes.root}>
          <SearchNavigation title={title} colorTitle={color.secondaryColor} fontSizeTitle={20} placeholder={placeholder} />
        </Paper>
        <Box mx={1} mt={2}>
          {currentData && currentData.length
            ? currentData && currentData.length && currentData.map((item, index) => {
              return (
                <div
                  key={index}
                >
                  <CardContainerRow
                    overflowItemRight="hidden"
                    itemJustifyContentCenter="flex-end"
                    xsItemLeft={12}
                    xsItemCenter={4}
                    itemLeft={(
                      <CardHeader
                        style={{ padding: '10px 12px' }}
                        avatar={(
                          <img
                            src={item.url}
                            alt={item.header}
                            className={classes.radius8}
                            width="45"
                            height="45"
                          />
                        )}
                        classes={{
                          title: classes.title,
                          subheader: classes.subheader
                        }}
                        title={item.header}
                      />
                    )}
                    itemCenter={(
                      <Box mr={1} my={2}>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: color.secondaryColor,
                            color: color.white,
                            textTransform: 'none'
                          }}
                        >
                          <Typography className={classes.row} style={{ fontSize: 10, fontWeight: 'bold' }}>
                            Invite
                          </Typography>
                        </Button>
                      </Box>
                    )}
                  />
                  <Divider variant="fullWidth" />
                </div>
              )
            })
            : null
          }
        </Box>
      </div>
    )
  }
}

export default withStyles(styles)(AddMemberOrganize)
