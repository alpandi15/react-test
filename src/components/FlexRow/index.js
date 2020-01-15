import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  buttonPrimary: {
    width: '100%',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const FlexRow = (props) => {
  const classes = useStyles()
  const { children, m } = props
  return (
    <Box
      className={classes.row}
      style={{
        margin: m
      }}
    >
      {children}
    </Box>
  )
}

export default FlexRow
