import React from 'react'
import PropTypes from 'prop-types'
import HeaderNavigation from 'components/HeaderNavigation'
import { makeStyles } from '@material-ui/core'
import Organizer from './Organizer'
import EventDetail from './EventDetail'
import EventGroup from './EventGroup'
import EventLocation from './EventLocation'
import EventParticipant from './EventParticipant'
import EventAsset from './EventAsset'
import BottomButton from './BottomButton'

const useStyles = makeStyles({
  container: {
    padding: '1em'
  }
})

const Container = ({
  loading,
  group,
  asset,
  currentItem
}) => {
  const styles = useStyles()
  if (!currentItem) return null

  return (
    <div className={styles.container}>
      <HeaderNavigation container />
      <Organizer item={currentItem.dataOrganizer} loading={loading} />
      <EventDetail item={currentItem} loading={loading} />
      <EventGroup list={group} loading={loading} />
      <EventLocation item={currentItem} loading={loading} />
      <EventParticipant item={currentItem} loading={loading} />
      <EventAsset list={asset} loading={loading} />
      <BottomButton item={currentItem.isOwner} />
    </div>
  )
}

Container.propTypes = {
  currentItem: PropTypes.object.isRequired
}

export default Container
