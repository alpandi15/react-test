import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { withAuthSync } from 'components/Security/auth'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import {
  helmet
} from './variables'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
})

const CreateEvent = ({
  classes,
  title
}) => {
  return (
    <div className={classes.root}>
      <CustomHelmet
        title={title}
      />
      <Container />
    </div>
  )
}

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

CreateEvent.defaultProps = {
  title: helmet
}


export default withAuthSync(withStyles(styles)(CreateEvent))
