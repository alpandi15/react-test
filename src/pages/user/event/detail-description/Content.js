import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Content = ({
  currentData
}) => {
  return (
    <div>
      {currentData ? (
        currentData.map((item, index) => {
          return (
            <Box key={index} my={2} mx={3}>
              <Typography>
                {item.content}
              </Typography>
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
