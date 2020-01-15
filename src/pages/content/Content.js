import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ReactHtmlParser from 'react-html-parser'
import moment from 'moment'
import color from 'theme/color'

const styles = theme => ({
  container: {
    backgroundColor: color.textIcons
  },
  content: {
    padding: '1em 1em',
    [theme.breakpoints.up('sm')]: {
      padding: '1em 2em'
    }
  },
  contentText: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4em',
    textAlign: 'left'
  },
  titleText: {
    margin: '0px 14px',
    color: color.primaryColor
  },
  image: {
    maxHeight: 200
  },
  underlined: {
    width: '55px',
    height: '4px',
    margin: '8px auto 0',
    display: 'block',
    backgroundColor: '#ff3366'
  }
})

class Content extends Component {
  render () {
    const { classes, currentItem } = this.props

    if (currentItem && currentItem.id) {
      return (
        <div className={classes.container}>
          <div className={classes.content}>
            <Box mt={7} mb={12}>
              <Typography variant="h3" gutterBottom marked="center" align="center">
                {currentItem.title}
              </Typography>
              <div className={classes.underlined} />
            </Box>
          </div>
          <div className={classes.content}>
            {`Last Modified: ${moment(currentItem.updatedAt).format('LLL')}`}
          </div>
          <div className={classes.content}>
            {ReactHtmlParser(currentItem.content)}
          </div>
        </div>
      )
    }
    return null
  }
}

Content.propTypes = {
  currentItem: PropTypes.object
}

export default withStyles(styles)(Content)
