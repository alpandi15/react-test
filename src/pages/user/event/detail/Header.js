import React from 'react'
import Router from 'next/router'
import HeaderBackNavigation from 'components/HeaderBackNavigation'
import IconButton from '@material-ui/core/IconButton'
import ShareAlt from '@ant-design/icons/ShareAlt'

const Header = ({
  classes
}) => {
  return (
    <div>
      <HeaderBackNavigation
        router={() => Router.push({
          pathname: '/user/organize/detail',
          query: { tab: 0 }
        })}
        iconRight={(
          <div className={classes.row}>
            <IconButton
              aria-label="open drawer"
              className={classes.primaryColor}
            >
              <ShareAlt />
            </IconButton>
          </div>
        )}
        classes={classes}
      />
    </div>
  )
}

export default Header
