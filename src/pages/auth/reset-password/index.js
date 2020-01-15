import React from 'react'
import PropTypes from 'prop-types'
import ErrorPage from 'next/error'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import {
  helmet
} from './variables'

const ResetPassword = ({ title }) => {
  const router = useRouter()
  const { query } = router

  if (!query || (query && !query.email)) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <CustomHelmet
        title={title}
      />
      <Container email={query.email} />
    </div>
  )
}

ResetPassword.propTypes = {
  title: PropTypes.string
}

ResetPassword.defaultProps = {
  title: helmet
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(ResetPassword)
