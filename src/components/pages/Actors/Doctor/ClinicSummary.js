import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import Constants from '../../../../utils/Constants'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Summary from '../../../Misc/Summary'

const clinicId = getStorageItem('doctorInfo', true).clinic.id

async function get_summary() {
  let summary = null

  try {
    await axios
      .get(Constants.API_BASE_URL + '/consultation/summary/' + clinicId)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          summary = res.data
        }
      })
    return summary
  } catch (error) {
    console.log(error)
  }
}

function ClinicSummary() {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    get_summary().then((res) => {
      setSummary(res)
    })
  }, [])

  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          {summary && <Summary summary={summary}></Summary>}
        </div>
      }
    ></Layout>
  )
}

export default ClinicSummary
