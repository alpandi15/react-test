import React from 'react'
import Router from 'next/router'
import HeaderNavigation from 'components/HeaderNavigation'

const HeaderIvitation = () => {
  return (
    <div>
      <HeaderNavigation
        router={() => Router.back()}
      />
    </div>
  )
}

export default HeaderIvitation
