import React, { Component } from 'react'
import Router from 'next/router'
import Paper from '@material-ui/core/Paper'
import HeaderNavigation from 'components/HeaderNavigation'
import { title } from './variables'
import Form from './form'

class ContactOrganize extends Component {
  render () {
    return (
      <div>
        <Paper square elevation={0}>
          <HeaderNavigation
            title={title}
            router={() => Router.push({
              pathname: '/organizer/detail'
            })}
          />
        </Paper>
        <Form />
      </div>
    )
  }
}

export default ContactOrganize
