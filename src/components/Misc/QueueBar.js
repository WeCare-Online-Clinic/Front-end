import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  queueBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px 10px 20px',
  },
})

function QueueBar() {
  const classes = useStyles()
  return (
    <Grid container style={{ padding: '10px' }}>
      <Grid item sm={12} className={classes.queueBar}>
        <Grid item sm={4} className={classes.queueBar}>
          <div>
            <Button variant='contained' color='secondary' size='large'>
              Patient Profile
            </Button>
          </div>
          <div>
            <Button variant='contained' color='secondary' size='large'>
              Recent Lab Report
            </Button>
          </div>
        </Grid>
        <Grid
          item
          sm={8}
          className={classes.queueBar}
          style={{ backgroundColor: '#3f51b5' }}
        >
          <div>
            <h5 style={{ color: '#fff' }}>Start Time: 10.30</h5>
          </div>
          <div>
            <h5 style={{ color: '#fff' }}>Current Queue No: 24</h5>
          </div>
          <div>
            <h5 style={{ color: '#fff' }}>Patient Left: 34</h5>
          </div>
          <div>
            <Button variant='contained' color='secondary' size='large'>
              End Session
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default QueueBar
