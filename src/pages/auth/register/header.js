import React from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import HeaderNavigation from 'components/HeaderNavigation'
import color from 'theme/color'

const styles = () => ({
  buttonLogin: {
    fontWeight: 'bold',
    fontSize: 14
  }
})

const Header = ({ classes }) => {
  return (
    <div className={classes.container}>
      <HeaderNavigation
        title="Register Now"
        subtitle="Lets make some amazing event together"
        logo
        HeaderBackgroundColor={color.white}
        titleFontSize={18}
        titlePaddingLeft={20}
        titlePaddingRight={20}
        iconRight={(
          <Grid item xs={4}>
            <Box py={2}>
              <Button href="/auth/login" style={{ textTransform: 'none' }}>
                <Typography color="primary" className={classes.buttonLogin}>
                  Sign In
                </Typography>
              </Button>
            </Box>
          </Grid>
        )}
      />
    </div>
  )
}

export default withStyles(styles)(Header)
