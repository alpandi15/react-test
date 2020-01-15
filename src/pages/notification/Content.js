import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContainerRow from 'components/CardContainerRow'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import FlexRow from 'components/FlexRow'
import color from 'theme/color'
import clsx from 'clsx'

const useStyles = makeStyles({
  card: {
    backgroundColor: color.white,
    padding: 12,
    borderRadius: '12px',
    boxShadow: 'none'
  },
  border: {
    border: `1px solid ${color.grayButton}`
  },
  media: {
    borderRadius: '50%'
  }
})

const ContentInvited = ({ classes }) => (
  <FlexRow>
    <CardActions>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{
          backgroundColor: color.primaryColor,
          color: color.white,
          borderRadius: 6,
          paddingLeft: 18,
          paddingRight: 18,
          textTransform: 'none'
        }}
      >
        <Typography
          style={{
            color: color.white,
            fontSize: 12
          }}
        >
          Accept
        </Typography>
      </Button>
    </CardActions>
    <CardActions>
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.border}
        style={{
          backgroundColor: color.white,
          color: color.darkTextColor,
          boxShadow: 'none',
          borderRadius: 6,
          paddingLeft: 18,
          paddingRight: 18,
          textTransform: 'none'
        }}
      >
        <Typography
          style={{
            color: color.darkTextColor,
            fontSize: 12
          }}
        >
          Decline
        </Typography>
      </Button>
    </CardActions>
  </FlexRow>
)
const Content = ({
  item
}) => {
  const classes = useStyles()

  return (
    <div>
      <Card
        className={clsx(classes.card, classes.border)}
      >
        <CardContainerRow
          justifyItemRight="center"
          xsItemLeft={3}
          xsItemRight={2}
          itemLeft={(
            <img
              src={item.img}
              alt="title"
              className={classes.media}
              width="60"
              height="60"
            />
          )}
          itemCenter={(
            <Box>
              <Box ml={1}>
                {item.text}
              </Box>
              <ContentInvited
                classes={classes}
              />
            </Box>
          )}
          itemRight={(
            <Box>
              <Typography style={{
                color: color.normalColor
              }}
              >
                4d
              </Typography>
            </Box>
          )}
        />
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({
  item: state.dataRawStore.currentItem
})

export default connect(mapStateToProps)(Content)
