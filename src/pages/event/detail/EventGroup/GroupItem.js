import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Button, Typography } from '@material-ui/core'
import { normalizeTime, dateMonth } from 'utils/time'
import { getById } from 'actions/event/eventAction'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  container: {
    padding: '0em 0.5em'
  },
  date: {
    fontWeight: 'bold'
  },
  button: {
    width: '10em',
    height: '5em'
  },
  buttonContainer: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'center'
  }
})

const GroupItem = ({
  item,
  dispatch,
  loading
}) => {
  const styles = useStyles()
  const router = useRouter()
  const onSubmit = () => {
    if (item.id !== router.query.id && item.id && !loading) {
      const href = `/event/detail?id=${item.id}&organizerId=${router.query.organizerId}`
      router.push(href)
      dispatch(getById(item.id, router.query.organizerId))
    }
  }

  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        color={router.query && Number(router.query.id) === item.id ? 'primary' : 'default'}
        onClick={onSubmit}
        className={styles.button}
      >
        <div className={styles.buttonContainer}>
          <Typography variant="h6" className={styles.date}>
            {dateMonth(item.startDate)}
          </Typography>
          <Typography className={styles.time}>
            {normalizeTime(item.startTime)}
          </Typography>
        </div>
      </Button>
    </div>
  )
}

GroupItem.propTypes = {
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  loading: state.eventStore.loading
})

export default connect(mapStateToProps)(GroupItem)
