import React from 'react'
import Router from 'next/router'
import HeaderNavigation from '../HeaderNavigation'

const HeaderBackNavigation = ({
  headTitle,
  HeaderBackgroundColor,
  justifyItemLeft,
  justifyItemCenter,
  justifyItemRight,
  iconRight
}) => {
  return (
    <div>
      <HeaderNavigation
        justifyItemLeft={justifyItemLeft}
        justifyItemCenter={justifyItemCenter}
        justifyItemRight={justifyItemRight}
        title={headTitle}
        HeaderBackgroundColor={HeaderBackgroundColor}
        titleFontSize={18}
        iconRight={iconRight}
      />
    </div>
  )
}

HeaderBackNavigation.defaultProps = {
  router: () => Router.back()
}

export default HeaderBackNavigation
