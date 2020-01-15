import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { sprintf } from 'sprintf-js'
import color from 'theme/color'

const styles = ({
  timeCont: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center'
  },
  timeTxt: {
    color: color.secondaryText,
    marginVertical: 2
  },
  timeInnerCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  digitCont: {
    borderRadius: 5,
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  doubleDigitCont: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  digitTxt: {
    color: color.textIcons,
    fontWeight: 'bold',
    fontVariant: 'tabular-nums'
  },
  separatorTxt: {
    backgroundColor: color.transparent,
    fontWeight: 'bold'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const DEFAULT_SEPARATOR_STYLE = { color: color.textIcons }
const DEFAULT_TIME_TO_SHOW = ['D', 'H', 'M', 'S']
const DEFAULT_TIME_LABELS = {
  d: 'Days',
  h: 'Hours',
  m: 'Minutes',
  s: 'Seconds'
}

class CountDown extends React.Component {
  static propTypes = {
    timeLabels: PropTypes.object,
    separatorStyle: PropTypes.object,
    timeToShow: PropTypes.array,
    showSeparator: PropTypes.bool,
    size: PropTypes.number,
    until: PropTypes.number,
    onChange: PropTypes.func,
    onPress: PropTypes.func,
    onFinish: PropTypes.func,
    running: PropTypes.bool
  };

  constructor (props) {
    super(props)
    const { until } = props
    this.timer = setInterval(this.updateTimer, 1000)
    this.state = {
      until: Math.max(until, 0),
      lastUntil: null,
      wentBackgroundAt: null
    }
  }

  componentWillReceiveProps (nextProps) {
    const { until } = this.props
    if (until !== nextProps.until) {
      const { until } = this.state
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        lastUntil: until,
        until: Math.max(nextProps.until, 0)
      })
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  _handleAppStateChange = (currentAppState) => {
    const { running } = this.props
    const { until, wentBackgroundAt } = this.state
    if (currentAppState === 'active' && wentBackgroundAt && running) {
      const diff = (Date.now() - wentBackgroundAt)
      this.setState({
        lastUntil: until,
        until: Math.max(0, until - diff)
      })
    }
    if (currentAppState === 'background') {
      this.setState({ wentBackgroundAt: Date.now() })
    }
  }

  getTimeLeft = () => {
    const { until } = this.state
    return {
      seconds: until % 60,
      minutes: parseInt(until / 60, 10) % 60,
      hours: parseInt(until / (60 * 60), 10) % 24,
      days: parseInt(until / (60 * 60 * 24), 10)
    }
  };

  updateTimer = () => {
    const { running, onFinish, onChange } = this.props
    const { lastUntil, until } = this.state

    if (lastUntil === until || !running) {
      return
    }
    if (until === 1 || until <= 0 || (until === 0 && lastUntil !== 1)) {
      if (onFinish) {
        onFinish()
      }
      if (onChange) {
        onChange()
      }
    }

    if (until === 0) {
      this.setState({ lastUntil: 0, until: 0 })
    } else {
      if (onChange) {
        onChange()
      }
      this.setState({ lastUntil: until, until: until - 1 })
    }
  };

  renderDigit = (d) => {
    const { size } = this.props
    return (
      <Box
        style={{
          padding: size,
          backgroundColor: color.textIcons,
          borderColor: color.iconOff,
          borderRadius: 8
        }}
        mx={0.6}
        border={1}
      >
        <Typography styles={{ fontSize: size, textAlign: 'center' }}>
          {d}
        </Typography>
      </Box>
    )
  };

  renderLabel = (label) => {
    const { size } = this.props
    if (label) {
      return (
        <Typography style={{ fontSize: size / 1.4 }}>
          {label}
        </Typography>
      )
    }
  };

  renderDoubleDigits = (label, digits) => {
    return (
      <Box style={styles.doubleDigitCont}>
        <Box style={styles.timeInnerCont}>
          {this.renderDigit(digits)}
        </Box>
        {this.renderLabel(label)}
      </Box>
    )
  };

  renderSeparator = () => {
    const { separatorStyle, size } = this.props
    return (
      <Box style={styles.center}>
        <Typography style={[
          styles.separatorTxt,
          { fontSize: size * 1.2 },
          separatorStyle
        ]}
        >
          {':'}
        </Typography>
      </Box>
    )
  };

  renderCountDown = () => {
    const {
      timeToShow,
      timeLabels,
      showSeparator,
      onPress,
      justifyContent
    } = this.props
    const {
      days, hours, minutes, seconds
    } = this.getTimeLeft()
    const newTime = sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':')
    const Component = onPress ? Box : Box

    return (
      <Component
        style={styles.timeCont}
        justifyContent={justifyContent}
      // onPress={onPress}
      >
        {timeToShow.includes('D') ? this.renderDoubleDigits(timeLabels.d, newTime[0]) : null}
        {showSeparator && timeToShow.includes('D') && timeToShow.includes('H') ? this.renderSeparator() : null}
        {timeToShow.includes('H') ? this.renderDoubleDigits(timeLabels.h, newTime[1]) : null}
        {showSeparator && timeToShow.includes('H') && timeToShow.includes('M') ? this.renderSeparator() : null}
        {timeToShow.includes('M') ? this.renderDoubleDigits(timeLabels.m, newTime[2]) : null}
        {showSeparator && timeToShow.includes('M') && timeToShow.includes('S') ? this.renderSeparator() : null}
        {timeToShow.includes('S') ? this.renderDoubleDigits(timeLabels.s, newTime[3]) : null}
      </Component>
    )
  };

  render () {
    return (
      <Box>
        {this.renderCountDown()}
      </Box>
    )
  }
}

CountDown.defaultProps = {
  timeLabels: DEFAULT_TIME_LABELS,
  separatorStyle: DEFAULT_SEPARATOR_STYLE,
  timeToShow: DEFAULT_TIME_TO_SHOW,
  showSeparator: false,
  until: 0,
  size: 15,
  running: true
}

export default withStyles(styles)(CountDown)
