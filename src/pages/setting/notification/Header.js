import React from 'react'
import Router from 'next/router'
import HeaderBackNavigation from 'components/HeaderBackNavigation'

const Header = () => {
  return (
    <div>
      <HeaderBackNavigation
        router={() => Router.push({
          pathname: '/notification'
        })}
      />
    </div>
  )
}

export default Header
