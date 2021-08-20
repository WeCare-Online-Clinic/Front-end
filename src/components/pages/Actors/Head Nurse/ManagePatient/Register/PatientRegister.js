import React from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import Sidebar from '../../../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../../../Sidebar/menuItem'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import Register from './Register'


const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})

function PatientRegister() {
  return (
    <Layout
      header={<Header user='Ms. Perera' />}
      sidebar={<Sidebar menuItems={headnurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  return (
    <Grid item sm={10}>
    <Grid container style={{ marginBottom: '10px' , marginLeft: '200px' }} spacing={5}>
        
            <Register />
          </Grid>
          
        </Grid>
   
  )
}

export default PatientRegister