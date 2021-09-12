import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Constants from '../../../../utils/Constants'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import PatientRequestTable from '../../../Table/PatientRequestTable'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Button from '@material-ui/core/Button'

const CLINIC = getStorageItem('nurseInfo', true).clinic.id
console.log(CLINIC)

async function get_request_list() {
  console.log('patient info')

  let request_list = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/patient/request/list/' + CLINIC)
      .then((res) => {
        if (res.status == 200) {
          request_list = res.data
        }
      })
    return request_list
  } catch (error) {
    console.log(error)
  }
}

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function ManageRequest() {
  const [requestList, setRequestList] = useState([])
  const [availableDates, setAvailableDates] = useState([])

  useEffect(() => {
    get_request_list().then((res) => {
      setRequestList(res.requestList)
      setAvailableDates(res.availableDates)
      console.log(res)
    })
  }, [])

  return (
    <Layout
      header={<Header user={getStorageItem('nurseInfo', true).name} />}
      sidebar={<Sidebar menuItems={headnurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <PatientRequestTable
            requestList={requestList}
            availableDates={availableDates}
          />
        </div>
      }
    ></Layout>
  )
}

export default ManageRequest
