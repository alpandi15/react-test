import React from 'react'
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'

import CustomCard from 'components/CustomCard'
import FavoriteIcon from 'components/FavoriteIcon'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  radius8: {
    borderRadius: 8
  }
})

const Content = ({
  currentData
}) => {
  const classes = useStyles()
  return (
    <div>
      {currentData ? (
        currentData.map((item, index) => {
          return (
            <Box key={index} my={2} mx={2.5}>
              <Card
                className={classes.radius8}
              >
                <CustomCard
                  item={item}
                  Icon={(
                    <FavoriteIcon />
                  )}
                />
              </Card>
            </Box>
          )
        })
      )
        : null
      }
    </div>
  )
}

const mapStateToProps = state => ({
  currentData: state.dataRawStore.list
})

export default connect(mapStateToProps)(Content)
