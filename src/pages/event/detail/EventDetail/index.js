import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'
import SkeletonComponent from '@material-ui/lab/Skeleton'
import Skeleton from 'components/Layout/Skeleton'
import color from 'theme/color'
import { trimDescription } from 'utils/string'
import EventInfo from './EventInfo'

const useStyles = makeStyles({
  container: {
    paddingTop: '4em',
    paddingBottom: '1em'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  buttonLink: {
    height: '2em'
  },
  icon: {
    marginRight: '0.5em',
    color: color.primaryColor,
    fontSize: '3em'
  },
  info: {
    color: color.primaryColor
  },
  infoData: {
    color: color.primaryText
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  detail: {
    flexDirection: 'column',
    padding: '0.5em'
  },
  image: {
    borderTopRightRadius: '1em',
    borderTopLeftRadius: '1em',
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.2), 0px 1px 1px 1px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)',
    objectFit: 'cover',
    height: '16em',
    width: '100%'
  },
  imageSkeleton: {
    borderTopRightRadius: '1em',
    borderTopLeftRadius: '1em',
    objectFit: 'cover',
    height: '16em',
    width: '100%'
  },
  title: {
  },
  description: {
    fontSize: '0.8em',
    padding: '1em 0',
    paddingTop: '1em',
    paddingLeft: '0.5em',
    color: color.secondaryTextColor
  },
  moreDesc: {
    color: color.primaryColor
  }
})

const EventDetail = ({
  item
}) => {
  const styles = useStyles()
  if (!item) return null
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Skeleton
          loading={item && item.image && item.image.url}
          variant="rect"
          height="16em"
          width="100%"
          className={styles.imageSkeleton}
        >
          <CardMedia
            component="img"
            alt={item.name}
            image={item && item.image ? item.image.url : null}
            title={item.name}
            className={styles.image}
          />
        </Skeleton>
        <CardContent>
          <div className={styles.detail}>
            <Skeleton
              loading={item && item.name}
              variant="text"
              width="100%"
              height="3.5em"
              className={styles.title}
            >
              <h1 className={styles.title}>{item.name}</h1>
            </Skeleton>
            <Skeleton
              loading={item && item.description}
              skeleton={(
                <div>
                  <SkeletonComponent variant="text" width="100%" height="2em" className={styles.description} />
                  <SkeletonComponent variant="text" width="50%" height="2em" className={styles.description} />
                </div>
              )}
              className={styles.description}
            >
              <div className={styles.description}>
                {trimDescription(item.description)}
                <div className={styles.moreDesc}>See More</div>
              </div>
            </Skeleton>
          </div>
        </CardContent>
        <EventInfo item={item} />
      </Card>
    </div>
  )
}

EventDetail.propTypes = {
  item: PropTypes.object.isRequired
}

export default EventDetail
