import React from 'react'
import { Grid } from '@material-ui/core'

function WelcomeBar(props) {
  return (
    <div style={{ textAlign: 'right', height: '20px' }}>
      <h3 style={{ color: '#fff' }}>Welcome {props.user}</h3>
    </div>
  )
}

export default WelcomeBar
