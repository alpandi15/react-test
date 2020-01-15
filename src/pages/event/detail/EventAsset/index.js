import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/core'
import Separator from 'components/FormField/Separator'
import { numberFormatter } from 'utils/string'
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

const EventAsset = ({
  list,
  loading
}) => {
  const styles = useStyles()
  return (
    <div>
      {list && list.length > 0 ? (
        <Separator
          label={`Asset (${numberFormatter(list.length)})`}
        />
      ) : null}
      <div className={styles.container}>
        {list && list.length > 0
          ? list.map((item, index) => {
            return (
              <GroupItem item={item} key={index} />
            )
          })
          : (
            loading && [1, 2, 3, 4].map((item, index) => {
              return (
                <GroupItemSkeleton item={item} key={index} />
              )
            })
          )}
      </div>
    </div>
  )
}

EventAsset.propTypes = {
  list: PropTypes.array
}

EventAsset.defaultProps = {
  list: []
}

export default EventAsset
