import React from 'react'
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

const useStyles = makeStyles({
  card: {
    width: 'inherit',
    minHeight: '100%',
    border: '1px solid #bdc3cb',
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
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '20px',
  },
  textBox: {
    minHeight: '100px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
})

function PatientHisCard(props) {
  const history = useHistory()
  const classes = useStyles()
  console.log(props)
  let clinicData = props.clinicData

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
        title='Clinic Data'
        subheader={clinicData && clinicData.clinicAppointment.clinicDate.date}
        className={classes.cardHeader}
      />
      <Grid container style={{ backgroundColor: '#3f51b5', padding: '20px' }}>
        <Grid
          item
          sm={12}
          style={{ backgroundColor: '#fff', borderRight: '1px solid #4c5355' }}
        >
          <div className={classes.textTitle}>Notes</div>
          <div className={classes.textBox}>
            <div className={classes.textField}>
              {clinicData && clinicData.note}{' '}
            </div>
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          style={{ backgroundColor: '#fff', borderRight: '1px solid #4c5355' }}
        >
          <div className={classes.textTitle}>Lab Tests</div>
          <div className={classes.textBox}>
            <div className={classes.textField}>
              {clinicData && clinicData.labTests}{' '}
            </div>
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          style={{ backgroundColor: '#fff', paddingBottom: '50px' }}
        >
          <div className={classes.textTitle}> Prescriptions</div>
          <div className={classes.textBox}>
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
                  clinicData.prescription.prescription.map((row) => (
                    <TableRow className={classes.tableRow} hover>
                      <TableCell className={classes.cell}>
                        {row.medicine}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.Quantity}
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
        </Grid>
      </Grid>
    </Card>
  )
}

export default PatientHisCard
