import React from 'react'
import { Grid } from '@material-ui/core'

const Layout = (props) => {
  return (
    <Grid container>
      <Grid style={{ backgroundColor: '#000', maxWidth: '240px' }} item sm={2}>
        {props.sidebar}
      </Grid>
      <Grid item sm>
        <Grid container direction='row'>
          <Grid item sm={12}>
            {props.header}
          </Grid>
          <Grid item sm={12} style={{ minHeight: '875px' }}>
            {props.content}
          </Grid>
          <Grid item sm={12}>
            {props.footer}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout
