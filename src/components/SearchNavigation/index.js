import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Search from '@ant-design/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import color from 'theme/color'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: color.primaryColor
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: color.iconOff
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: color.primaryColor
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: color.primaryColor
      }
    }
  }
})(TextField)

export default function SearchNavigation ({
  title,
  colorTitle,
  fontSizeTitle,
  placeholder,
  onSubmit,
  input,
  ...other
}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={2}>
          <Typography style={{ color: colorTitle, fontSize: fontSizeTitle, fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mb={3}>
          <CssTextField
            id="input-with-icon-textfield"
            placeholder={placeholder}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={onSubmit}>
                  <Search style={{ color: color.iconOff }} />
                </InputAdornment>
              ),
              autoFocus: true
            }}
            {...input}
            {...other}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
