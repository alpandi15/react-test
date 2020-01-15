import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import CardContainerRow from 'components/CardContainerRow'

import CardActionArea from '@material-ui/core/CardActionArea'
import Divider from '@material-ui/core/Divider'

import Dollar from '@ant-design/icons/Dollar'
import ClockCircle from '@ant-design/icons/ClockCircle'

import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import {
  currencyFormatter
} from 'utils/string'
import {
  dateTime
} from 'utils/time'
import color from 'theme/color'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    margin: '12px 12px 0px 12px',
    padding: '0px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'// 16:9
  },
  flexEnd: {
    flexDirection: 'rtl'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  iconTitle: {
    color: color.primaryColor,
    fontSize: 12
  },
  iconSubheader: {
    color: color.darkTextColor,
    fontSize: 12
  }
}))

const Title = ({
  xs,
  my,
  mr,
  currentData,
  iconRight,
  FontWeight
}) => {
  const classes = useStyles()

  return (
    currentData ? (
      currentData.map((item, index) => {
        return (
          <Grid
            item
            xs={xs}
            key={index}
          >
            <Box
              my={my}
              mr={mr}
            >
              <Card
                className={classes.card}
              >
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title={item.title}
                />
                <CardContent style={{ padding: '12px 0px', display: 'flex', flexDirection: 'row' }}>
                  <Box mx={2} className={classes.column}>
                    <Box mb={1} className={classes.column}>
                      <Typography
                        color="secondary"
                        style={{ fontSize: '22px', fontWeight: FontWeight, lineHeight: 1.2 }}
                        className={classes.column}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                    <Typography
                      component="div"
                      color="secondary"
                      variant="inherit"
                      style={{ fontWeight: FontWeight }}
                    >
                      {`${item.content}`}
                      <Typography
                        component="span"
                        color="secondary"
                        variant="inherit"
                        style={{ fontWeight: FontWeight, color: color.primaryColor }}
                        onClick={() => {
                          Router.push({
                            pathname: '/user/event/detail-description'
                          })
                        }}
                      >
                        See More
                      </Typography>
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                {iconRight}
                <CardContainerRow
                  itemJustifyContent="center"
                  itemLeft={(
                    <CardActionArea>
                      <CardHeader
                        classes={{
                          title: classes.iconTitle,
                          subheader: classes.iconSubheader
                        }}
                        avatar={(
                          <ClockCircle style={{ fontSize: 24, color: color.primaryColor }} />
                        )}
                        title="Date & Time"
                        subheader={`${dateTime(item.time)}`}
                      />
                    </CardActionArea>
                  )}
                  itemCenter={(
                    <CardActionArea>
                      <CardHeader
                        classes={{
                          title: classes.iconTitle,
                          subheader: classes.iconSubheader
                        }}
                        avatar={(
                          <Dollar style={{ fontSize: 24, color: color.primaryColor }} />
                        )}
                        title="Price"
                        subheader={`${currencyFormatter(item.price)} - ${currencyFormatter(item.price)}`}
                      />
                    </CardActionArea>
                  )}
                />
              </Card>
            </Box>
          </Grid>
        )
      })
    )
      : null
  )
}

export default Title
