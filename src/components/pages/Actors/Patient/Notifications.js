import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Constants from '../../../../utils/Constants'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { patientMenuItems } from '../../../Sidebar/menuItem'
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  makeStyles,
  List,
  ListItem,
  Divider,
  TablePagination,
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    minWidth: 'inherit',
    border: '1px solid #bdc3cb',
    backgroundColor: '#fff',
    padding: '0px',
    margin: '0px',
  },
  card1: {
    minWidth: 'inherit',
    border: '1px solid #bdc3cb',
    padding: '0px',
    margin: '10px',
    backgroundColor: '#25D366',
    borderRadius: '10px 10px 10px 0px;',
  },
  cardHeader: {
    textAlign: 'center',
    backgroundColor: '#3f51b5',
    color: '#fff',
    margin: '2px',
  },
  cardContent: {
    textAlign: 'center',
    color: '#000',
    fontSize: '16px',
    margin: '2px',
    backgroundColor: '#fff',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    color: '#3f51b5',
    backgroundColor: '#fff',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '16px',
  },
})

const PATIENT = getStorageItem('patientInfo', true).id

async function get_messages() {
  let message_list = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/patient/message/list/' + PATIENT)
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
      header={<Header user={getStorageItem('patientInfo', true).name} />}
      sidebar={<Sidebar menuItems={patientMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  const [rowsPerPage, setRowsPerPage] = useState(4) // set no.of rows per page
  const [pagePrivate, setPagePrivate] = useState(0)
  const [pagePublic, setPagePublic] = useState(0)
  const [messageList, setMessageList] = useState({
    clinicMessages: [],
    clinicDateMessages: [],
    patientMessages: [],
  })
  const [clinicMessages, setClinicMessages] = useState([])

  useEffect(() => {
    get_messages().then((res) => {
      setMessageList(res)
      console.log(res)
      if (res) {
        setClinicMessages(res.clinicDateMessages.concat(res.clinicMessages))
      }
    })
  }, [])

  const handlePrivatePageChange = (event, page) => {
    setPagePrivate(page)
  }

  const handlePublicPageChange = (event, page) => {
    setPagePublic(page)
  }

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  return (
    <Grid container spacing={5}>
      <Grid item sm={6} c>
        <Card className={classes.card}>
          <CardHeader
            title='Private Notifications'
            className={classes.cardHeader}
            titleTypographyProps='variant: h4'
          />
          {messageList &&
            messageList.patientMessages &&
            messageList.patientMessages
              .slice(
                pagePrivate * rowsPerPage,
                pagePrivate * rowsPerPage + rowsPerPage
              )
              .map((row) => (
                <Card className={classes.card1}>
                  <CardContent
                    style={{
                      color: '#333',
                      fontSize: '20px',
                    }}
                  >
                    <Grid container>
                      <Grid item sm={4}></Grid>
                      <Grid item sm={4}>
                        {'Sent : ' + row.date}
                      </Grid>
                      <Grid item sm={4}>
                        {row.time}
                      </Grid>

                      <Grid
                        item
                        sm={12}
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        {row.message}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
          <CardActions className={classes.cardActions}>
            <TablePagination
              component='div'
              count={
                messageList &&
                messageList.patientMessages &&
                messageList.patientMessages.length
              } // size of patientData array
              onChangePage={handlePrivatePageChange}
              onChangeRowsPerPage={handleRowsPerPageChange}
              page={pagePrivate}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[4, 8, 15]}
            />
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={6}>
        <Card className={classes.card}>
          <CardHeader
            title='Public Notifications'
            className={classes.cardHeader}
            titleTypographyProps='variant: h4'
          />
          {messageList &&
            clinicMessages &&
            clinicMessages
              .slice(
                pagePublic * rowsPerPage,
                pagePublic * rowsPerPage + rowsPerPage
              )
              .map((row) => (
                <Card className={classes.card1}>
                  <CardContent
                    style={{
                      color: '#333',
                      fontSize: '20px',
                    }}
                  >
                    <Grid container>
                      <Grid item sm={4}>
                        {'Clinic : ' + row.clinic.name}
                      </Grid>
                      <Grid item sm={4}>
                        {'Sent : ' + row.date}
                      </Grid>
                      <Grid item sm={4}>
                        {row.time}
                      </Grid>
                      {row.clinicDate && (
                        <Grid item sm={12}>
                          {'Clinic Date : ' + row.clinicDate.date}
                        </Grid>
                      )}
                      <Grid
                        item
                        sm={12}
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        {row.message}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
          <CardActions className={classes.cardActions}>
            <TablePagination
              component='div'
              count={messageList && clinicMessages && clinicMessages.length} // size of patientData array
              onChangePage={handlePublicPageChange}
              onChangeRowsPerPage={handleRowsPerPageChange}
              page={pagePublic}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 8, 15]}
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Notifications
