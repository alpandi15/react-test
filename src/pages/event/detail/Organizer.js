import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles, Button } from '@material-ui/core'
import Skeleton from 'components/Layout/Skeleton'
import color from 'theme/color'

const useStyles = makeStyles({
  container: {
    height: '3em',
    paddingTop: '4em',
    paddingBottom: '1em',
    display: 'flex',
    flexDirection: 'row'
  },
  buttonLink: {
    height: '2em'
  },
  detail: {
    flexDirection: 'column'
  },
  image: {
    borderRadius: '0.5em',
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.2), 0px 1px 1px 1px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)',
    objectFit: 'cover',
    height: '4em',
    width: '4em'
  },
  imageSkeleton: {
    borderRadius: '0.5em',
    objectFit: 'cover',
    height: '4em',
    width: '4em'
  },
  title: {
    fontWeight: 'bold',
    color: color.primaryColor
  },
  subtitle: {
    paddingLeft: '0.5em',
    color: color.secondaryTextColor
  }
})

const Organizer = ({
  item
}) => {
  const styles = useStyles()
  if (!item) return null
  return (
    <div className={styles.container}>
      <Skeleton
        loading={item.image && item.image.url}
        variant="rect"
        height="4em"
        width="4em"
        className={styles.imageSkeleton}
      >
        <img
          src={item.image && item.image.url ? item.image.url : null}
          alt="Organizer"
          className={styles.image}
        />
      </Skeleton>
      <div className={styles.detail}>
        <Skeleton
          loading={item.name}
          variant="text"
          width="10em"
          style={{ marginLeft: '0.5em' }}
        >
          <Button
            href={`/organizer/detail/${item.id}`}
            style={{ textTransform: 'none' }}
            className={styles.buttonLink}
          >
            <div className={styles.title}>{item.name}</div>
          </Button>
        </Skeleton>
        <Skeleton
          loading={item.name}
          variant="text"
          width="6em"
          height="2em"
          className={styles.buttonLink}
          style={{ marginLeft: '0.5em' }}
        >
          <div className={styles.subtitle}>Organizer</div>
        </Skeleton>
      </div>
    </div>
  )
}

Organizer.propTypes = {
  item: PropTypes.object
}

Organizer.defaultProps = {
  item: {}
}

export default connect()(Organizer)
