import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
  container: {
    padding: '10 0'
  },
  card: {
    height: 100,
    width: '100%'
  }
})

const ImgMediaCard = ({ checked, item, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <FormControlLabel
        control={(
          <Checkbox
            checked={checked}
            onChange={() => {
              if (onClick) {
                onClick(item.id)
              }
            }}
            value={item.id}
          />
        )}
        label={item.name}
      />
    </div>
  )
}

export default ImgMediaCard
