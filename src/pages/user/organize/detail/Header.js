import React from 'react'
import Router from 'next/router'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Search from '@ant-design/icons/Search'
import Bell from '@ant-design/icons/Bell'
import Setting from '@ant-design/icons/Setting'

const Header = ({
  classes
}) => {
  return (
    <div>
      <HeaderBackNavigation
        router={() => Router.push({
          pathname: '/user/organize/choose',
          query: { tab: 0 }
        })}
        iconRight={(
          <div className={classes.row}>
            <IconButton
              aria-label="open drawer"
              className={classes.primaryColor}
            >
              <Search />
            </IconButton>
            <IconButton
              aria-label="open drawer"
              className={classes.primaryColor}
            >
              <Setting />
            </IconButton>
            <IconButton
              aria-label="open drawer"
              className={classes.primaryColor}
            >
              <Badge
                max={20}
                badgeContent={15}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                classes={{ badge: classes.customBadge }}
              >
                <Bell />
              </Badge>
            </IconButton>
          </div>
        )}
      />
    </div>
  )
}

export default Header
