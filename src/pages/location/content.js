import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'
import { storeName } from './variables'

const Content = ({
  currentData
}) => {
  return (
    <div>
      <Box mx={2}>
        <Box mx={2}>
          <Typography color="primary">
            Recent Locations
          </Typography>
        </Box>
        {currentData ? (
          currentData.map((item, index) => {
            return (
              <Box key={index}>
                <ListItem>
                  <ListItemText
                    primary={item.country}
                    secondary={item.city}
                  />
                </ListItem>
              </Box>
            )
          })
        )
          : null
        }
      </Box>
    </div>
  )
}

const mapStateToProps = state => ({
  currentData: state[storeName].list
})

export default connect(mapStateToProps)(Content)
