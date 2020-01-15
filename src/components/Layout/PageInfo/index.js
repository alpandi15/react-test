import React from 'react'
import Box from '@material-ui/core/Box'
import color from 'theme/color'
import { APPNAME } from 'constants'

const PageInfo = ({ title = APPNAME, subtitle }) => {
  return (
    <Box py={8} px={3}>
      {title && (
        <Box fontSize={26} fontWeight={700} color={color.primaryColor}>
          {title}
        </Box>
      )}
      {subtitle && (
        <Box fontWeight={500} fontSize={16} color={color.dividerColor}>
          {subtitle}
        </Box>
      )}
    </Box>
  )
}

export default PageInfo
