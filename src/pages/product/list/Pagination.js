import React from 'react'
import Grid from '@material-ui/core/Grid'
import MaterialPagination from 'material-ui-flat-pagination'

const Pagination = ({
  onClick,
  meta
}) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <MaterialPagination
          limit={Number(meta.pageSize)}
          offset={(Number(meta.page) - 1) * Number(meta.pageSize)}
          total={Number(meta.total)}
          onClick={(e, offset) => {
            onClick(offset)
          }}
        />
      </Grid>
    </div>
  )
}

export default Pagination
