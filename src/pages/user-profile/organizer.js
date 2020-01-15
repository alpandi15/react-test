import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import CardContainerRow from 'components/CardContainerRow'
import CardContainerColumn from 'components/CardContainerColumn'
import ButtonPrimary from 'components/ButtonPrimary'
import color from 'theme/color'
import { Capitalize } from 'utils/string'
import { getDateDiff } from 'utils/time'

const useStyles = makeStyles(theme => ({
  Icon: {
    marginRight: theme.spacing(1)
  }
}))

const Organizer = ({
  user,
  currentItem
}) => {
  const classes = useStyles()

  return (
    <div>
      {(typeof currentItem.organizer === 'object' && currentItem.organizer !== null && currentItem.organizer !== undefined && currentItem.organizer.id !== null && currentItem.organizer.id !== undefined)
        ? (typeof currentItem.organizer === 'object' && currentItem.organizer !== null && currentItem.organizer !== undefined && currentItem.organizer.id !== null && currentItem.organizer.id !== undefined)
        && (
          <Box p={2}>
            <CardContainerRow
              itemLeft={(
                <Typography color="primary" style={{ fontSize: 15 }}>
                  Organizer
                </Typography>
              )}
            />
            <Box pb={2}>
              <CardContainerRow
                itemJustifyContentLeft="flex-start"
                itemJustifyContentCenter="flex-end"
                itemLeft={(
                  <Typography color="inherit" style={{ fontSize: 20 }}>
                    {currentItem.organizer.name}
                  </Typography>
                )}
                itemCenter={
                  (typeof currentItem.facility === 'object' && currentItem.facility !== null && currentItem.facility !== undefined && currentItem.facility.id !== null && currentItem.facility.id !== undefined)
                    ? (typeof currentItem.facility === 'object' && currentItem.facility !== null && currentItem.facility !== undefined && currentItem.facility.id !== null && currentItem.facility.id !== undefined) && (
                      <CardContainerRow
                        itemLeft={(
                          <img src="/static/Icon/diamond.svg"
                            alt="diamond"
                            style={{
                              display: 'flex',
                              width: 20,
                              height: 20
                            }}
                          />
                        )}
                        itemCenter={(
                          <Box mr={1.5} ml={0.5}>
                            <Typography style={{ color: color.orange }}>
                              {Capitalize(currentItem.facility.name)}
                            </Typography>
                          </Box>
                        )}
                        itemRight={(
                          <ButtonPrimary
                            padding="2px"
                            backgroundColor={color.iconOff}
                            fontSize={10}
                            title={getDateDiff(currentItem.facility.now, currentItem.facility.expired)}
                          />
                        )}
                      />
                    ) : (
                      <ButtonPrimary
                        href="/organizer/upgrade"
                        color={color.white}
                        backgroundColor={color.orange}
                        title="Upgrade"
                      />
                    )}
              />
            </Box>
            <CardContainerRow
              itemJustifyContent="center"
              itemLeft={(
                <ButtonPrimary
                  padding="8px 2em"
                  href={`/event/create/${user.organizeId}`}
                  icon={(
                    <AddIcon className={classes.addIcon} />
                  )}
                  title="Events"
                />
              )}
              itemCenter={(
                <ButtonPrimary
                  padding="8px 2em"
                  href="/organizer/detail?tab=0"
                  color={color.primaryColor}
                  backgroundColor={color.white}
                  title="Organizer"
                />
              )}
            />
          </Box>
        )
        : (
          <Box p={2}>
            <CardContainerColumn
              onContainer
              itemJustifyContent="center"
              itemLeft={(
                <img src="/static/Icon/organization.png"
                  alt="banner-organization"
                />
              )}
              itemCenter={(
                <Box pt={2}>
                  <ButtonPrimary
                    icon={(
                      <AddIcon className={classes.addIcon} />
                    )}
                    href="/organizer/create"
                    title="Organizer"
                  />
                </Box>
              )}
            />
          </Box>
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.dataRawStore.user,
  currentItem: state.organizerStore.currentItem
})

export default connect(mapStateToProps)(Organizer)
