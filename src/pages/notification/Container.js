import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import color from 'theme/color'
import Header from './Header'
import Content from './Content'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  primaryColor: {
    color: color.primaryColor
  },
  darkTextColor: {
    color: color.darkTextColor
  },
  card: {
    backgroundColor: color.white,
    padding: 12,
    borderRadius: '12px',
    boxShadow: 'none'
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  radius8: {
    borderRadius: 8
  },
  border: {
    border: `1px solid ${color.grayButton}`
  },
  media: {
    borderRadius: '50%'
  },
  title: {
    color: color.primaryColor,
    fontSize: 18
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 14,
    fontWeight: 500
  },
  displayContents: {
    display: 'contents'
  },
  action: {
    color: color.darkTextColor,
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 500
  }
})

const title = (term) => {
  switch (term) {
    case 1:
      return 'This Week'
    case 2:
      return 'This Month'
    default:
      return 'This Week'
  }
}

class Notification extends React.Component {
  render () {
    const {
      list
    } = this.props
    return (
      <div>
        <Header />
        <Box m={14} mx={2}>
          {list.map((item, index) => {
            return (
              <Box
                key={index}
              >
                <Typography
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: color.normalColor
                  }}
                >
                  {title(item.term)}
                </Typography>
                <Box
                  key={index}
                  my={2}
                >
                  <Content
                    key={index}
                    item={item}
                  />
                </Box>
              </Box>
            )
          })}
        </Box>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.dataRawStore.list
})

export default withStyles(styles)(connect(mapStateToProps)(Notification))
