import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'

import clsx from 'clsx'
import {
  dateMonth,
  hourMinute
} from 'utils/time'
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

const ListTime = ({
  classes,
  data
}) => {
  const style = useStyles()

  return (
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
                  {dateMonth(item.time)}
                  <Box
                    style={{ fontSize: 10, lineHeight: 1.2, textAlign: 'center' }}
                    className={classes.column}
                  >
                    {hourMinute(item.time)}
                  </Box>
                </Box>
              </Card>
            </CardActionArea>
          </Box>
        )
      })}
    </Box>
  )
}

export default ListTime
