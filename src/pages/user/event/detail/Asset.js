import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import CardContainerRow from 'components/CardContainerRow'

import clsx from 'clsx'
import color from 'theme/color'

const useStyles = makeStyles({
  select: {
    '& :hover': {
      backgroundColor: color.primaryColor,
      color: color.white
    }
  },
  selected: {
    backgroundColor: color.primaryColor,
    color: color.white
  }
})

const Asset = ({
  classes,
  data
}) => {
  const style = useStyles()

  return (
    <Box>
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
              Asset
            </Typography>
            <Typography
              component="span"
              style={{
                fontSize: 12,
                color: color.iconOff
              }}
            >
              {`(${data.length})`}
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
      <Box
        style={{
          display: 'flex',
          overflowX: 'scroll'
        }}
      >
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              my={2}
              ml={2}
            >
              <CardActionArea className={
                clsx(classes.Radius12,
                  classes.title,
                  style.select)}
              >
                <Card
                  className={clsx(classes.Radius12, classes.column, classes.justifyContent, classes.listTime)}
                >
                  <Box
                    color="secondary"
                    style={{ fontSize: 22, lineHeight: 1.2, textAlign: 'center' }}
                    className={clsx(classes.column, classes.padding12)}
                  >
                    {item.name}
                    <Box
                      style={{ fontSize: 10, lineHeight: 1.2, textAlign: 'center' }}
                      className={classes.column}
                    >
                      {item.name}
                    </Box>
                  </Box>
                </Card>
              </CardActionArea>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Asset
