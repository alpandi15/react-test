import React from 'react'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import Router from 'next/router'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContainerRow from 'components/CardContainerRow'
import color from 'theme/color'

const ContentManage = ({
  classes,
  data = [
    {
      header: 'Al-Pandi Coorporate',
      subheader: 'Al-Pandi Coorporate',
      url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
      member: 12,
      event: 40
    },
    {
      header: 'Al-Pandi Coorporate',
      subheader: 'Al-Pandi Coorporate',
      url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
      member: 12,
      event: 40
    },
    {
      header: 'Al-Pandi Coorporate',
      subheader: 'Al-Pandi Coorporate',
      url: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
      member: 12,
      event: 40
    }
  ]
}) => {
  return (
    <div>
      {data && data.length
        ? data && data.length && data.map((item, index) => {
          return (
            <Box my={2} mx={2.5} key={index}>
              <Card
                className={classes.card}
                onClick={() => Router.push({
                  pathname: '/user/organize/detail',
                  query: { tab: 0 }
                })}
              >
                <CardActionArea>
                  <CardHeader
                    avatar={(
                      <img
                        src={item.url}
                        alt={item.header}
                        className={classes.radius8}
                        width="45"
                        height="45"
                      />
                    )}
                    action={(
                      <CardActions>
                        <MoreVertIcon />
                      </CardActions>
                    )}
                    classes={{
                      avatar: classes.avatar,
                      action: classes.action,
                      title: classes.title,
                      subheader: classes.subheader
                    }}
                    title="Al-Pandi Coorporate"
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
                                {`${item.event} Events`}
                              </Box>
                            </Card>
                            <Box my={0.5} mx={1.2}>
                              {`${item.member} Member`}
                            </Box>
                          </div>
                        )}
                      />
                    )}
                  />
                </CardActionArea>
              </Card>
            </Box>
          )
        })
        : null
      }
    </div>
  )
}

export default ContentManage
