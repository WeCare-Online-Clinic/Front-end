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
      header={<Header user='Mr. Mahesh Withanage' />}
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
      <Grid className={classes.dataCard} item sm={12}>
        <LabTestTable func={renderData} />
      </Grid>
    </Grid>
  )
}

export default ViewLabTest
