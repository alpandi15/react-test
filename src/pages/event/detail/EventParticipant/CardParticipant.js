import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Card,
  CardContent,
  Grid
} from '@material-ui/core'
import color from 'theme/color'

const useStyles = makeStyles({
  card: {
    backgroundColor: color.dividerColor,
    color: color.secondaryText,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
    color: color.primaryText,
    textAlign: 'right'
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1em !important',
    padding: '1em !important'
  }
})

const CardParticipant = ({
  title,
  value
}) => {
  const styles = useStyles()
  return (
    <div>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Grid container>
            <Grid item xs={6}>
              <div>{title}</div>
            </Grid>
            <Grid item xs={6}>
              <div className={styles.subtitle}>
                <strong>{value}</strong>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

CardParticipant.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  title: PropTypes.string.isRequired
}

export default CardParticipant
