import React from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {
  currencyFormatter
} from 'utils/string'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minHeight: 230
  },
  title: {
    lineHeight: '1.5em',
    height: '1.5em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '100%'
  }
})

export default function ImgMediaCard ({ item }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => {
          Router.push({
            pathname: `/product/detail/${item.id}`
          })
        }}
      >
        {item && item.image && item.image.url ? (
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={item.image.url}
            title="Contemplative Reptile"
          />
        )
          : null}
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${currencyFormatter(item.price)} / ${item.unit}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
