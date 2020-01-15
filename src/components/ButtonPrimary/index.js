import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import color from 'theme/color'

const ButtonPrimary = ({
  icon,
  title,
  padding,
  onClick,
  fontSize,
  color,
  backgroundColor,
  href
}) => {
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        style={{
          padding,
          color,
          backgroundColor,
          borderRadius: 50,
          textTransform: 'none'
        }}
        href={href}
        onClick={onClick}
      >
        {icon}
        <Typography style={{ fontWeight: 500, fontSize }}>
          {title}
        </Typography>
      </Button>
    </div>
  )
}

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
}

ButtonPrimary.defaultProps = {
  href: '',
  title: 'Add',
  color: color.white,
  backgroundColor: color.primaryColor
}

export default ButtonPrimary
