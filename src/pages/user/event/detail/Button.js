import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FlexRow from 'components/FlexRow'
import color from 'theme/color'

const useStyles = makeStyles({
  buttonPrimary: {
    width: '100%',
    padding: 10,
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

const ButtonEvent = () => {
  const classes = useStyles()
  return (
    <FlexRow m="0px 16px 16px 16px">
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonPrimary}
        style={{
          backgroundColor: color.primaryColor,
          color: color.white,
          marginRight: 16,
          textTransform: 'none'
        }}
      >
        <Typography
          style={{
            color: color.white,
            fontWeight: 'bold',
            fontSize: 12
          }}
        >
          Join Event
        </Typography>
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonPrimary}
        style={{
          backgroundColor: color.grayButton,
          color: color.darkTextColor,
          textTransform: 'none'
        }}
      >
        <Typography
          style={{
            color: color.darkTextColor,
            fontWeight: 'bold',
            fontSize: 12
          }}
        >
          Become Committee
        </Typography>
      </Button>
    </FlexRow>
  )
}

export default ButtonEvent
