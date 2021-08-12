import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'
import ShowIcon from '@material-ui/icons/Visibility'
import ShowOffIcon from '@material-ui/icons/VisibilityOff'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import NavBar from '../../Navbar/Header/Navbar'
import back from '../../assets/img/help.jpg'
import './SetPassword.css'
import axios from 'axios'

const CURRENTURL = window.location.pathname

const ID = Number(CURRENTURL.split('/')[3])
console.log(ID)

const VERIFICATIONSTRING = CURRENTURL.split('/')[4]
console.log(VERIFICATIONSTRING)

const USERINFOURL = 'http://localhost:8080/wecare/user/info/' + ID
const SETPASSWORD = 'http://localhost:8080/wecare/user/set_password'

var user = null

let request = axios.get(USERINFOURL)
request
  .then((res) => {
    if (res.status == 200) {
      if (
        res.data.verificationString == VERIFICATIONSTRING &&
        res.data.verified == false
      ) {
        user = res.data
        console.log(user)
      }
    }
  })
  .catch((e) => {
    window.location.href = '/set password/error'
  })

var initFormValue = {
  password: '',
  repassword: '',
}

var initFormError = {
  password: '',
  repassword: '',
}

const SetPassword = (props) => {
  const [formValue, setFormValue] = useState({ ...initFormValue })
  const [formError, setFormError] = useState({ ...initFormError })
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    document.body.style.backgroundImage = `url('${back}')  `
  }, [])

  const onSubmit = (e) => {
    console.log('onsubmit')
    e.preventDefault()

    let isValid = true
    isValid = validation()

    if (isValid) {
      console.log('Pass')
      user.password = formValue.password
      user.verified = true
      let request = axios.post(SETPASSWORD, user)
      request
        .then((res) => {
          window.location.href = '/login'
        })
        .catch((e) => {
          window.location.href = '/login'
        })
    } else {
      console.log(formValue.password, formValue.repassword)
      console.log('Fail')
    }
  }

  const validation = () => {
    if (formValue.password.length < 8) {
      setFormError({
        ...formError,
        ['password']: 'Password Length must be more than 8',
      })
      return false
    } else {
      setFormError({
        ...formError,
        ['password']: '',
      })
    }

    if (formValue.password != formValue.repassword) {
      setFormError({
        ...formError,
        ['repassword']: 'Passwords do not match',
      })
      return false
    } else {
      setFormError({
        ...formError,
        ['repassword']: '',
      })
    }

    return true
  }

  const onValueChange = (v) => {
    let value = v.target.value
    let name = v.target.name
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className='SignUp'>
        <div className='container' style={{ marginTop: '200px' }}>
          <div
            className='card col-md-6 offset-md-3 offset-md-3'
            style={{ paddingTop: '30px' }}
          >
            <div className='title'>
              <h3 className='text-center' style={{ color: 'black' }}>
                Set Password
              </h3>
            </div>
            <div className='card-body'>
              <form>
                {/* user name */}
                <div className='input-group mb-3'>
                  <span className='input-group-text'>Password:</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    name='password'
                    className='form-control'
                    value={formValue.password}
                    onChange={onValueChange}
                  ></input>
                  <button
                    type='reset'
                    className='btn btn-primary'
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ShowIcon /> : <ShowOffIcon />}
                  </button>
                </div>
                <div className='mb-2'>
                  <div style={{ color: 'red' }}>{formError.password}</div>
                </div>

                <div className='input-group mb-3'>
                  <span className='input-group-text'>Re-Password:</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Re-Password'
                    name='repassword'
                    className='form-control'
                    id='repassword'
                    onChange={onValueChange}
                    value={formValue.repassword}
                  ></input>
                  <button
                    type='reset'
                    className='btn btn-primary'
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ShowIcon /> : <ShowOffIcon />}
                  </button>
                </div>
                <div className='mb-2'>
                  <div style={{ color: 'red' }}>{formError.repassword}</div>
                </div>

                <div className='input-group mb-3'>
                  <button
                    className='btn btn-primary'
                    onClick={onSubmit}
                    style={{ width: '100%' }}
                  >
                    Set Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SetPassword
