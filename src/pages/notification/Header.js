import React from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Setting from '@ant-design/icons/Setting'
import IconButton from '@material-ui/core/IconButton'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import FlexRow from 'components/FlexRow'
import color from 'theme/color'

const useStyles = makeStyles({
  primaryColor: {
    color: color.primaryColor
  },
  darkTextColor: {
    color: color.darkTextColor
  },
  card: {
    backgroundColor: color.white,
    padding: 12,
    borderRadius: '12px',
    boxShadow: 'none'
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  radius8: {
    borderRadius: 8
  },
  border: {
    border: `1px solid ${color.grayButton}`
  },
  media: {
    borderRadius: '50%'
  },
  title: {
    color: color.primaryColor,
    fontSize: 18
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 14,
    fontWeight: 500
  },
  displayContents: {
    display: 'contents'
  },
  action: {
    color: color.darkTextColor,
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 500
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <HeaderBackNavigation
        headTitle="Notification"
        HeaderBackgroundColor={color.transparent}
        iconRight={(
          <FlexRow>
            <IconButton
              aria-label="open drawer"
              className={classes.primaryColor}
              onClick={() => Router.push({
                pathname: '/setting/notification'
              })}
            >
              <Setting />
            </IconButton>
          </FlexRow>
        )}
      />
    </div>
  )
}

export default Header
