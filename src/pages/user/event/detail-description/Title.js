import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import color from 'theme/color'
import { dateTime } from 'utils/time'

function Title ({
  item,
  classes
}) {
  return (
    <div>
      <Box mx={1}>
        <Box className={classes.column}>
          <Typography
            style={{ fontSize: 22, color: color.primaryColor }}
          >
            {item.title}
          </Typography>
        </Box>
        <Box className={classes.column}>
          <Typography
            style={{ fontSize: 12, color: color.darkTextColor }}
          >
            {dateTime(item.time)}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Title
