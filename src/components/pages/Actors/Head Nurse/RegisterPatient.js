import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'


import Register from '../../../Register'


const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function RegisterPatient() {
  return (
    <Layout
      header={<Header />}
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
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={12}>
        <Grid container>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>10.30 A.M</h3>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>Welcome Ms.Perera</h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.dataCard} item sm={12}>
      <h3 style={{ color: '#000000' }} align='center'>Patient Register</h3>
      <Register />
          </Grid>
     
          
    </Grid>
   
  )
}


export default RegisterPatient