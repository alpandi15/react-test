import React from 'react'
import PropTypes from 'prop-types'
import ErrorPage from 'next/error'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import CustomHelmet from 'components/CustomHelmet'
import Container from './Container'
import { helmet } from './variables'

const Verification = ({ title }) => {
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

Verification.propTypes = {
  title: PropTypes.string
}

Verification.defaultProps = {
  title: helmet
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Verification)
