import React from 'react'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import { title } from './variables'

const OrganizerDetail = () => {
  return (
    <div>
      <CustomHelmet
        title={title}
      />
      <Container />
    </div>
  )
}

export default OrganizerDetail
