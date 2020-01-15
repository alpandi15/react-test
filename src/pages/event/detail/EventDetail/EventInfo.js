import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  CardContent
} from '@material-ui/core'
import color from 'theme/color'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import SkeletonComponent from '@material-ui/lab/Skeleton'
import Skeleton from 'components/Layout/Skeleton'
import { dateTimeToFull, normalizeTime } from 'utils/time'

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
    width: '100%',
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

const EventInfo = ({
  item
}) => {
  const styles = useStyles()
  if (!item) return null

  return (
    <div>
      <CardContent>
        <div className={styles.row}>
          <Skeleton
            loading={item && item.startDate}
            variant="rect"
            width="2em"
            height="2em"
            className={styles.icon}
          >
            <AccessTimeIcon className={styles.icon} />
          </Skeleton>
          <div className={styles.column}>
            <Skeleton
              loading={item && item.startDate}
              skeleton={(
                <div>
                  <SkeletonComponent variant="text" width="60%" height="1.7em" />
                  <SkeletonComponent variant="text" width="40%" height="1.7em" />
                </div>
              )}
              className={styles.infoData}
            >
              <div>
                <div className={styles.infoData}>{`${dateTimeToFull(item.startDate)} - ${dateTimeToFull(item.endDate)}`}</div>
                <div className={styles.infoData}>{`${normalizeTime(item.startTime)} - ${normalizeTime(item.endTime)}`}</div>
              </div>
            </Skeleton>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <div className={styles.row}>
          <Skeleton
            loading={item && item.startTime}
            variant="rect"
            width="2em"
            height="2em"
            className={styles.icon}
          >
            <MonetizationOnOutlinedIcon className={styles.icon} />
          </Skeleton>
          <div className={styles.column}>
            <Skeleton
              loading={item && item.startTime}
              skeleton={(
                <div>
                  <SkeletonComponent variant="text" width="30%" height="1.7em" />
                  <SkeletonComponent variant="text" width="40%" height="1.7em" />
                </div>
              )}
            >
              <div>
                <div className={styles.info}>Ticket Price</div>
                <div className={styles.infoData}>{`${normalizeTime(item.startTime)} - ${normalizeTime(item.endTime)}`}</div>
              </div>
            </Skeleton>
          </div>
        </div>
      </CardContent>
    </div>
  )
}

EventInfo.propTypes = {
  item: PropTypes.object.isRequired
}

export default EventInfo
