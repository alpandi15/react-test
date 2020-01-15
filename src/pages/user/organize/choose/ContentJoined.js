import React from 'react'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardContainerRow from 'components/CardContainerRow'
import color from 'theme/color'

const ContentManage = ({ classes }) => {
  return (
    <div>
      <Box my={2} mx={2.5}>
        <Card
          className={classes.card}
          style={{ cursor: 'pointer' }}
        >
          <CardHeader
            avatar={(
              <img
                src="https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg"
                alt="title"
                className={classes.radius8}
                width="45"
                height="45"
              />
            )}
            action={(
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )}
            classes={{
              avatar: classes.avatar,
              action: classes.action,
              title: classes.title,
              subheader: classes.subheader
            }}
            title="John Coorporate"
            subheader={(
              <CardContainerRow
                justifyItemRight="flex-end"
                overflowItemRight="hidden"
                itemLeft={(
                  <div className={classes.row}>
                    <Card
                      style={{
                        backgroundColor: color.grayButton,
                        fontWeight: 'bold'
                      }}
                      elevation={0}
                    >
                      <Box my={0.5} mx={1.2}>
                        10 Events Joined
                      </Box>
                    </Card>
                    <Box my={0.5} mx={1.2}>
                      324 Member
                    </Box>
                  </div>
                )}
              />
            )}
          />
        </Card>
      </Box>
    </div>
  )
}

export default ContentManage
