import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import PageInfo from 'components/Layout/PageInfo'
import color from 'theme/color'

const style = {
  container: {
    width: '100%',
    display: 'absolute'
  },
  title: {
    fontWeight: '700',
    color: color.primaryColor
  },
  selected: {
    '&$selected': {
      color: '#00DED6'
    }
  },
  logo: {
    height: '36px',
    width: '36px'
  },
  primaryColor: {
    color: color.primaryColor
  },
  darkTextColor: {
    color: color.darkTextColor
  },
  icon: {
    display: 'flex',
    alignItems: 'center'
  },
  appbar: {
    alignItems: 'center'
  }
}

const HideOnScroll = (props) => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

class PrimaryHeaderNavigation extends React.Component {
  render () {
    const {
      classes,
      title,
      subtitle,
      logo,
      iconRight,
      router,
      iconLeft = (
        <IconButton aria-label="open drawer" onClick={router} className={classes.darkTextColor}>
          <ChevronLeft />
        </IconButton>
      ),
      HeaderBackgroundColor,
      props
    } = this.props

    return (
      <div>
        <React.Fragment>
          <HideOnScroll {...props}>
            <AppBar elevation={0} style={{ backgroundColor: HeaderBackgroundColor }}>
              <Grid container wrap="nowrap">
                {iconLeft ? (
                  <Grid container item xs={2} sm>
                    {iconLeft}
                  </Grid>
                ) : null
                }
                {logo && (
                  <Grid container item sm alignItems="center">
                    <Button href="/">
                      <img
                        src="/static/Icon/wiorganize-logo-icon.png"
                        alt={title}
                        className={classes.logo}
                      />
                    </Button>
                  </Grid>
                )}
                <Grid container item sm justify="flex-end" direction="row">
                  {iconRight}
                </Grid>
              </Grid>
            </AppBar>
          </HideOnScroll>
        </React.Fragment>
        {title && (
          <PageInfo
            title={title}
            subtitle={subtitle}
          />
        )}
      </div>
    )
  }
}


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

PrimaryHeaderNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  HeaderBackgroundColor: PropTypes.string,
  router: PropTypes.func
}

PrimaryHeaderNavigation.defaultProps = {
  HeaderBackgroundColor: color.white,
  router: () => Router.back()
}

export default withStyles(style)(PrimaryHeaderNavigation)
