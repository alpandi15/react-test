import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  grid: {
    display: 'flex',
    width: '100%'
  },
  button: {
    width: '100%',
    height: '3em',
    textTransform: 'none'
  },
  gridItem: {
    padding: '0.5em'
  }
})

const BottomButton = ({
  isOwner
}) => {
  const styles = useStyles()
  console.log('isOwner', isOwner)
  return (
    <div>
      <Grid container className={styles.grid}>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
          // onClick={onSubmit}
          >
            <Typography>
              Join Event
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Button
            variant="contained"
            color="default"
            className={styles.button}
          // onClick={onSubmit}
          >
            <Typography>
              Become Comittee
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

BottomButton.propTypes = {
  isOwner: PropTypes.bool
}

BottomButton.defaultProps = {
  isOwner: false
}

export default BottomButton
