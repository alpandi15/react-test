import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Content from './Content'

const styles = () => ({
  root: {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingBottom: '2em'
  }
})

class ContentContainer extends Component {
  render () {
    const { classes, currentItem } = this.props

    return (
      <div className={classes.root}>
        <Content currentItem={currentItem} />
      </div>
    )
  }
}

ContentContainer.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(ContentContainer)
