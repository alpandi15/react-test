import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContainerRow from 'components/CardContainerRow'
import CardContainerColumn from 'components/CardContainerColumn'
import {
  currencyFormatter
} from 'utils/string'
import {
  dateMonth
} from 'utils/time'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  radius8: {
    borderRadius: 8
  }
})

const CustomCard = ({
  item,
  Icon
}) => {
  const classes = useStyles()
  return (
    <Box p={1}>
      <CardContainerRow
        alignItemsContainer="flex-start"
        xsItemLeft={12}
        itemLeft={(
          <CardContainerColumn
            styleContainer={{
              direction: 'ltr'
            }}
            xsItemCenter={12}
            itemLeft={(
              <CardContainerRow
                itemLeft={(
                  <Typography>
                    {item.location}
                  </Typography>
                )}
                itemCenter={(
                  <Typography fontWeight="bold">
                    {dateMonth(item.date)}
                  </Typography>
                )}
              />
            )}
            itemCenter={(
              <Box py={2}>
                <Typography color="primary" component="div">
                  {item.title}
                </Typography>
              </Box>
            )}
            itemRight={currencyFormatter(item.price)}
          />
        )}
        itemJustifyContentCenter="flex-end"
        itemCenter={(
          <CardContainerColumn
            styleContainer={{
              direction: 'rtl'
            }}
            itemLeft={Icon}
            itemCenter={(
              <Box mt={1}>
                <img
                  src={item.img}
                  alt="title"
                  className={classes.radius8}
                  width="120"
                  height="70"
                />
              </Box>
            )}
          />
        )}
      />
    </Box>
  )
}

export default CustomCard
