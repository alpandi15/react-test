import React from 'react'
import BottomNavigation from 'components/BottomNavigation'
import SearchContainer from './Container'

class SearchEvent extends React.Component {
  state = {
    value: null
  }

  render () {
    const { value } = this.state
    return (
      <div>
        <SearchContainer />
        {value}
        <BottomNavigation value="/search" />
      </div>
    )
  }
}

export default SearchEvent
