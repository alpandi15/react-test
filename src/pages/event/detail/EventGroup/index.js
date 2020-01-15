import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/core'
import GroupItem from './GroupItem'
import GroupItemSkeleton from './GroupItemSkeleton'

const useStyles = makeStyles({
  container: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'scroll',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
})

const EventGroup = ({
  list
}) => {
  const styles = useStyles()
  if (!list) return null

  return (
    <div className={styles.container}>
      {list && list.length > 0
        ? list.map((item, index) => {
          return (
            <GroupItem item={item} key={index} />
          )
        })
        : (
          [1, 2, 3, 4].map((item, index) => {
            return (
              <GroupItemSkeleton item={item} key={index} />
            )
          })
        )}
    </div>
  )
}

EventGroup.propTypes = {
  list: PropTypes.array
}

EventGroup.defaultProps = {
  list: []
}

export default EventGroup
