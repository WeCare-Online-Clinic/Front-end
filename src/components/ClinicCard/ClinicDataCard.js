import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ControlCameraOutlined } from '@material-ui/icons'
import Constants from '../../utils/Constants'

async function get_clinic_data(id) {
  console.log('clinic history')

  let clinic_data

  try {
    await axios
      .get(Constants.API_BASE_URL + '/patient/clinic/data/' + id)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          clinic_data = res.data
        }
      })
    return clinic_data
  } catch (error) {
    console.log(error)
  }
}

const useStyles = makeStyles({
  card: {
    width: 'inherit',
    minHeight: '100%',
    border: '2px solid #3f51b5',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    borderBottom: '1px solid #000',
    backgroundColor: '#fff',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 20px 40px',
    width: '100%',
  },
  textTitle: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '18px',
  },
  textBox: {
    height: '200px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
})

function ClinicDataCard(props) {
  console.log(props)
  let id = props.patient.id
  console.log(id)
  const history = useHistory()
  const [clinicData, setClinicData] = useState()
  const classes = useStyles()

  useEffect(() => {
    get_clinic_data(id).then((res) => {
      setClinicData(res)
      console.log(res)
    })
  }, [])

  console.log(clinicData)

  const tableHeaders = [
    // add table header names
    { text: 'Medicine' },
    { text: 'Quantity' },
    { text: 'M' },
    { text: 'A' },
    { text: 'E' },
  ]

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          'Previous Clinic Data (' +
          (clinicData && clinicData.clinicAppointment.clinicDate.date) +
          ')'
        }
        className={classes.cardHeader}
      />
      <Grid container>
        <Grid
          item
          sm={6}
          style={{ backgroundColor: '#fff', borderRight: '1px solid #4c5355' }}
        >
          <div className={classes.textTitle}>Notes</div>
          <div className={classes.textBox}>
            <div className={classes.textField}>
              Note: <br /> {clinicData && clinicData.note}{' '}
            </div>
            <br />
            <div className={classes.textField}>
              Lab Tests: <br /> {clinicData && clinicData.labTests}{' '}
            </div>
          </div>
          <div className={classes.cardActions}>
            <Button
              style={{ width: 'inherit' }}
              variant='contained'
              color='secondary'
              onClick={() =>
                history.push({
                  pathname: 'patienthistory',
                  state: props.patient,
                })
              }
            >
              Clinic History
            </Button>
          </div>
        </Grid>
        <Grid item sm={6} style={{ backgroundColor: '#fff' }}>
          <div className={classes.textTitle}> Prescriptions</div>
          <div className={classes.textBox} style={{ overflowY: 'scroll' }}>
            <Table>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((col) => (
                    <TableCell
                      style={{
                        color: '#3f51b5',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        borderBottom: '1px solid #000',
                      }}
                      className={classes.hoverable}
                    >
                      <span>{col.text}</span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {clinicData &&
                  clinicData.prescription.map((row) => (
                    <TableRow className={classes.tableRow} hover>
                      <TableCell className={classes.cell}>
                        {row.medicine}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.quantity}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.morning}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.afternoon}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.evening}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div className={classes.cardActions}>
            <Button
              style={{ width: 'inherit' }}
              variant='contained'
              color='secondary'
              onClick={() =>
                history.push({
                  pathname: 'patientreport',
                  state: props.patient,
                })
              }
            >
              Lab Tests
            </Button>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ClinicDataCard
