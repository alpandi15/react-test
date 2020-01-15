import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import Bell from '@ant-design/icons/Bell'
import color from 'theme/color'
import HeaderNavigation from '../HeaderNavigation'

const useStyles = makeStyles(theme => (
  {
    primaryColor: {
      color: color.primaryColor
    },
    customBadge: {
      backgroundColor: color.primaryColor,
      color: color.white,
      padding: 0,
      alignItems: 'center',
      fontSize: '6px',
      maxHeight: '12px !important',
      minWidth: '12px !important',
      marginLeft: theme.spacing(0.62),
      marginRight: theme.spacing(0.7),
      marginTop: theme.spacing(0.8),
      justifyContent: 'center'
    }
  }
))

const HeaderNotification = ({
  headTitle,
  addIconRight1,
  addIconRight2,
  currentData
}) => {
  const classes = useStyles()
  return (
    <div>
      <HeaderNavigation
        title={headTitle}
        titleFontSize={18}
        titlePaddingLeft={12}
        iconRight={currentData && currentData.favorite > 0 ? (
          <Grid item>
            {addIconRight1}
            {addIconRight2}
            <IconButton href="/notification" aria-label="open drawer" className={classes.primaryColor}>
              <Badge
                max={20}
                badgeContent={currentData.favorite}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <Bell />
              </Badge>
            </IconButton>
          </Grid>
        ) : null}
      />
    </div>
  )
}

HeaderNotification.defaultProps = {
  headTitle: (
    <Grid item style={{ justifyContent: 'center' }}>
      <img src="/static/Icon/wiorganize-logo-icon.png"
        alt="icon"
        style={{
          display: 'flex',
          width: 38.2,
          height: 35
        }}
      />
    </Grid>
  )
}

export default HeaderNotification
