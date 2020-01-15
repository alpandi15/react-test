import React from 'react'
import HeaderNavigation from 'components/HeaderNavigation'
import Form from './form'
import {
  title,
  subtitle
} from './variables'

const Container = () => {
  return (
    <div>
      <HeaderNavigation
        title={title}
        subtitle={subtitle}
        titleFontSize={18}
      />
      <Form />
    </div>
  )
}

export default Container
