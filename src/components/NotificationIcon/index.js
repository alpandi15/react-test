import React from 'react'
import Badge from '@material-ui/core/Badge'
import Bell from '@ant-design/icons/Bell'

class NotificationIcon extends React.Component {
  render () {
    const {
      currentData
    } = this.props

    return (
      <Badge
        max={20}
        badgeContent={currentData.favorite || currentData}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <Bell />
      </Badge>
    )
  }
}

export default NotificationIcon
