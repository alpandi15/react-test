import React from 'react'
import PropTypes from 'prop-types'
import Separator from 'components/FormField/Separator'
import Skeleton from 'components/Layout/Skeleton'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import { numberFormatter } from 'utils/string'
import CardParticipant from './CardParticipant'

const useStyles = makeStyles({
  gridItem: {
    padding: '0.5em'
  }
})

const EventParticipant = ({
  item
}) => {
  if (!item) return null
  const styles = useStyles()
  return (
    <div>
      <Separator
        label="Participants"
      />
      <Grid container>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Skeleton
            loading={item && item.address}
            width="100%"
            height="10em"
          >
            <CardParticipant title="Registered" value={numberFormatter(item.registeredTicket)} />
          </Skeleton>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Skeleton
            loading={item && item.address}
            width="100%"
            height="10em"
          >
            <CardParticipant title="Available" value={numberFormatter(item.availableTicket)} />
          </Skeleton>
        </Grid>
      </Grid>
    </div>
  )
}

EventParticipant.propTypes = {
  item: PropTypes.object.isRequired
}

export default EventParticipant
