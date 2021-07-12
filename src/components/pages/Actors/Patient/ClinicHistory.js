import React from 'react'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { patientMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Card, CardHeader } from '@material-ui/core'
import PatientClinicHisTable from '../../../Table/PatientClinicHisTable'
import PatientHisCard from '../../../ClinicCard/PatientHisCard'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

function ClinicHistory() {
  return (
    <Layout
      header={<Header user='Dr. Asela' />}
      sidebar={<Sidebar menuItems={patientMenuItems} />}
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
  const [isData, setIsData] = useState(false)

  useEffect(() => {})

  const renderData = () => {
    setIsData(true)
  }

  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={7}>
        <Card>
          <CardHeader
            style={{
              textAlign: 'center',
              color: '#fff',
              borderBottom: '1px solid #000',
              backgroundColor: '#3f51b5',
            }}
            title='Nimal De Silva'
          ></CardHeader>
        </Card>
        <PatientClinicHisTable func={renderData} />
      </Grid>
      <Grid item sm={5} className={classes.dataCard}>
        {isData && <PatientHisCard />}
      </Grid>
    </Grid>
  )
}

export default ClinicHistory
