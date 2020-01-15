import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import CardContainerRow from 'components/CardContainerRow'

const List = ({
  currentData,
  classes
}) => {
  return (
    <div>
      {currentData && currentData.length
        ? currentData && currentData.length && currentData.map((item, index) => {
          return (
            <div
              key={index}
            >
              <CardContainerRow
                overflowItemRight="hidden"
                xsItemLeft={2}
                itemLeft={(
                  <Checkbox
                    color="default"
                    value="1"
                    defaultChecked={item.status}
                    inputProps={{
                      'aria-label': 'checkbox with default color'
                    }}
                  />
                )}
                itemCenter={(
                  <CardHeader
                    style={{ padding: '10px 0px' }}
                    avatar={(
                      <img
                        src={item.url}
                        alt={item.header}
                        className={classes.radius8}
                        width="45"
                        height="45"
                      />
                    )}
                    classes={{
                      title: classes.title,
                      subheader: classes.subheader
                    }}
                    title={item.header}
                    subheader="Waiting Approvement"
                  />
                )}
              />
              <Divider variant="fullWidth" />
            </div>
          )
        })
        : null
      }
    </div>
  )
}

export default List
