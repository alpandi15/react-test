import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Router, { withRouter } from 'next/router'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContainerRow from 'components/CardContainerRow'
import CardContainerColumn from 'components/CardContainerColumn'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
// icon
import AddIcon from '@material-ui/icons/Add'
import ButtonPrimary from 'components/ButtonPrimary'
import FlexRow from 'components/FlexRow'
import UsergroupAdd from '@ant-design/icons/UsergroupAdd'
import Button from '@material-ui/core/Button'
import color from 'theme/color'

const useStyles = makeStyles(theme => ({
  addIcon: {
    marginRight: theme.spacing(1)
  },
  card: {
    backgroundColor: color.white,
    padding: 12,
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  media: {
    borderRadius: '50%'
  }
}))

const profile = ({
  router,
  id = router.query.id,
  currentItem
}) => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          style={{
            padding: '0px 12px'
          }}
          avatar={(
            <img
              src={currentItem.img}
              alt="Event"
              className={classes.media}
              width="70"
              height="70"
            />
          )}
          title="Organizer"
          subheader={(
            <CardContainerColumn
              itemCenter={(
                <CardContainerRow
                  itemLeft={(
                    <FlexRow>
                      <img src="/static/Icon/diamond.svg"
                        alt="diamond"
                        style={{
                          display: 'flex',
                          width: 20,
                          height: 20
                        }}
                      />
                      <Box mr={1.5} ml={0.5}>
                        <Typography style={{ color: color.orange }}>
                          Gold
                        </Typography>
                      </Box>
                    </FlexRow>
                  )}
                  itemCenter={(
                    <ButtonPrimary
                      padding="2px"
                      backgroundColor={color.iconOff}
                      fontSize={10}
                      title={currentItem.expired}
                    />
                  )}
                />
              )}
            />
          )}
        />
        {id ? id && null : (
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
                    pathname: `/event/create/${id}`
                  })}
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
                  pathname: `/organizer/list-member/${id}`
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
        )}
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({
  currentItem: state.dataRawStore.currentItem,
  currentData: state.organizerStore.list
})

export default connect(mapStateToProps)(withRouter(profile))
