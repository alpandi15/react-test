import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    margin: '0em 0.5em',
    width: '10em',
    height: '8em'
  }
})

const GroupItemSkeleton = () => {
  const styles = useStyles()
  return (
    <Skeleton variant="rect" className={styles.button} />
  )
}

export default GroupItemSkeleton
