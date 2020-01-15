import React from 'react'
import BottomNavigation from 'components/BottomNavigation'
import Container from './Container'

class Event extends React.Component {
  state = {
    value: 'event list'
  }

  render () {
    const { value } = this.state
    return (
      <div>
        <Container />
        {value}
        <BottomNavigation value="/event/list" />
      </div>
    )
  }
}

export default Event
