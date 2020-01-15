import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import FlexRow from 'components/FlexRow'
import color from 'theme/color'

const Location = ({
  data = [{
    location: 'Jl. Kapuas Dalam Medan Kota'
  }]
}) => {
  return (
    <Box my={2}>
      <FlexRow m="0px 1rem">
        <Box
          style={{
            backgroundColor: color.grayButton,
            justifyContent: 'center',
            textTransform: 'none',
            padding: 16,
            borderRadius: 10,
            fontSize: 12
          }}
        >
          <Typography
            style={{
              fontSize: 10,
              marginRight: 8,
              marginBottom: 8,
              color: color.darkTextColor
            }}
          >
            Location
          </Typography>
          <Typography
            style={{
              fontSize: 12,
              color: color.darkTextColor
            }}
          >
            {data[0].location}
          </Typography>
        </Box>
      </FlexRow>
    </Box>
  )
}

export default Location
