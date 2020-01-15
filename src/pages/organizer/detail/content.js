import React from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'

// icon
import FileSearch from '@ant-design/icons/FileSearch'
import Login from '@ant-design/icons/Login'
import AttachMoney from '@material-ui/icons/AttachMoney'
import FolderAdd from '@ant-design/icons/FolderAdd'
import UsergroupAdd from '@ant-design/icons/UsergroupAdd'
import FavoriteIcon from 'components/FavoriteIcon'
import Drawer from 'components/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'

import color from 'theme/color'
import CardPublic from './cardPublic'
import CardPrivate from './cardPrivate'

const useStyles = makeStyles({
  p0: {
    padding: 0
  },
  radius8: {
    borderRadius: 8
  }
})

const list = [
  {
    name: 'Monitoring',
    link: '/organizer/detail',
    icon: (
      <Box ml={2}>
        <FileSearch style={{ color: color.primaryColor, fontSize: 22 }} />
      </Box>
    )
  },
  {
    name: 'Check-in',
    link: '/organizer/detail',
    icon: (
      <Box ml={2}>
        <Login style={{ color: color.primaryColor, fontSize: 22 }} />
      </Box>
    )
  },
  {
    name: 'Refund Request',
    link: '/organizer/detail',
    icon: (
      <Box ml={1.7}>
        <AttachMoney style={{ color: color.primaryColor, fontSize: 26 }} />
      </Box>
    )
  },
  {
    name: 'Committee',
    link: '/organizer/detail',
    icon: (
      <Box ml={2}>
        <UsergroupAdd style={{ color: color.primaryColor, fontSize: 22 }} />
      </Box>
    )
  },
  {
    name: 'Assets',
    link: '/event/detail',
    icon: (
      <Box ml={2}>
        <FolderAdd style={{ color: color.primaryColor, fontSize: 22 }} />
      </Box>
    )
  }
]

const Content = ({
  router,
  id = router.query.id,
  currentData
}) => {
  const classes = useStyles()
  return (
    <div>
      {currentData ? (
        currentData.map((item, index) => {
          return (
            <Box key={index} my={2} mx={2.5}>
              <Card
                className={classes.radius8}
              >
                {id
                  ? id && (
                    <CardPublic
                      item={item}
                      Icon={(
                        <FavoriteIcon />
                      )}
                    />
                  )
                  : (
                    <CardPrivate
                      item={item}
                      Icon={(
                        <Drawer
                          header={(
                            <Box my={2} mx={4}>
                              <Typography style={{ fontWeight: 500 }}>
                                {item.title}
                              </Typography>
                            </Box>
                          )}
                          onDivider
                          placement="bottom"
                          list={list}
                        >
                          <IconButton className={classes.p0}>
                            <MoreVertIcon />
                          </IconButton>
                        </Drawer>
                      )}
                    />
                  )}
              </Card>
            </Box>
          )
        })
      )
        : null
      }
    </div>
  )
}

const mapStateToProps = state => ({
  currentData: state.dataRawStore.list
})

export default connect(mapStateToProps)(withRouter(Content))
