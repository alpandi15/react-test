import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Button, Typography } from '@material-ui/core'
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
    height: '8em'
  },
  buttonContainer: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'center'
  },
  time: {
    fontSize: '1em'
  },
  image: {
    width: '2em',
    height: '2em'
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
      const href = `/event/asset/${item.id}`
      router.push(href, href, { target: '__blank', shallow: true })
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
          <div>
            <img src={item.name} alt="Asset" className={styles.image} />
          </div>
          <div>
            <Typography variant="subtitle1" component="div" className={styles.time}>
              {item.name}
            </Typography>
          </div>
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
