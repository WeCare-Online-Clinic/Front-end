import React from 'react'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Card, CardHeader } from '@material-ui/core'
import LabTestTable from '../../../Table/LabTestTable'
import ReportCard from '../../../ClinicCard/ReportCard'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

function ViewLabTest() {
  return (
    <Layout
      header={<Header user='Kamal' />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
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
      <Grid className={classes.dataCard} item sm={6}>
        <Card>
          <CardHeader
            style={{
              textAlign: 'center',
              color: '#fff',
              borderBottom: '1px solid #000',
              backgroundColor: '#3f51b5',
            }}
            title='Lab Tests Available'
          ></CardHeader>
        </Card>
        <LabTestTable func={renderData} />
      </Grid>
      <Grid item sm={6} className={classes.dataCard}>
        {isData && <ReportCard />}
      </Grid>
    </Grid>
  )
}

export default ViewLabTest