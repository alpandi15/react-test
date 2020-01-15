import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CardContainerRow from 'components/CardContainerRow'
import Typography from '@material-ui/core/Typography'
import color from 'theme/color'
import clsx from 'clsx'

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#00DED6',
    borderRadius: '10px'
  }
})(Tabs)

const AntTab = withStyles()(props => <Tab disableRipple {...props} />)

const styles = () => ({
  customBadgeSquare: {
    backgroundColor: color.iconOff,
    color: color.white,
    borderRadius: 5,
    fontSize: 10,
    padding: '0 2px',
    minWidth: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'none',
    position: 'relative'
  },
  active: {
    backgroundColor: color.primaryColor,
    color: color.white
  },
  align: {
    verticalAlign: 'text-bottom'
  }
})

class TabsNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = (item) => {
    this.setState({ value: item.value })
    Router.push({
      pathname: `${item.link}`,
      query: { tab: item.value }
    })
  }

  render () {
    const { value } = this.state
    const {
      list,
      addBorderBottom,
      addFontSize,
      classes,
      max = 999
    } = this.props

    return (
      <AntTabs value={value} aria-label="ant example" style={{ borderBottom: addBorderBottom }}>
        {
          list.map((item, index) => {
            return (
              <AntTab
                key={index}
                label={(
                  <div>
                    <CardContainerRow
                      itemLeft={(
                        <Typography style={{ fontSize: addFontSize }}>
                          {item.title}
                        </Typography>
                      )}
                      itemCenter={
                        item.count >= 1 ? (
                          <div key={index} className={clsx(classes.customBadgeSquare, (value === index && classes.active))}>
                            {
                              item.count < max ? item.count : `+${max}`
                            }
                          </div>
                        ) : null
                      }
                    />
                  </div>
                )}
                onClick={() => this.handleChange(item)}
              />
            )
          })
        }
      </AntTabs>
    )
  }
}

TabsNavigation.propTypes = {
  addBorderBottom: PropTypes.string,
  addFontSize: PropTypes.string
}

TabsNavigation.defaultProps = {
  addBorderBottom: '1px solid #E0E0E0',
  addFontSize: '12px'
}

export default withStyles(styles)(TabsNavigation)
