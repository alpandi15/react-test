import React from 'react'
import MomentUtils from '@date-io/moment'
import { makeStyles } from '@material-ui/core/styles'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import color from 'theme/color'

const useStyles = makeStyles({
  input: {
    fontSize: 10,
    fontWeight: 'bold',
    cssUnderline: {
      '&:before': {
        borderBottomColor: color.primaryColor
      }
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const ReduxDatePicker = ({
  input,
  label,
  itemLeft,
  data,
  ...custom
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(data)

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={classes.row}>
          {itemLeft || null}
          <DatePicker
            onChange={(_, newValue) => setValue(newValue)}
            // format="ddd, MMM mm, YYYY"
            openTo="date"
            helperText=""
            format="MM/DD/YYYY"
            maxDate={new Date()}
            animateYearScrolling={false}
            value={value}
            autoOk
            InputProps={{ className: classes.input }}
            {...input}
            {...custom}
          />
        </div>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  )
}
export default ReduxDatePicker
