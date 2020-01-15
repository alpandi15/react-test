import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import HeaderNavigation from 'components/HeaderNavigation'
import Badge from '@material-ui/core/Badge'
import Bell from '@ant-design/icons/Bell'
import LogoutModal from 'components/Header/LogoutModal'
import Logout from '@ant-design/icons/Logout'
import Setting from '@ant-design/icons/Setting'
import color from 'theme/color'

const useStyles = makeStyles({
  logoutColor: {
    color: color.logout
  },
  primaryColor: {
    color: color.primaryColor
  }
})

const data = {
  favorite: '15'
}

const App = ({ onLogout }) => {
  const classes = useStyles()
  const [modalVisible, setModalVisible] = React.useState(false)

  const handleModalOpen = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  return (
    <div>
      <LogoutModal open={modalVisible} onClose={handleModalClose} onOk={onLogout} />
      <HeaderNavigation
        iconLeft=""
        logo
        iconRight={(
          <div>
            <IconButton aria-label="open drawer" className={classes.logoutColor} onClick={() => handleModalOpen()}>
              <Logout />
            </IconButton>
            <IconButton href="/auth/edit-profile" aria-label="open drawer" className={classes.primaryColor}>
              <Setting />
            </IconButton>
            <IconButton href="/notification" aria-label="open drawer" className={classes.primaryColor}>
              <Badge
                max={20}
                badgeContent={data.favorite}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
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

export default App
