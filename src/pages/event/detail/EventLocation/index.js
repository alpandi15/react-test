import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'components/Layout/Skeleton'
import {
  makeStyles,
  Card,
  CardContent,
  Grid
} from '@material-ui/core'
import color from 'theme/color'

const useStyles = makeStyles({
  card: {
    backgroundColor: color.grayButton,
    color: color.secondaryText,
    maxHeight: '10em'
  },
  subtitle: {
    color: color.primaryText
  },
  CardContent: {

  },
  gridItem: {
    padding: '0.5em'
  }
})

const EventLocation = ({
  item
}) => {
  if (!item) return null
  const styles = useStyles()
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Skeleton
            loading={item && item.address}
            width="100%"
            height="10em"
          >
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <div>Location</div>
                <div className={styles.subtitle}>
                  <strong>{`${item.address || ''}${item.cityName ? `, ${item.cityName}` : ''}`}</strong>
                </div>
              </CardContent>
            </Card>
          </Skeleton>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem} />
      </Grid>
    </div>
  )
}

EventLocation.propTypes = {
  item: PropTypes.object.isRequired
}

export default EventLocation
