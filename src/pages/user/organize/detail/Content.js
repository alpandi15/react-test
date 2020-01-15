import React from 'react'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContainerRow from 'components/CardContainerRow'
import Router from 'next/router'
import {
  currencyFormatter
} from 'utils/string'

const Edit = () => (
  <IconButton>
    <MoreVertIcon />
  </IconButton>
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
                <CardHeader
                  action={(
                    <Edit />
                  )}
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
                  title={(
                    <CardActionArea onClick={
                      () => Router.push({
                        pathname: '/user/event/detail'
                      })
                    }
                    >
                      <Typography className={classes.title}>
                        {item.text}
                      </Typography>
                    </CardActionArea>
                  )}
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
                          <Box>
                            <Typography
                              color="secondary"
                              variant="inherit"
                              fontSize={14}
                            >
                              {`${currencyFormatter(item.price)}`}
                            </Typography>
                          </Box>
                        </div>
                      )}
                    />
                  )}
                />

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
