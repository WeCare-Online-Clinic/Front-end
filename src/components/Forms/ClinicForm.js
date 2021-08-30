import React from 'react'
import axios from 'axios'
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
import { toast } from 'react-toastify'
import { getStorageItem } from '../../utils/StorageUtils'
import Constants from '../../utils/Constants'
import './style.css'

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

const clinic = getStorageItem('doctorInfo', true).clinic
const doctor = getStorageItem('doctorInfo', true)

console.log(clinic)

async function send_data(patientClinicData, nextClinic, patientId, clinicDId) {
  //console.log('clinic date available')
  console.log(patientClinicData, nextClinic, patientId, clinicDId)

  let status = false
  let clinicId = clinic.id

  try {
    await axios
      .post(Constants.API_BASE_URL + '/consultation/form/', {
        patientClinicData: patientClinicData,
        nextClinic: nextClinic,
        patientId: patientId,
        clinicDId: clinicDId,
        clinicId: clinicId,
      })
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          //console.log(res)

          status = res.data
        }
      })
    return status
  } catch (error) {
    console.log(error)
  }
}

function ClinicForm(props) {
  const classes = useStyles()
  const [medicines, setMedicines] = useState([])
  const [SuggestionList, setSuggestionList] = useState(Constants.MEDICINES)
  const [testSuggestions, setTestSuggestions] = useState(Constants.LABTESTS)
  const [suggestionOn, setSuggestionOn] = useState(true)
  const [suggestedTest, setSuggestedTest] = useState()
  const [suggestedList, setSuggestedList] = useState()
  const [submitLock, setSubmitLock] = useState(false)
  const [data, setData] = useState({
    nextClinic: '',
    note: '',
    diagnosis: '',
    tests: '',
  })

  useEffect(() => {
    if (props.patientInfo) {
      setData({
        nextClinic: '',
        note: '',
        diagnosis: props.patientInfo.diagnosis,
        tests: '',
      })
    }
  }, [props])

  const handleSubmit = (e) => {
    e.preventDefault()

    let patientClinicData = {
      note: data.note,
      diagnosis: data.diagnosis,
      labTests: data.labTests,
      prescription: medicines,
      doctor: doctor,
    }
    let nextClinic = data.nextClinic
    let patientId = props.patientInfo.patient.id
    let clinicDId = props.clinicInfo.id
    setSubmitLock(true)
    console.log(medicines)
    console.log(data)
    let isValid = validation()
    if (isValid) {
      console.log('send data')
      send_data(patientClinicData, nextClinic, patientId, clinicDId).then(
        (res) => {
          console.log(res)
          if (res) {
            toast.info('Data Added Successfully', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            })
            window.location.reload()
            console.log(res)
          }
        }
      )
    } else {
      setSubmitLock(false)
    }
  }

  const search = (value, searchArray) => {
    let inArray = false
    searchArray.map((obj) => {
      if (obj.day == value) {
        console.log(value)
        console.log(obj.day)
        inArray = true
      }
    })

    return inArray
  }

  const validation = () => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    let medicineEmpty = false
    let specialCharacters = false
    let isValid = true
    const currDate = new Date()
    const nextDate = new Date(data.nextClinic)
    const nextDay = weekday[nextDate.getDay()]

    console.log('in validation')

    if (data.nextClinic == '') {
      isValid = false
      toast.error('Please Select Next Clinic Date', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    } else if (nextDate < currDate) {
      console.log('next clinic date error')
      isValid = false
      toast.error('Next Clinic Date Is Invalid', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    } else if (!search(nextDay, clinic.clinicSchedules)) {
      isValid = false
      toast.error('No Clinic Schedule On ' + nextDay, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    if (data.note.match('[^A-Za-z0-9.,\t\n ]')) {
      isValid = false
      specialCharacters = true
    }

    if (data.diagnosis.match('[^A-Za-z0-9.,\t\n ]')) {
      isValid = false
      specialCharacters = true
    }
    if (data.tests.match('[^A-Za-z0-9.,\t\n ]')) {
      isValid = false
      specialCharacters = true
    }

    if (medicines.length > 0) {
      medicines.map((row) => {
        if (row.medicine == '') {
          isValid = false
          medicineEmpty = true
        } else if (
          row.medicine.match('[^A-Za-z0-9.,\t\n ]') ||
          row.quantity.match('[^A-Za-z0-9.,\t\n ]')
        ) {
          isValid = false
          specialCharacters = true
        }
      })
    }

    if (specialCharacters) {
      toast.error('Special Characters Not Allowed', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }
    if (medicineEmpty) {
      toast.error('Medicine Cannot Be Empty', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    return isValid
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
    if (name == 'medicine') {
      const suggested = SuggestionList.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
      setSuggestedList(suggested)
    }
  }

  const handleDataChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name == 'tests') {
      const suggested = testSuggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
      )

      setSuggestedTest(suggested)
    }
    setData({ ...data, [name]: value })
  }

  const addTest = (e) => {
    let tests = data.tests
    console.log(tests)
    setData({ ...data, ['tests']: e.currentTarget.innerText })
    setSuggestionOn(false)
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

                  <input
                    placeholder='Tests to do'
                    name='tests'
                    className='form-control'
                    type='text'
                    value={data.tests}
                    onChange={(e) => handleDataChange(e)}
                  ></input>
                  {suggestedTest && suggestionOn && (
                    <ul class='suggestions'>
                      {suggestedTest.map((suggestion, index) => {
                        return (
                          <li key={suggestion} onClick={addTest}>
                            {suggestion}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className='input-group'>
                  <button
                    className='btn btn-primary'
                    style={{ width: 'inherit' }}
                    onClick={handleSubmit}
                    disabled={submitLock}
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
                      suggestedList={suggestedList}
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
  const [medicine, setMedicine] = useState(props.row)
  const [suggestedList, setSuggestedList] = useState(props.suggestedList)
  const [suggestionOn, setSuggestionOn] = useState(true)
  let index = props.index

  useEffect(() => {
    setMedicine(props.row)
    setSuggestedList(props.suggestedList)
  }, [props, medicine, suggestedList])

  const onClick = (e) => {
    let newMedicine = medicine
    newMedicine.medicine = e.currentTarget.innerText
    setMedicine(newMedicine)
    console.log(medicine)
    setSuggestionOn(false)
  }

  console.log(suggestedList)

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
          {suggestedList && suggestionOn && (
            <ul class='suggestions'>
              {suggestedList.map((suggestion, index) => {
                return (
                  <li key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                )
              })}
            </ul>
          )}
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
