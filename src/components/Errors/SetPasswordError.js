import { Alert } from '@material-ui/lab'
import React from 'react'
import Navbar from '../Navbar/Header/Navbar'

function SetPasswordError() {
  return (
    <React.Fragment>
      <Navbar />
      <Alert severity='error'>
        User is already registered or link is not correct!
      </Alert>
    </React.Fragment>
  )
}

export default SetPasswordError
