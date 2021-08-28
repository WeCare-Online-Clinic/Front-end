import React from 'react'
import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Grid,
  IconButton,
  Divider,
} from '@material-ui/core'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { RemoveCircle, RemoveCircleOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  card: {
    width: 'inherit',
    minHeight: '100%',
    border: '1px solid #bdc3cb',
    backgroundColor: '#3f51b5',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    borderBottom: '1px solid #000',
    backgroundColor: '#fff',
  },
  cardContent: {
    fontSize: '16px',
    margin: '20px',
    backgroundColor: '#fff',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 10px 20px 10px',
    width: '100%',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '5px',
  },
  presContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#3f51b5',
    paddingTop: '20px',
  },
}))

function ClinicForm() {
  const classes = useStyles()
  const [medicines, setMedicines] = useState([])
  const [data, setData] = useState({
    nextClinic: '',
    note: '',
    diagnosis: '',
    tests: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(medicines)
    console.log(data)
  }

  const addRow = () => {
    const newList = [...medicines]
    newList.push({
      medicine: '',
      quantity: '',
      morning: 0,
      afternoon: 0,
      evening: 0,
    })
    setMedicines(newList)
  }

  const removeRow = (index) => {
    const rows = [...medicines]
    rows.splice(index, 1)
    setMedicines(rows)
  }

  const handleChangeInput = (index, e) => {
    const name = e.target.name
    const value = e.target.value
    let newList = [...medicines]
    newList[index][name] = value
    setMedicines(newList)
  }

  const handleDataChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Patient Clinic Data Form'
        className={classes.cardHeader}
      ></CardHeader>
      <CardContent className={classes.cardContent}>
        <div className='card-body'>
          <form>
            <Grid container>
              <Grid
                item
                sm={5}
                style={{ padding: '20px', border: '1px solid #3f51b5' }}
              >
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Next Clinic
                  </label>
                  <input
                    name='nextClinic'
                    className='form-control'
                    type='date'
                    value={data.nextClinic}
                    onChange={(e) => handleDataChange(e)}
                  ></input>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Note
                  </label>
                  <textarea
                    placeholder='Note'
                    name='note'
                    className='form-control'
                    type='text'
                    value={data.note}
                    onChange={(e) => handleDataChange(e)}
                  ></textarea>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Diagnosis
                  </label>

                  <textarea
                    placeholder='Diagnosis'
                    name='diagnosis'
                    className='form-control'
                    type='text'
                    value={data.diagnosis}
                    onChange={(e) => handleDataChange(e)}
                  ></textarea>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Tests
                  </label>

                  <textarea
                    placeholder='Tests to do'
                    name='tests'
                    className='form-control'
                    type='text'
                    value={data.tests}
                    onChange={(e) => handleDataChange(e)}
                  ></textarea>
                </div>
                <div className='input-group'>
                  <button
                    className='btn btn-primary'
                    style={{ width: 'inherit' }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </Grid>
              <Grid
                item
                sm={7}
                style={{ padding: '20px', border: '1px solid #3f51b5' }}
              >
                <div class='row mb-1'>
                  <div
                    class='form-group col-md-3'
                    style={{
                      padding: '5px',
                      borderRight: '1px solid #3f51b5',
                      borderBottom: '1px solid #3f51b5',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '20px',
                        color: '#3f51b5',
                        paddingLeft: '10px',
                      }}
                    >
                      Medicine
                    </label>
                  </div>
                  <div
                    class='form-group col-md-2'
                    style={{
                      padding: '5px',
                      borderRight: '1px solid #3f51b5',
                      borderBottom: '1px solid #3f51b5',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '20px',
                        color: '#3f51b5',
                        paddingLeft: '10px',
                      }}
                    >
                      Quantity
                    </label>
                  </div>
                  <div
                    class='form-group col-md-2'
                    style={{
                      padding: '5px',
                      borderRight: '1px solid #3f51b5',
                      borderBottom: '1px solid #3f51b5',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '20px',
                        color: '#3f51b5',
                        paddingLeft: '10px',
                      }}
                    >
                      Morning
                    </label>
                  </div>
                  <div
                    class='form-group col-md-2'
                    style={{
                      padding: '5px',
                      borderRight: '1px solid #3f51b5',
                      borderBottom: '1px solid #3f51b5',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '20px',
                        color: '#3f51b5',
                        paddingLeft: '10px',
                      }}
                    >
                      Afternoon
                    </label>
                  </div>
                  <div
                    class='form-group col-md-2'
                    style={{
                      padding: '5px',
                      borderRight: '1px solid #3f51b5',
                      borderBottom: '1px solid #3f51b5',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '20px',
                        color: '#3f51b5',
                        paddingLeft: '10px',
                      }}
                    >
                      Evening
                    </label>
                  </div>
                  <div
                    class='form-group col-md-1'
                    style={{
                      padding: '5px',

                      borderBottom: '1px solid #3f51b5',
                    }}
                  ></div>
                </div>
                {medicines.map((medicine, index) => (
                  <React.Fragment>
                    <MedicineRow
                      row={medicine}
                      index={index}
                      func1={removeRow}
                      func2={handleChangeInput}
                    ></MedicineRow>
                  </React.Fragment>
                ))}
                <div
                  className='form-group mb-3'
                  style={{ display: 'grid', justifyItems: 'flex-end' }}
                >
                  <IconButton onClick={addRow}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

function MedicineRow(props) {
  let medicine = props.row
  let index = props.index
  return (
    <React.Fragment>
      <div
        class='row mb-1'
        style={{ borderBottom: '1px solid #3f51b5' }}
        key={index}
      >
        <div class='form-group col-md-3' style={{ padding: '5px' }}>
          <input
            name='medicine'
            required='true'
            type='text'
            class='form-control'
            placeholder='Medicine'
            value={medicine.medicine}
            onChange={(e) => props.func2(index, e)}
          />
        </div>
        <div class='form-group col-md-2' style={{ padding: '5px' }}>
          <input
            name='quantity'
            type='text'
            class='form-control'
            placeholder='Quantity'
            value={medicine.quantity}
            onChange={(e) => props.func2(index, e)}
          />
        </div>
        <div class='form-group col-md-2' style={{ padding: '5px' }}>
          <input
            name='morning'
            type='number'
            step='0.25'
            min='0'
            class='form-control'
            placeholder='Mor'
            value={medicine.morning}
            onChange={(e) => props.func2(index, e)}
          />
        </div>
        <div class='form-group col-md-2' style={{ padding: '5px' }}>
          <input
            name='afternoon'
            type='number'
            step='0.25'
            min='0'
            class='form-control'
            placeholder='Aft'
            value={medicine.afternoon}
            onChange={(e) => props.func2(index, e)}
          />
        </div>
        <div class='form-group col-md-2' style={{ padding: '5px' }}>
          <input
            name='evening'
            type='number'
            step='0.25'
            min='0'
            class='form-control'
            placeholder='Eve'
            value={medicine.evening}
            onChange={(e) => props.func2(index, e)}
          />
        </div>
        <div class='form-group col-md-1' style={{ padding: '5px' }}>
          <IconButton>
            <RemoveCircle onClick={() => props.func1(index)} />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ClinicForm
