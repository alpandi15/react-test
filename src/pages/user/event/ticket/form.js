import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Router from 'next/router'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CardContainerRow from 'components/CardContainerRow'

import CardHeader from '@material-ui/core/CardHeader'

const dataCard = {
  title: 'Medan International Coffee Festival',
  title1: 'Oceania Canoe Sprint Open Championships',
  date: '12 Nov',
  number: '112169037',
  city: 'medan',
  address: 'Jl. Kapuas Dalam Medan Kota',
  price: 'Rp 30.000',
  type: 'VVIP',
  name: 'Muhammad Al-Pandi',
  corporate: 'Al-Pandi Coorporate',
  tickets: '1',
  time: '2019-12-20T13:16:30+09:00',
  img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg'
}

class FormCreateOrganize extends Component {
  onSubmit = (values) => {
    console.log('values', values)
  }

  handleRoute = () => {
    Router.push({
      pathname: '/user/organize/list-add-member'
    })
  }

  render () {
    const {
      classes,
      handleSubmit
    } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className={classes.form} noValidate autoComplete="off">
        <Box my={1} className={classes.column}>
          <Paper square elevation={1} className={classes.card}>
            <CardHeader
              style={{ padding: 0 }}
              avatar={(
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg"
                    alt="title"
                    className={classes.radius14}
                    width="65"
                    height="65"
                  />
                </div>
              )}
              title={(
                <Typography>
                  {dataCard.title}
                </Typography>
              )}
            />
            <Typography
              color="primary"
              variant="inherit"
              fontSize={12}
            >
              Organizer
            </Typography>
            <CardContainerRow
              justifyItemRight="flex-end"
              overflowItemRight="hidden"
              itemLeft={(
                <div>
                  <Box>
                    <Typography
                      color="primary"
                      variant="inherit"
                      fontSize={14}
                    >
                      {dataCard.corporate}
                    </Typography>
                  </Box>
                </div>
              )}
              itemRight={(
                <div>
                  <Box>
                    <Typography
                      color="secondary"
                      variant="inherit"
                      fontSize={14}
                    >
                      {`${dataCard.date}`}
                    </Typography>
                  </Box>
                </div>
              )}
            />
            <CardContainerRow
              justifyItemRight="flex-end"
              overflowItemRight="hidden"
              itemLeft={(
                <div>
                  <Box>
                    <Typography
                      color="primary"
                      variant="inherit"
                      fontSize={14}
                    >
                      {dataCard.corporate}
                    </Typography>
                  </Box>
                </div>
              )}
              itemRight={(
                <div>
                  <Box>
                    <Typography
                      color="secondary"
                      variant="inherit"
                      fontSize={14}
                    >
                      {`${dataCard.date}`}
                    </Typography>
                  </Box>
                </div>
              )}
            />
          </Paper>
        </Box>
      </form>
    )
  }
}

export default reduxForm({
  form: 'CreateOrganize'
})(FormCreateOrganize)
