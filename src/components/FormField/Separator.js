import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles({
  label: {
    marginTop: '2em'
  }
})

const Separator = ({ label }) => {
  const classes = useStyle()

  return (
    <div className={classes.label}>
      <Typography variant="inherit" component="strong">
        {label}
      </Typography>
    </div>
  )
}

Separator.propTypes = {
  label: PropTypes.string.isRequired
}

export default Separator
