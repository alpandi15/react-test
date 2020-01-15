import React from 'react'
// icon
import IconButton from '@material-ui/core/IconButton'
import Heart from '@ant-design/icons/Heart'
import HeartFilled from '@ant-design/icons/HeartFilled'
import color from 'theme/color'

const FavoriteIcon = ({
  currentItem = false
}) => {
  const [like, setlike] = React.useState({
    like: currentItem
  })
  const handleChange = () => {
    setlike(!like)
  }
  return (
    <IconButton
      aria-label="like"
      style={{ padding: 0 }}
      onClick={() => handleChange()}
    >
      {like
        ? (<Heart style={{ color: color.primaryColor }} />)
        : (<HeartFilled style={{ color: color.google }} />)}
    </IconButton>
  )
}

export default FavoriteIcon
