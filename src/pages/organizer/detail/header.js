import React from 'react'
import Router, { withRouter } from 'next/router'
import HeaderNavigation from 'components/HeaderNavigation'
import Box from '@material-ui/core/Box'
// icon
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Mail from '@ant-design/icons/Mail'
import ShareAlt from '@ant-design/icons/ShareAlt'
import Search from '@ant-design/icons/Search'
import Setting from '@ant-design/icons/Setting'
import NotificationIcon from 'components/NotificationIcon'
import IconButton from '@material-ui/core/IconButton'

import Drawer from 'components/Drawer'
import color from 'theme/color'

const listDrawer = [
  {
    name: 'Contact Organizer',
    link: '/organizer/contact',
    icon: (
      <Box ml={2}>
        <Mail style={{ color: color.primaryColor, fontSize: 22 }} />
      </Box>
    )
  },
  {
    name: 'Share Organizer',
    link: '/organizer/share',
    icon: (
      <Box ml={2}>
        <ShareAlt style={{ color: color.primaryColor, fontSize: 22 }} />
      </Box>
    )
  }
]

const listHeader = [
  {
    name: 'search',
    link: '/search',
    icon: <Search />
  },
  {
    name: 'setting',
    link: '/setting/organize',
    icon: <Setting />
  },
  {
    name: 'notification',
    link: '/notification',
    icon: <NotificationIcon currentData={14} />
  }
]

const Header = ({
  router,
  id = router.query.id
}) => {
  return (
    <div>
      <HeaderNavigation
        router={() => Router.push({
          pathname: '/user-profile'
        })}
        iconRight={
          id ? (
            <Drawer
              placement="bottom"
              list={listDrawer}
            >
              <IconButton>
                <MoreVertIcon color="secondary" />
              </IconButton>
            </Drawer>
          )
            : (
              <div>
                {listHeader && listHeader.map((item, index) => {
                  return (
                    <IconButton
                      key={index}
                      aria-label={item.name}
                      color="primary"
                      onClick={() => Router.push({
                        pathname: item.link
                      })}
                    >
                      {item.icon}
                    </IconButton>
                  )
                })}
              </div>
            )}
      />
    </div>
  )
}

export default withRouter(Header)
