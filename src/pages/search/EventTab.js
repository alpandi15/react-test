import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '12px',
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 7px 7px -1px rgba(0,0,0,0.12)'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    margin: '12px 12px 0px 12px',
    padding: '0px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'// 16:9
  },
  flexEnd: {
    flexDirection: 'rtl'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const EventTab = ({
  xs,
  my,
  mr,
  currentData,
  iconRight,
  FontWeight
}) => {
  const classes = useStyles()

  return (
    currentData ? (
      currentData.map((item, index) => {
        return (
          <Grid
            item
            xs={xs}
            key={index}
          >
            <Box
              my={my}
              mr={mr}
            >
              <Card
                className={classes.card}
              >
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title={item.title}
                />
                <CardContent className={classes.cardContent}>
                  <Box className={classes.column}>
                    <Typography
                      color="secondary"
                      style={{ fontSize: '18px', fontWeight: FontWeight }}
                      className={classes.column}
                    >
                      {item.text}
                    </Typography>
                    <Typography
                      color="secondary"
                      variant="inherit"
                      style={{ fontWeight: FontWeight }}
                      className={classes.column}
                    >
                      {`${item.date}, ${item.location}`}
                    </Typography>
                    <Typography
                      color="secondary"
                      variant="inherit"
                      style={{ fontWeight: FontWeight }}
                      className={classes.flexEnd}
                    >
                      {item.price}
                    </Typography>
                  </Box>
                </CardContent>
                <CardContent style={{ padding: '12px 0px', display: 'flex', flexDirection: 'row' }}>
                  {iconRight}
                  <Box className={classes.row}>
                    <Box className={classes.column}>
                      <Typography
                        color="secondary"
                        variant="inherit"
                        className={classes.column}
                        style={{ fontWeight: FontWeight }}
                      >
                        {`${'Date & Time'}: ${item.date}, ${item.location}`}
                      </Typography>
                      <Typography
                        color="secondary"
                        variant="inherit"
                        className={classes.column}
                        style={{ fontWeight: FontWeight }}
                      >
                        {`${'price'}: ${item.price}`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        )
      })
    )
      : null
  )
}

export default EventTab
