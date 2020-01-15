import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import Router, { withRouter } from 'next/router'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import CardContainerRow from 'components/CardContainerRow'
import CardContainerColumn from 'components/CardContainerColumn'
import { logout } from 'components/Security/auth'
import Card from '@material-ui/core/Card'
import color from 'theme/color'
import { userData } from 'actions/auth/authAction'
import { getMyOrganizerData, getById } from 'actions/organizer/organizerAction'
import Header from './Header'
import ContentCv from './ContentCv'
import Information from './Information'
import OrganizerPage from './organizer'
import InvitationPage from './invitation'
import InvitationHeaderPage from './invitation/header'

const useStyles = () => ({
  root: {
    display: 'flex',
    padding: '0px 18px',
    alignItems: 'center',
    height: 30
  },
  card: {
    backgroundColor: color.white,
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  bold: {
    fontWeight: 'bold'
  },
  media: {
    borderRadius: '50%'
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center'
  }
})

class ProfileContainer extends Component {
  componentDidMount () {
    const { router } = this.props
    if (router.query.id !== undefined) {
      this.setCurrentUserData()
    } else {
      this.setMyData()
      this.setMyOrganizerData()
    }
  }

  setCurrentUserData = () => {
    const { dispatch, router } = this.props
    dispatch(getById(router.query.id))
  }

  setMyData = () => {
    const { dispatch } = this.props
    dispatch(userData())
  }

  setMyOrganizerData = () => {
    const { dispatch } = this.props
    dispatch(getMyOrganizerData())
  }

  asyncLogout = () => {
    logout()
  }

  render () {
    const {
      classes,
      user,
      router,
      id = router.query.id,
      currentItem
    } = this.props
    return (
      <div>
        <div className={classes.root}>
          <Paper square elevation={0}>
            {id ? <InvitationHeaderPage /> : <Header onLogout={this.asyncLogout} />}
          </Paper>
        </div>

        <Paper square elevation={0}>
          <Box pt={6} pb={3} px={2}>
            <Card className={classes.card}>
              <CardHeader
                avatar={user && user.image ? (
                  <img
                    src={user.img}
                    alt="title"
                    className={classes.media}
                    width="65"
                    height="65"
                  />
                )
                  : (
                    <img
                      src="/static/Icon/empty-profile.png"
                      alt="title"
                      className={classes.media}
                      width="65"
                      height="65"
                    />
                  )}
                title={user && user.firstName && user.lastName
                  ? user && user.firstName && user.lastName && (
                    <Typography color="secondary" variant="h5" className={classes.bold}>
                      {`${user.firstName} ${user.lastName}`}
                    </Typography>
                  )
                  : (
                    <Typography color="secondary" variant="h5" className={classes.bold}>
                      Your Name
                    </Typography>
                  )}
                subheader={(
                  <CardContainerRow
                    onContainer
                    itemLeft={(
                      <CardActionArea>
                        <Box
                          onClick={() => Router.push({
                            pathname: '/user/event/list'
                          })}
                        >
                          <CardContainerColumn
                            itemLeft={(
                              <Box justifyContent="center" alignItems="center" display="flex">
                                <Typography color="secondary" variant="body2" className={classes.bold}>
                                  {currentItem.event ? currentItem.event : 0}
                                </Typography>
                              </Box>
                            )}
                            itemCenter={(
                              <Box justifyContent="center" alignItems="center" display="flex" color={color.gray}>
                                <Typography variant="caption">
                                  Events
                                </Typography>
                              </Box>
                            )}
                          />
                        </Box>
                      </CardActionArea>
                    )}
                    itemCenter={(
                      <CardActionArea>
                        <Box
                          onClick={() => Router.push({
                            pathname: '/user/committee/become'
                          })}
                        >
                          <CardContainerColumn
                            itemLeft={(
                              <Box justifyContent="center" alignItems="center" display="flex">
                                <Typography color="secondary" variant="body2" className={classes.bold}>
                                  {currentItem.committee ? currentItem.committee : 0}
                                </Typography>
                              </Box>
                            )}
                            itemCenter={(
                              <Box justifyContent="center" alignItems="center" display="flex" color={color.gray}>
                                <Typography variant="caption">
                                  Committee
                                </Typography>
                              </Box>
                            )}
                          />
                        </Box>
                      </CardActionArea>
                    )}
                    itemRight={(
                      <CardActionArea>
                        <Box
                          onClick={() => Router.push({
                            pathname: '/user/organize/choose',
                            query: { tab: 0 }
                          })}
                        >
                          <CardContainerColumn
                            itemLeft={(
                              <Box justifyContent="center" alignItems="center" display="flex">
                                <Typography color="secondary" variant="body2" className={classes.bold}>
                                  {currentItem.organizerJoined ? currentItem.organizerJoined : 0}
                                </Typography>
                              </Box>
                            )}
                            itemCenter={(
                              <Box justifyContent="center" alignItems="center" display="flex" color={color.gray}>
                                <Typography variant="caption">
                                  Organizer
                                </Typography>
                              </Box>
                            )}
                          />
                        </Box>
                      </CardActionArea>
                    )}
                  />
                )}
              />
            </Card>
          </Box>
        </Paper>
        <Box px={2} pb={2} pt={1.2}>
          <Card className={classes.card}>
            {id ? <InvitationPage /> : <OrganizerPage />}
          </Card>
        </Box>
        <Information />
        <ContentCv />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authStore.currentItem,
  currentItem: state.organizerStore.currentItem
})

export default connect(mapStateToProps)(withStyles(useStyles)(withRouter(ProfileContainer)))
