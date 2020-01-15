import React from 'react'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import { title } from './variables'

class SearchLocation extends React.Component {
  render () {
    return (
      <div>
        <CustomHelmet
          title={title}
        />
        <Container />
      </div>
    )
  }
}

export default SearchLocation
