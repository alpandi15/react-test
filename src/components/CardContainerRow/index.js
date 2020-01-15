import React from 'react'
import Grid from '@material-ui/core/Grid'

const CardContainerRow = ({
  alignItemsContainer = 'center',
  onContainer = true,
  itemLeft,
  itemCenter,
  itemRight,
  xlItem,
  xlItemLeft,
  xsItem,
  xsItemLeft,
  xsItemCenter,
  xsItemRight,
  justifyItemLeft,
  justifyItemCenter,
  justifyItemRight,
  overflowItemRight,
  itemJustifyContentLeft,
  itemJustifyContentCenter,
  itemJustifyContentRight,
  itemJustifyContent
}) => {
  return (
    <div>
      <Grid container alignItems={alignItemsContainer} wrap="nowrap">
        {itemLeft ? (
          <Grid
            container={onContainer}
            item
            xs={xsItemLeft || xsItem}
            xl={xlItemLeft || xlItem}
            style={{ justifyContent: itemJustifyContentLeft || itemJustifyContent }}
            justify={justifyItemLeft}
          >
            {itemLeft}
          </Grid>
        ) : null
        }
        {itemCenter ? (
          <Grid
            container={onContainer}
            item
            xs={xsItemCenter || xsItem}
            xl={xlItemLeft || xlItem}
            style={{
              justifyContent: itemJustifyContentCenter || itemJustifyContent
            }}
            justify={justifyItemCenter}
          >
            {itemCenter}
          </Grid>
        ) : null
        }
        {itemRight ? (
          <Grid
            container={onContainer}
            item
            xs={xsItemRight || xsItem}
            xl={xlItemLeft || xlItem}
            style={{
              justifyContent: itemJustifyContentRight || itemJustifyContent,
              overflow: overflowItemRight
            }}
            justify={justifyItemRight}
          >
            {itemRight}
          </Grid>
        ) : null
        }

      </Grid>
    </div>
  )
}

export default CardContainerRow
