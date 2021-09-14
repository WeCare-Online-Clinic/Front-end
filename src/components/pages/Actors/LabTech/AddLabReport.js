import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import QueueBar from '../../../Misc/QueueBar'
import PatientHisCard from '../../../ClinicCard/PatientHisCard'
import { TextField } from '@material-ui/core'
import PatientForm from '../../../Forms/PatientForm'
import LabTechFullBld from '../../../Lab Forms/LabTechFullBld'
import { getStorageItem } from '../../../../utils/StorageUtils'
 

const labTechDetails= getStorageItem('labTechInfo', true);

const useStyles = makeStyles({
  textTitle: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '16px',
  },
  textBox: {
    height: '140px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 20px 40px',
    width: '100%',
  },
})

function AddLabReport() {
  return (
    <Layout
      header={<Header user={labTechDetails.name} />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container style={{ padding: '20px' }}>
        <Grid item sm={12}>
          <Grid container>
            <Grid item sm={6}>
              <PatientForm />
            </Grid>
            <Grid item sm={6} style={{ backgroundColor: '#fff' }}>
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <LabTechFullBld
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AddLabReport