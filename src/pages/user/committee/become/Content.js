import React from 'react'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'

import CardContainerRow from 'components/CardContainerRow'
import color from 'theme/color'

const ContentInvited = ({ classes }) => (
  <div className={classes.row} style={{ paddingTop: 0 }}>
    <CardActions>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{
          backgroundColor: color.primaryColor,
          color: color.white,
          borderRadius: 6,
          paddingLeft: 18,
          paddingRight: 18,
          textTransform: 'none'
        }}
      >
        <Typography
          style={{
            color: color.white,
            fontSize: 12
          }}
        >
          Accept
        </Typography>
      </Button>
    </CardActions>
    <CardActions>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{
          backgroundColor: color.white,
          color: color.darkTextColor,
          borderRadius: 6,
          paddingLeft: 18,
          paddingRight: 18,
          textTransform: 'none'
        }}
      >
        <Typography
          style={{
            color: color.darkTextColor,
            fontSize: 12
          }}
        >
          Decline
        </Typography>
      </Button>
    </CardActions>
  </div>
)

const Content = ({
  classes,
  currentData
}) => {
  return (
    <div>
      {currentData ? (
        currentData.map((item, index) => {
          return (
            <Box key={index} my={2} mx={2.5}>
              <Card
                className={classes.radius8}
              >
                <CardActionArea>
                  <CardHeader
                    style={{ paddingBottom: 0 }}
                    avatar={(
                      <img
                        src={item.img}
                        alt="title"
                        className={classes.radius8}
                        width="70"
                        height="70"
                      />
                    )}
                    classes={{
                      action: classes.action,
                      title: classes.title,
                      subheader: classes.subheader
                    }}
                    title={item.text}
                    subheader={(
                      <CardContainerRow
                        justifyItemRight="flex-end"
                        overflowItemRight="hidden"
                        itemLeft={(
                          <div>
                            <Box>
                              <Typography
                                color="secondary"
                                variant="inherit"
                                fontSize={14}
                              >
                                {`${item.date}, ${item.location}`}
                              </Typography>
                            </Box>

                          </div>
                        )}
                      />
                    )}
                  />
                </CardActionArea>
                <Box mx={1.2} my={1}>
                  <CardContainerRow
                    itemCenter={(
                      <ContentInvited
                        classes={classes}
                      />
                    )}
                  />
                </Box>
              </Card>
            </Box>
          )
        })
      )
        : null
      }
    </div>
  )
}

export default Content
