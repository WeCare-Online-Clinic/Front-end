import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Constants from '../../../../utils/Constants'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import ClinicMessageTable from '../../../Table/ClinicMessageTable'
import Modal from '@material-ui/core/Modal'
import { Button } from '@material-ui/core'
import ClinicMessageForm from '../../../Forms/ClinicMessageForm'
import ClinicDateMessageForm from '../../../Forms/ClinicDateMessageForm'

const CLINIC = getStorageItem('nurseInfo', true).clinic.id
console.log(CLINIC)

async function get_messages() {
  let message_list = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/nurse/message/list/' + CLINIC)
      .then((res) => {
        if (res.status == 200) {
          message_list = res.data
        }
      })
    return message_list
  } catch (error) {
    console.log(error)
  }
}

function Notifications() {
  return (
    <Layout
      header={<Header user={getStorageItem('nurseInfo', true).name} />}
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
  const [messageList, setMessageList] = useState({
    clinicMessages: [],
    clinicDateMessages: [],
  })
  const [sendClinicMessage, setSendClinicMessage] = useState(false)
  const [sendDateMessage, setSendDateMessage] = useState(false)
  const [clinicForm, setClinicForm] = useState(false)
  const [dateForm, setDateForm] = useState(false)

  const handleClinicForm = () => {
    setClinicForm(true)
    setDateForm(false)
    setSendDateMessage(true)
  }

  const handleDateForm = () => {
    setDateForm(true)
    setClinicForm(false)
    setSendClinicMessage(true)
  }

  useEffect(() => {
    get_messages().then((res) => {
      setMessageList(res)
      console.log(res)
    })
  }, [clinicForm, dateForm])

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item sm={12} style={{ display: 'flex' }}>
          <div style={{ paddingRight: '10px' }}>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              style={{ minWidth: '400px' }}
              disabled={sendClinicMessage}
              onClick={handleClinicForm}
            >
              Send Notification For Clinic
            </Button>
          </div>
          <div>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              style={{ minWidth: '400px' }}
              disabled={sendDateMessage}
              onClick={handleDateForm}
            >
              Send Notification For Clinic Date
            </Button>
          </div>
        </Grid>
        {messageList && (
          <React.Fragment>
            <Grid item sm={6}>
              <ClinicMessageTable
                name='Clinic Notifications'
                messages={messageList.clinicMessages}
              />
            </Grid>
            <Grid item sm={6}>
              <ClinicMessageTable
                name='Clinic Date Notifications'
                messages={messageList.clinicDateMessages}
              />
            </Grid>
          </React.Fragment>
        )}
      </Grid>

      <Modal
        open={clinicForm}
        onClose={() => {
          setClinicForm(false)
          setSendDateMessage(false)
        }}
      >
        <ClinicMessageForm />
      </Modal>

      <Modal
        open={dateForm}
        onClose={() => {
          setDateForm(false)
          setSendClinicMessage(false)
        }}
      >
        <ClinicDateMessageForm />
      </Modal>
    </React.Fragment>
  )
}

export default Notifications
