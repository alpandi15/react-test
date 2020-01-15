import React from 'react'
import Grid from '@material-ui/core/Grid'

const CardContainerRow = ({
  styleContainer,

  itemLeft,
  itemCenter,
  itemRight,
  onContainer = false,

  xsItem = 12,
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
      <Grid container style={styleContainer}>
        {itemLeft ? (
          <Grid
            container={onContainer}
            item
            xs={xsItemLeft || xsItem}
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
