import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import CardContainerRow from 'components/CardContainerRow'
import FlexRow from 'components/FlexRow'
import Button from '@material-ui/core/Button'

import color from 'theme/color'

const Title = ({ title }) => (
  <CardContainerRow
    itemJustifyContentRight="flex-end"
    itemLeft={(
      <Box mx={2}>
        <Typography
          component="span"
          style={{
            fontSize: 12,
            marginRight: 8,
            color: color.darkTextColor
          }}
        >
          {title}
        </Typography>
      </Box>
    )}
    itemRight={(
      <Box mr={2}>
        <Typography style={{
          fontSize: 10,
          color: color.darkTextColor
        }}
        >
          View all
        </Typography>
      </Box>
    )}
  />
)

const Asset = ({
  classes,
  data
}) => {
  return (
    <Box my={2}>
      <Title title="The Participants" />
      <Box
        style={{
          display: 'flex',
          overflowX: 'scroll'
        }}
      >
        <FlexRow m="1rem">
          <Box
            mr={1}
            className={classes.column}
            style={{
              backgroundColor: color.grayButton,
              textTransform: 'none',
              textAlign: 'center',
              justifyContent: 'center',
              padding: '10px 16px',
              borderRadius: 10,
              fontSize: 12
            }}
          >
            <CardContainerRow
              itemJustifyContentRight="flex-end"
              itemJustifyContent="center"
              itemLeft={(
                <Box mr={2}>
                  <Typography
                    style={{
                      fontSize: 12,
                      lineHeight: 1.2,
                      textAlign: 'center',
                      color: color.grayButtonText
                    }}
                  >
                    Registered
                  </Typography>
                </Box>
              )}
              itemRight={(
                <Typography
                  style={{
                    fontSize: 12,
                    lineHeight: 1.2,
                    textAlign: 'right',
                    color: color.darkTextColor
                  }}
                >
                  {data.length}
                </Typography>
              )}
            />
          </Box>
          <Box
            mr={1}
            className={classes.column}
            style={{
              backgroundColor: color.grayButton,
              textTransform: 'none',
              textAlign: 'center',
              justifyContent: 'center',
              padding: '10px 16px',
              borderRadius: 10,
              fontSize: 12
            }}
          >
            <CardContainerRow
              itemJustifyContentRight="flex-end"
              itemLeft={(
                <Box mr={2}>
                  <Typography
                    style={{
                      fontSize: 12,
                      lineHeight: 1.2,
                      textAlign: 'center',
                      color: color.grayButtonText
                    }}
                  >
                    Available
                  </Typography>
                </Box>
              )}
              itemRight={(
                <Typography
                  style={{
                    fontSize: 12,
                    lineHeight: 1.2,
                    textAlign: 'right',
                    color: color.darkTextColor
                  }}
                >
                  {data.length}
                </Typography>
              )}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonPrimary}
              style={{
                backgroundColor: color.primaryColor,
                color: color.white,
                padding: '10px 16px',
                textTransform: 'none',
                borderRadius: 10
              }}
            >
              <AddIcon className={classes.addIcon} />
              <Typography
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  textAlign: 'center'
                }}
              >
                Participant
              </Typography>
            </Button>
          </Box>
        </FlexRow>
      </Box>
    </Box>
  )
}

export default Asset
