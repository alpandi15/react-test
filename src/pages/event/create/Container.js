import React from 'react'
import HeaderNavigation from 'components/HeaderNavigation'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Form from './form'
import {
  title,
  subtitle
} from './variables'

const Container = () => {
  const router = useRouter()
  const { query } = router

  if (!query || (query && !query.id)) {
    return (
      <div>
        <HeaderNavigation
          titleFontSize={18}
        />
        <ErrorPage statusCode={404} />
      </div>
    )
  }

  return (
    <div>
      <HeaderNavigation
        title={title}
        subtitle={subtitle}
        titleFontSize={18}
      />
      <Form organizerId={query.id} />
    </div>
  )
}

export default Container
