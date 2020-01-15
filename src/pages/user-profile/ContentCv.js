import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import Box from '@material-ui/core/Box'
import color from 'theme/color'

const useStyles = makeStyles({
  radius14: {
    borderRadius: 14
  },
  subheader: {
    color: color.darkTextColor,
    fontSize: 12
  },
  title: {
    color: color.darkTextColor,
    fontWeight: 700
  }
})

const ContentCv = () => {
  const classes = useStyles()
  return (
    <div>
      <Box mx={2}>
        <Typography color="primary" style={{ fontWeight: 700 }}>
          Curriculum Vitae
        </Typography>
      </Box>
      <CardHeader
        avatar={(
          <img
            src="https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg"
            alt="title"
            className={classes.radius14}
            width="65"
            height="65"
          />
        )}
        classes={{
          title: classes.title,
          subheader: classes.subheader
        }}
        title="Grow Indonesian Business"
        subheader="December 5, 2019"
      />
    </div>
  )
}

export default ContentCv
